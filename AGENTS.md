# Agent Guidelines for Wishlist Repository

## Build Commands
- **Build**: `mdbook build` - Generate static site in `book/` directory
- **Serve**: `mdbook serve` - Local development server with live reload
- **Test**: `mdbook test` - Test code blocks in documentation
- **Clean**: `rm -rf book/` - Remove build artifacts

## Content Structure
- All content in `src/` directory with `SUMMARY.md` as navigation
- Item format: Category, Price (CHF), Purchase link, blockquote description
- Categories: `tech-gadgets/`, `lifestyle/` (add new categories as subdirectories)

## Style Guidelines
- **Metadata format**: `**Category**: Tech & Gadgets`, `**Price**: CHF XX.XX`, `**Where to buy**: [Link](url)`
- **Descriptions**: Use blockquotes (>) for item descriptions
- **Links**: Prefer official stores, then Galaxus.ch for Swiss market
- **Formatting**: Clean markdown, consistent spacing, British English

## File Naming
- Lowercase with hyphens: `product-name.md`
- Match category subdirectories in `src/`
- Update `SUMMARY.md` when adding new items

## CSS Customization
- Custom styles in `assets/css/custom.css`
- Uses blue theme (#2196F3) for links and accents
- Responsive table styling, item metadata blocks