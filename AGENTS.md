# Agent Guidelines for Wishlist Repository

## Build Commands
- **Install**: `npm install` - install dependencies
- **Dev**: `npm run dev` - local dev server with live reload
- **Build**: `npm run build` - static site in `dist/`
- **Preview**: `npm run preview` - serve the production build
- Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`

## Content Structure
- Static site built with [Astro](https://astro.build) (see `astro.config.mjs`)
- Wishlist items are Markdown files in `src/<category>/*.md`, loaded as Astro content collections (defined in `src/content.config.ts`)
- Item frontmatter: `title`, optional `author`, `price`, `links` (list of `label`/`url`); the body (a blockquote) is the item description
- Category metadata (slug, label, order) lives in `src/categories.ts`
- Categories: `tech-gadgets/`, `tools/`, `lifestyle/`, `books/` (add new categories as a new subdirectory plus an entry in `categories.ts` and a collection in `content.config.ts`)

## Style Guidelines
- **Metadata format**: frontmatter fields as shown above, double-quoted strings
- **Descriptions**: blockquotes (>) for item descriptions
- **Links**: prefer official stores, then Galaxus.ch for the Swiss market
- **Formatting**: clean Markdown, consistent spacing, British English
- No `SUMMARY.md`: pages are generated from the content collections

## File Naming
- Lowercase with hyphens: `product-name.md`
- Match category subdirectories in `src/`

## Styling
- Global styles in `src/styles/global.css`
- Blue theme (#2196F3) for links and accents, light and dark modes via `prefers-color-scheme`
- Responsive card grid on the homepage, sidebar navigation on all pages
