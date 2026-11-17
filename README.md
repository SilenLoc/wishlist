# My Wishlist

A personal gift wishlist built with [Astro](https://astro.build), deployed to
GitHub Pages at <https://silenloc.github.io/wishlist/>.

## Local development

```sh
npm install
npm run dev      # dev server with live reload
npm run build    # static build to dist/
npm run preview  # serve the production build locally
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and deploys it to
GitHub Pages automatically.

## Structure

- `src/pages/` — site pages (Astro components and Markdown)
- `src/layouts/` — shared layout with sidebar navigation
- `src/styles/` — global stylesheet
- `src/books/`, `src/tech-gadgets/`, `src/tools/`, `src/lifestyle/` —
  wishlist items as Markdown content collections
- `src/content.config.ts` — collection definitions and schema
- `src/categories.ts` — category registry used for navigation and routing
