import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { normalizeTags } from "./tags.ts";
import type { BlogPost } from "./types.ts";

// This module runs in Node at build time, never in the browser or a Worker.
const directory = new URL("../posts/", import.meta.url);
const files = (await readdir(directory))
  .filter((name) => name.endsWith(".md"))
  .sort();

export const posts: BlogPost[] = await Promise.all(
  files.map(async (file) => {
    const { data, content } = matter(
      await readFile(new URL(file, directory), "utf8"),
    );
    if (!data.title || !data.pubDate) {
      throw new Error(`${file}: missing title or pubDate`);
    }
    const slug =
      data.slug ?? file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
    if (typeof slug !== "string" || !slug || /[/?#\\]/.test(slug)) {
      throw new Error(`${file}: invalid slug`);
    }
    const date = new Date(data.pubDate);
    if (Number.isNaN(date.getTime()))
      throw new Error(`${file}: invalid pubDate`);
    return {
      title: data.title,
      description: data.description ?? "",
      pubDate: date.toISOString(),
      author: data.author ?? "Val Town Team",
      slug,
      link: `/${slug}`,
      content,
      // Retain source links to the old blog until the GitHub repo exists.
      valSourceURL: `https://www.val.town/x/valdottown/blog/posts/${encodeURIComponent(file)}`,
      thumbnail: data.thumbnail,
      tags: normalizeTags(data.tags, file),
    };
  }),
);

const slugs = new Set<string>();
for (const post of posts) {
  if (slugs.has(post.slug)) throw new Error(`Duplicate slug: ${post.slug}`);
  slugs.add(post.slug);
}
posts.sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate));
