


run:
    mdbook serve

build:
    mdbook build


pub:
    git add .
    git commit -m "Update wishlist"
    git push origin main