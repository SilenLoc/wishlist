export interface Category {
  slug: string;
  label: string;
}

/** Ordered category registry used for routing and navigation. */
export const categories: Category[] = [
  { slug: "tech-gadgets", label: "Tech & Gadgets" },
  { slug: "tools", label: "Tools" },
  { slug: "lifestyle", label: "Lifestyle" },
  { slug: "books", label: "Books" },
];
