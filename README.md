# aolmo.github.io

> **This branch (`main`) is outdated and is not what the website shows.**
> Do not make changes here.

The live site at <https://aolmo.github.io> is the **[`gh-pages`](../../tree/gh-pages)** branch.
It is a [Jekyll](https://jekyllrb.com/) site that GitHub Pages builds automatically on every push.

| Branch | Contents |
| --- | --- |
| [`gh-pages`](../../tree/gh-pages) | **The website.** Edit this branch. |
| [`master`](../../tree/master) | Retired Angular version of the site (until Nov 2026). Do not deploy it. |
| `main` | An early (2020) compiled build, kept only for history. |

## How to update the website

1. Switch to the `gh-pages` branch.
2. Edit the content in `_data/` (education, experience, publications, honors, links)
   or the bio in `index.html`. The branch's README lists which file holds what.
3. Commit and push. The site updates a minute or two later.

Publications are not edited by hand: the
[`scholar-sync`](.github/workflows/scholar-sync.yml) workflow on this branch
reads the Google Scholar profile daily and updates `_data/scholar.json` on
`gh-pages`. It can also be started from the **Actions** tab.
