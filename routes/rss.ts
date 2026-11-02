import { Feed } from "feed";
import { Hono } from "hono";
import { posts } from "../utils/posts.ts";

const app = new Hono();

app.get("/", async (c) => {
  // Create a new feed instance
  const feed = new Feed({
    title: "Val Town Blog",
    description: "The official blog for Val Town",
    id: "https://blog.val.town/",
    link: "https://blog.val.town/",
    language: "en",
    favicon: "https://blog.val.town/favicon.svg",
    updated: new Date(posts[0].pubDate),
    feedLinks: {
      rss: "https://blog.val.town/rss.xml",
    },
  });

  // Add each post to the feed
  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `https://blog.val.town${post.link}`,
      link: `https://blog.val.town${post.link}`,
      description: post.description,
      author: [
        {
          name: post.author,
        },
      ],
      date: new Date(post.pubDate),
    });
  }

  // Return the RSS feed
  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
});

export default app;