import { Hono } from "hono";
import { ssgParams } from "hono/ssg";
import { renderToStaticMarkup } from "react-dom/server";
import { HomePage } from "./components/HomePage.tsx";
import { ArchivePage } from "./components/ArchivePage.tsx";
import { BlogPostComponent } from "./components/BlogPost.tsx";
import { posts } from "./utils/posts.ts";
import {
  archivePagePosts,
  archiveTotalPages,
} from "./utils/archive.ts";
import { processMarkdown } from "./utils/render-markdown.ts";
import rss from "./routes/rss.ts";
import sitemap from "./routes/sitemap.ts";
import robots from "./routes/robots.ts";
import ogImages from "./routes/og-images.tsx";

const app = new Hono();
const bySlug = new Map(posts.map((post) => [post.slug, post]));

app.route("/rss.xml", rss);
app.route("/sitemap.xml", sitemap);
app.route("/robots.txt", robots);
app.route("/og", ogImages);

app.get("/", (c) => c.html(
  "<!doctype html>" + renderToStaticMarkup(<HomePage posts={posts} />),
));

app.get("/archive", (c) =>
  c.html(
    "<!doctype html>" + renderToStaticMarkup(
      <ArchivePage
        posts={archivePagePosts(1)}
        page={1}
        totalPages={archiveTotalPages}
      />,
    ),
  ));

app.get(
  "/archive/:page",
  ssgParams(() =>
    Array.from({ length: Math.max(0, archiveTotalPages - 1) }, (_, i) => ({
      page: String(i + 2),
    }))),
  (c) => {
    const page = Number(c.req.param("page"));
    if (!Number.isInteger(page) || page < 2 || page > archiveTotalPages) {
      return c.notFound();
    }
    return c.html(
      "<!doctype html>" + renderToStaticMarkup(
        <ArchivePage
          posts={archivePagePosts(page)}
          page={page}
          totalPages={archiveTotalPages}
        />,
      ),
    );
  },
);

app.get("/:slug", ssgParams(() => posts.map((post) => ({ slug: post.slug }))), async (c) => {
  const post = bySlug.get(c.req.param("slug"));
  if (!post) return c.notFound();
  const content = await processMarkdown(post.content);
  return c.html("<!doctype html>" + renderToStaticMarkup(
    <BlogPostComponent post={post} content={content} />,
  ));
});

// The build rejects non-200 responses; log the original rendering error here.
app.onError((error, c) => {
  console.error(error);
  return c.text("Static rendering failed", 500);
});
export default app;
