#!/usr/bin/env python3
"""Sync the website's publication list from a Google Scholar profile.

Usage: scholar_sync.py OUTPUT_JSON

Reads the profile given by the SCHOLAR_USER environment variable, sorted by
citations (one request to Google Scholar per run, to avoid being blocked),
looks up each paper on the Semantic Scholar API for a link to the paper (DOI,
arXiv or open-access PDF) and its full author list, and writes OUTPUT_JSON
(read by Jekyll as site.data.scholar).

The output file is only rewritten when the publication list actually changed.
If Scholar blocks the request (CAPTCHA, HTTP error) or the page cannot be
parsed, the script exits non-zero and leaves the existing file alone, so the
website keeps showing the last good list.

Standard library only.
"""
import datetime
import difflib
import html
import json
import os
import random
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

BASE = "https://scholar.google.com"
USER_AGENT = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)
PAGE_SIZE = 100


class Blocked(Exception):
    """Scholar refused the request (CAPTCHA, rate limit, or error page)."""


def fetch(url):
    req = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Accept-Language": "en-US,en;q=0.9",
        "Accept": "text/html,application/xhtml+xml",
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            final_url = resp.geturl()
            body = resp.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        raise Blocked(f"HTTP {e.code} for {url}") from e
    if "/sorry/" in final_url or "gs_captcha" in body or "unusual traffic" in body:
        raise Blocked(f"CAPTCHA / unusual-traffic page for {url}")
    return body


def text(fragment):
    """HTML fragment -> plain text."""
    fragment = re.sub(r"<[^>]+>", "", fragment)
    return " ".join(html.unescape(fragment).split())


def parse_profile(body):
    """Return the list of publication rows on one profile page."""
    rows = []
    for row in re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', body, re.S):
        m = re.search(r'<a href="([^"]+)" class="gsc_a_at">(.*?)</a>', row, re.S)
        if not m:
            continue
        grays = re.findall(r'<div class="gs_gray">(.*?)</div>', row, re.S)
        venue_html = grays[1] if len(grays) > 1 else ""
        venue_html = re.sub(r'<span class="gs_oph">.*?</span>', "", venue_html, flags=re.S)
        cites = re.search(r'class="gsc_a_ac[^"]*">(\d*)</a>', row)
        year = re.search(r'<span class="gsc_a_h[^"]*">(\d{4})</span>', row)
        rows.append({
            "title": text(m.group(2)),
            "authors": text(grays[0]) if grays else "",
            "venue": text(venue_html),
            "year": int(year.group(1)) if year else None,
            "citations": int(cites.group(1)) if cites and cites.group(1) else 0,
            "scholar_url": BASE + html.unescape(m.group(1)),
        })
    return rows


S2_MATCH = "https://api.semanticscholar.org/graph/v1/paper/search/match"
S2_FIELDS = "title,url,externalIds,openAccessPdf,authors"


def normalize(title):
    return re.sub(r"[^a-z0-9]+", " ", title.lower()).strip()


def titles_match(a, b):
    a, b = normalize(a), normalize(b)
    return bool(a) and (a == b or difflib.SequenceMatcher(None, a, b).ratio() >= 0.9)


def s2_lookup(title, attempts=4):
    """Paper link and authors from Semantic Scholar, or {} if not found."""
    url = f"{S2_MATCH}?query={urllib.parse.quote(title)}&fields={S2_FIELDS}"
    for attempt in range(attempts):
        req = urllib.request.Request(url, headers={"User-Agent": "aolmo.github.io publication sync"})
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = json.load(resp)
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return {}          # no match
            if e.code == 429 and attempt + 1 < attempts:
                time.sleep(5 * (attempt + 1))   # rate limited: back off and retry
                continue
            print(f"    Semantic Scholar error {e.code}")
            return {}
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"    Semantic Scholar unreachable: {e}")
            return {}
    else:
        return {}
    paper = (data.get("data") or [None])[0]
    if not paper or not titles_match(title, paper.get("title") or ""):
        return {}
    ids = paper.get("externalIds") or {}
    out = {}
    if ids.get("DOI"):
        out["paper_url"] = "https://doi.org/" + ids["DOI"]
    elif ids.get("ArXiv"):
        out["paper_url"] = "https://arxiv.org/abs/" + ids["ArXiv"]
    elif paper.get("url"):
        out["paper_url"] = paper["url"]
    pdf = (paper.get("openAccessPdf") or {}).get("url")
    if pdf:
        out["pdf_url"] = pdf
    elif ids.get("ArXiv"):
        out["pdf_url"] = "https://arxiv.org/pdf/" + ids["ArXiv"]
    names = [a.get("name") for a in paper.get("authors") or [] if a.get("name")]
    if names:
        out["authors"] = ", ".join(names)
    return out


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    out_path = sys.argv[1]
    user = os.environ.get("SCHOLAR_USER", "").strip()
    if not user:
        sys.exit("SCHOLAR_USER is not set")

    profile_url = f"{BASE}/citations?user={urllib.parse.quote(user)}&hl=en"
    pubs, start = [], 0
    while True:
        body = fetch(f"{profile_url}&cstart={start}&pagesize={PAGE_SIZE}&sortby=citedby")
        rows = parse_profile(body)
        pubs.extend(rows)
        if len(rows) < PAGE_SIZE:
            break
        start += PAGE_SIZE
        time.sleep(random.uniform(3, 6))

    if not pubs:
        sys.exit("Parsed 0 publications; the page layout may have changed. Not updating.")
    print(f"Found {len(pubs)} publications on the profile.")

    old = None
    if os.path.exists(out_path):
        with open(out_path, encoding="utf-8") as f:
            old = json.load(f)
    previous = {p["scholar_url"]: p for p in (old or {}).get("publications", [])}

    for p in pubs:
        time.sleep(1.5)  # stay well under Semantic Scholar's public rate limit
        found = s2_lookup(p["title"])
        if not found:
            # Keep what the last successful sync found for this paper, if anything.
            prev = previous.get(p["scholar_url"], {})
            found = {k: prev[k] for k in ("paper_url", "pdf_url", "authors") if k in prev}
        p.update(found)
        print(f"  {p['citations']:>5}  {p['title'][:70]}  ->  {p.get('paper_url', '(Scholar page)')}")

    # Highest citations first; ties: newest first, then title.
    pubs.sort(key=lambda p: (-p["citations"], -(p["year"] or 0), p["title"].lower()))
    if old and old.get("publications") == pubs and old.get("user") == user:
        print("No changes.")
        return

    data = {
        "user": user,
        "profile_url": profile_url,
        "updated": datetime.date.today().isoformat(),
        "publications": pubs,
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Wrote {out_path}.")


if __name__ == "__main__":
    try:
        main()
    except Blocked as e:
        sys.exit(f"Google Scholar blocked the request: {e}. Not updating.")
