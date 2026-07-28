export type BlogCategory = "News" | "Guides" | "Product Spotlight";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "News",
  "Guides",
  "Product Spotlight",
];

export type BlogAuthor = {
  name: string;
  role?: string;
};

export type RelatedProduct = {
  label: string;
  href: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Rendered HTML. Trusted sample content now; WordPress `content.rendered` later. */
  contentHtml: string;
  coverImage: string;
  coverAlt: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  /** ISO 8601 date string, e.g. "2026-07-02". */
  publishedAt: string;
  readingMinutes: number;
  /** Set on product-spotlight posts to cross-link into the catalog. */
  relatedProduct?: RelatedProduct;
  /** 1–5 images from the WP "Gallery" field, rendered as a mosaic after the body. */
  gallery?: GalleryImage[];
};
