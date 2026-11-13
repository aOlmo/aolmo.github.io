# aolmo.github.io

Source of <https://aolmo.github.io>. This `gh-pages` branch **is** the website:
GitHub Pages builds it with [Jekyll](https://jekyllrb.com/) on every push.

## Editing content

| What | Where |
| --- | --- |
| Education | `_data/education.yml` |
| Experience | `_data/experience.yml` |
| Publications | Synced automatically from Google Scholar into `_data/scholar.json` (see below) |
| Poster / arXiv links for publications | `_data/publication_extras.yml` |
| Honors | `_data/honors.yml` |
| Sidebar links | `_data/links.yml` |
| Bio paragraph | `index.html` |
| Name, role line under the name, email, page description, Analytics ID | `_config.yml` |
| Page frame (head, header with photo and links) | `_layouts/default.html` |
| Styles | `assets/css/site.css` |

Commit and push to `gh-pages`; the site updates a minute or two later.

## Publications (Google Scholar sync)

A scheduled GitHub Actions workflow, `.github/workflows/scholar-sync.yml` on the
`main` branch, reads the Google Scholar profile once a day, writes
`_data/scholar.json` here (sorted by citations), and commits only when something
changed. Run it by hand from the repository's **Actions** tab ("Sync publications
from Google Scholar" → "Run workflow"). If Scholar blocks the request, the run
fails and the site keeps the last good list. Until the first successful sync,
the site shows the hand-written list in `_data/publications.yml`.

Don't edit `_data/scholar.json` by hand; the next sync overwrites it. To add a
poster or arXiv link to a paper, add an entry to `_data/publication_extras.yml`.

## Previewing locally (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
