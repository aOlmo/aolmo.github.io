# aolmo.github.io

> **This branch (`main`) is outdated and is not what the website shows.**
> Do not make changes here.

The live site at <https://aolmo.github.io> is served from the **`gh-pages`** branch.

| Branch | Contents |
| --- | --- |
| [`gh-pages`](../../tree/gh-pages) | **What is published.** Compiled output of the Angular app. |
| [`master`](../../tree/master) | Angular source code that `gh-pages` is built from. |
| `main` | An early (2020) compiled build, kept only for history. |

## How to update the website

`gh-pages` is generated, so edit the source on `master` and redeploy rather
than editing the compiled files by hand:

```bash
git checkout master
npm install
ng serve        # preview at http://localhost:4200
ng deploy --base-href=/   # builds and pushes the result to gh-pages
```

GitHub Pages republishes the site a minute or two after `gh-pages` changes.
