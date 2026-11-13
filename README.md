# aolmo.github.io

My personal website, built with [Jekyll](https://jekyllrb.com/) and served by GitHub Pages.

## Editing content

All content lives in YAML files under `_data/`. No code changes needed:

| File | Section |
| --- | --- |
| `_data/education.yml` | Education |
| `_data/publications.yml` | Publications |
| `_data/experience.yml` | Experience |
| `_data/honors.yml` | Honors |

The bio paragraph is in `index.html`; the page frame (header, photo, footer) is in `_layouts/default.html`; styles are in `assets/css/site.css`.

## Previewing locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. Pushing to the default branch publishes the site.
