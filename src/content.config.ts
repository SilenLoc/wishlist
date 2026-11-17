import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const itemSchema = z.object({
  title: z.string(),
  author: z.string().optional(),
  price: z.string(),
  links: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .default([]),
});

export const collections = {
  "tech-gadgets": defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/tech-gadgets" }),
    schema: itemSchema,
  }),
  tools: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/tools" }),
    schema: itemSchema,
  }),
  lifestyle: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/lifestyle" }),
    schema: itemSchema,
  }),
  books: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/books" }),
    schema: itemSchema,
  }),
};
