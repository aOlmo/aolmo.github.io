# aolmo.github.io

Source of <https://aolmo.github.io>. This `gh-pages` branch **is** the website:
GitHub Pages builds it with [Jekyll](https://jekyllrb.com/) on every push.

## Editing content

| What | Where |
| --- | --- |
| Education | `_data/education.yml` |
| Experience | `_data/experience.yml` |
| Publications | `_data/publications.yml` |
| Honors | `_data/honors.yml` |
| Sidebar links | `_data/links.yml` |
| Bio paragraph | `index.html` |
| Name, email, page description, Analytics ID | `_config.yml` |
| Page frame (head, sidebar) | `_layouts/default.html` |
| Styles | `assets/css/site.css` |

Commit and push to `gh-pages`; the site updates a minute or two later.

## Previewing locally (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
