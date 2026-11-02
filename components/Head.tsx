/** @jsxImportSource react */
import { BLOG_URL, SITE_DESCRIPTION, SITE_TITLE } from "../utils/constants.ts";
import type { BlogPost } from "../utils/types.ts";

export default function Head({ post }: { post?: BlogPost }) {
  const title = post?.title ?? SITE_TITLE;
  const description = post?.description ?? SITE_DESCRIPTION;
  let ogImage: string | URL;
  if (post?.thumbnail) {
    ogImage = new URL(post.thumbnail, BLOG_URL).href;
  } else {
    ogImage = new URL(post ? `/og/${post.slug}.png` : "/og/index.png", BLOG_URL);
  }

  const canonicalURL = post?.link
    ? new URL(post.link, BLOG_URL).href
    : BLOG_URL;
  const author = post?.author ?? "Val Town Team";

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/webp"
        href="/images/473ff8bf-72e9-4141-2921-933e11f74b00.webp"
      />

      <title>
        {title === "Val Town Blog" ? title : `${title} | Val Town Blog`}
      </title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {post?.pubDate && (
        <meta name="date" content={new Date(post.pubDate).toISOString()} />
      )}

      {/* RSS */}
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/rss.xml"
        title="Val Town Blog"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={post ? "article" : "website"} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {post?.pubDate && (
        <meta
          property="article:published_time"
          content={new Date(post.pubDate).toISOString()}
        />
      )}
      {post?.author && <meta property="article:author" content={post.author} />}

      <meta property="og:image" content={ogImage} />
      <meta property="og:logo" content={new URL("/og/logo.png", BLOG_URL).href} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      <link rel="stylesheet" href="/styles/index.css" />
      <link rel="stylesheet" href="/styles/highlight.css" />
    </head>
  );
}
