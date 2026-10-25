# Xianjin Wu — Academic Homepage

A personal academic website built with the actual [al-folio](https://github.com/alshedivat/al-folio) v1 starter and its `al_folio_core` runtime. The original MIT license is included in `LICENSE`.

## Preview locally

Use Ruby 3.3 and Bundler:

```sh
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000/.

## Edit content

- Biography: `_pages/about.md`
- Publications and paper links: `_bibliography/papers.bib`
- Awards (shared by the homepage and honors page): `_includes/honors.md`
- Experience (shared by the homepage and experience page): `_includes/experience.liquid`
- Education: `_includes/education.liquid`
- Academic service: `_pages/about.md`
- GitHub star fallback counts: `_data/github_repositories.yml` (refreshed in the browser from GitHub)
- Open-source projects: `_pages/projects.md`
- Social links: `_data/socials.yml`
- News: `_news/`
- Portrait, paper figures, and organization logos: `assets/img/`
- Original award certificates: `assets/certificates/`
- Homepage and publication sizing: `_sass/_homepage.scss`

RePIC links to the author-supplied OpenReview page and PDF, and is clearly labeled under review. Add its arXiv ID to the BibTeX entry when the preprint is released.

## GitHub Pages

The site is configured for `https://hyperboliccurve.github.io/`, with an empty `baseurl`. Its repository should be named `HyperbolicCurve.github.io` under the `HyperbolicCurve` account. Set the repository's Pages source to **GitHub Actions**. The included workflow builds and deploys on pushes to `main`.

The workflow uses GitHub's repository-scoped token; no personal access token is stored in the project.

## Validation

```sh
npm ci
npm run lint:prettier
bundle exec al-folio upgrade audit --no-fail
bundle exec jekyll build
```

Four local overrides are tracked in `.al-folio-overrides.yml`: `_includes/news.liquid` displays month-level news dates; `assets/css/main.scss` loads the site-specific styles; `_includes/header.liquid` adds the homepage brand; and `_layouts/bib.liquid` adds GitHub icons and repository star counts to code links. The starter's sample publications, blog posts, placeholder CV, tracking configuration, and unrelated demo pages are not included.
