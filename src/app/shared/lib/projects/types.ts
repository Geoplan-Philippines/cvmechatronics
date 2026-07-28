export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  /** WordPress `content.rendered` — externally-authored HTML, sanitized before render. */
  contentHtml: string;
  coverImage: string;
  coverAlt: string;
  /** Systems/services involved (e.g. "Gate Automation"), mapped from WP tags. */
  tags: string[];
  /** ISO 8601 date string, e.g. "2026-07-02". */
  publishedAt: string;
  /** 1–5 images from the WP "Gallery" field, rendered as a mosaic after the body. */
  gallery?: GalleryImage[];
};
