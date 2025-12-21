---
layout: home
title: "My Wishlist"
---

# My Wishlist 🎁

Welcome to my personal wishlist! This is a curated collection of things I'd love to have, ranging from practical items to dream purchases.

## Categories

- **Tech & Gadgets** - The latest technology and useful gadgets
- **Lifestyle** - Items that make daily life more enjoyable
- **Books & Learning** - Educational resources and interesting reads
- **Travel & Experiences** - Places to visit and experiences to have

---

## Current Wishlist Items

<div class="wishlist-grid">
{% for item in site.wishlist %}
  <div class="wishlist-item">
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    <div class="item-meta">
      <span class="category">{{ item.category }}</span>
      <span class="priority priority-{{ item.priority | downcase }}">{{ item.priority }}</span>
    </div>
    {% if item.price %}
    <div class="price">{{ item.price }}</div>
    {% endif %}
    <p class="description">{{ item.description }}</p>
    {% if item.where_to_buy %}
    <div class="buy-link">
      <a href="{{ item.where_to_buy }}" target="_blank" class="btn">View Product</a>
    </div>
    {% endif %}
  </div>
{% endfor %}
</div>

---

## How to Use This Wishlist

This wishlist is organized by priority and category. Each item includes:
- A detailed description
- Price information (when available)
- Where to purchase
- Priority level (High, Medium, Low)

Feel free to browse through the categories or check out individual items for more details!