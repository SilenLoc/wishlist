---
layout: default
title: "My Wishlist"
---

# My Wishlist 🎁

Welcome to my personal wishlist! This is a curated collection of things I'd love to have, ranging from practical items to dream purchases.

## Categories

- **Tech & Gadgets** - The latest technology and useful gadgets
- **Books & Learning** - Educational resources and interesting reads
- **Lifestyle** - Items that make daily life more enjoyable
- **Travel & Experiences** - Places to visit and experiences to have

---

## Current Wishlist Items

{% for item in site.wishlist %}
<div class="wishlist-item">
  <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
  <p><strong>Category:</strong> {{ item.category }}</p>
  <p><strong>Priority:</strong> {{ item.priority }}</p>
  {% if item.price %}
  <p><strong>Price:</strong> {{ item.price }}</p>
  {% endif %}
  <p>{{ item.description }}</p>
  {% if item.where_to_buy %}
  <p><strong>Where to buy:</strong> <a href="{{ item.where_to_buy }}" target="_blank">Link</a></p>
  {% endif %}
</div>
<hr>
{% endfor %}

---

## How to Use This Wishlist

This wishlist is organized by priority and category. Each item includes:
- A detailed description
- Price information (when available)
- Where to purchase
- Priority level (High, Medium, Low)

Feel free to browse through the categories or check out individual items for more details!

<style>
.wishlist-item {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  margin: 16px 0;
  background-color: #f6f8fa;
}
.wishlist-item h3 {
  margin-top: 0;
  color: #0366d6;
}
</style>