import { Hono } from "hono";
import { BLOG_URL } from "../utils/constants.ts";
import { posts } from "../utils/posts.ts";

const app = new Hono();

// Escape the five XML entities so a stray & or < can't break the document
function escapeXML(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// <lastmod> wants W3C Datetime; YYYY-MM-DD is the allowed short form
function toISODate(date: string) {
  return new Date(date).toISOString().slice(0, 10);
}

function urlEntry(loc: string, lastmod?: string) {
  return [
    "  <url>",
    `    <loc>${escapeXML(loc)}</loc>`,
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
    "  </url>",
  ].join("\n");
}

app.get("/", (c) => {
  // Homepage's lastmod is the newest post (posts are sorted newest-first)
  const entries = [
    urlEntry(`${BLOG_URL}/`, posts[0] && toISODate(posts[0].pubDate)),
    ...posts.map((post) => urlEntry(`${BLOG_URL}${post.link}`, toISODate(post.pubDate))),
  ];

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries,
    `</urlset>`,
  ].join("\n");

  return c.body(xml, 200, {
    "Content-Type": "application/xml; charset=utf-8",
  });
});

export default app;
