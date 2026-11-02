import { Hono } from "hono";
import { BLOG_URL } from "../utils/constants.ts";

const app = new Hono();

// Publish crawl preferences here; Cloudflare security and rate limits remain separate.
// Keep crawlers away from utility endpoints and dynamic image generation.
app.get("/", (c) => {
  if (process.env.SITE_ENV !== "production") return c.text("User-agent: *\nDisallow: /\n");
  return c.text(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /og/

Sitemap: ${BLOG_URL}/sitemap.xml
`);
});

export default app;
