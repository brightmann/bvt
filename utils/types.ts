import type { Tag } from "./tags.ts";

export type BlogPost = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author: string;
  valSourceURL: string;
  content: string;
  slug: string;
  thumbnail?: string;
  tags?: Tag[];
};
