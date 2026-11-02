import type { Tag } from "./tags.ts";

export type BlogPost = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author: string;
  sourceURL: string;
  content: string;
  slug: string;
  thumbnail?: string;
  tags?: Tag[];
};
