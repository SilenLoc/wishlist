# My Wishlist

A personal wishlist built with [mdBook](https://rust-lang.github.io/mdBook/) and automatically deployed to GitHub Pages.

## 🎁 What's This?

This is my curated wishlist - a collection of things I'd love to have, ranging from practical tech gadgets to lifestyle improvements. It's organized by category and priority to help me (and anyone interested in getting me gifts!) understand what I'm currently wanting.

## 📚 Built with mdBook

This wishlist is built using mdBook, which creates a beautiful, searchable, and navigable book-like interface. Each wishlist item gets its own page with detailed information including:

- Why I want it
- Detailed specifications
- Price and purchase links
- Priority level
- Alternatives I've considered

## 🚀 Live Site

The wishlist is automatically deployed to GitHub Pages at: `https://[your-username].github.io/wishlist/`

## 🔧 Local Development

To run this locally:

1. Install mdBook:
   ```bash
   curl -L https://github.com/rust-lang/mdBook/releases/download/v0.4.40/mdbook-v0.4.40-x86_64-unknown-linux-gnu.tar.gz | tar -xz
   chmod +x mdbook
   ```

2. Build the book:
   ```bash
   ./mdbook build
   ```

3. Serve locally:
   ```bash
   ./mdbook serve
   ```

## 📝 Adding Items

To add new wishlist items:

1. Create a new markdown file in the appropriate category folder under `src/`
2. Update `src/SUMMARY.md` to include the new item
3. Follow the existing format for consistency

## 🎨 Categories

- **Tech & Gadgets** - Technology and useful gadgets
- **Lifestyle** - Items that enhance daily life
- **Books & Learning** - Educational resources
- **Travel & Experiences** - Places and experiences

## 🤖 Automatic Deployment

This repository uses GitHub Actions to automatically build and deploy the mdBook to GitHub Pages whenever changes are pushed to the main branch.
