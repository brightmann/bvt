---
title: The Val Town Blog is now hosted on Val Town
description: We migrated this blog to Val Town Projects
pubDate: 2025-04-08T00:00:00.000Z
author: Steve Krouse
thumbnail: "https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/ab4e9a49-40aa-4fef-08f0-b37512ba9500/public"
tags: [engineering]
---

![street-blog-web.jpg](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/4abb41d0-f710-46b4-523e-4440a252f400/public)

We migrated our blog to Val Town 🥳

With some cleverness, we were able to build it and migrate 65 old blog posts in
one day. Now our deployments happen instantly (~100ms), and we've greatly
simplified our blogging stack.

|                     | Before                    | Now        |
| ------------------- | ------------------------- | ---------- |
| **Rendering**       | Astro                     | React      |
| **Version control** | GitHub                    | Val Town   |
| **Text editing**    | Local editor              | Val Town   |
| **Deployment**      | Cloudflare Pages + GitHub | Val Town   |
| **Hosting**         | Cloudflare Pages          | Val Town   |
| **CDN**             | Cloudflare                | Cloudflare |

## Should you blog on Val Town?

Maybe! It depends on your constraints and what matters to you. We care deeply
about:

1. Tight feedback loops
2. Simple, browser-based workflows
3. A fast migration

We also care deeply about dogfooding, but unless you're us – and unfortunately
most of you aren't – that one doesn't apply to you.

There are also good reasons _not_ to migrate to Val Town, but we'll get to them
later.

## Tight feedback loops

We at Val Town are obsessed with tight feedback loops.

> "Creators need an immediate connection to what they're creating."
>
> – Bret Victor, "Inventing on Principle"

In some ways, this singular commitment to tight feedback loops is what separates
Val Town from all other code hosting & deployment platforms. We believe that you
should be able to _iterate directly in your production environment_, not iterate
locally, then deploy, then wait minutes to see how things look live.

<p style="position: relative; aspect-ratio: 16/9; border: 1.5px solid grey; border-radius: 10px; overflow: hidden;">
  <iframe
    src="https://player.mux.com/wYfiMf8NFzczOfdviMltPPer3CA6FrO3drvHnBSpdBQ?autoplay=muted&loop=true&preload=metadata"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
    allowfullscreen="true"
  ></iframe>
</p>

In Val Town, a save _is_ a deploy, and it happens in about 100ms. We go to great
technical lengths to make this possible. This means no waiting minutes to see
what your post looks like live. You get the fast local dev experience, but with
production. And this goes for branches too. Every edit of every branch is
instantly deployed in a shareable URL.

## Simple, browser-based workflow

Val Town lets you use fewer tools. It replaces:

- your local text editor,
- git + GitHub for version control
- whatever you use for deployment and hosting, Cloudflare, Vercel, Render,
  Railway, Heroku, Digital Ocean, Hertzner, etc

Simpler, browser-based workflows are particularly important for casual
contributors, such as less technical folks on your team or strangers on the
internet. Val Town is a single website for code to be edited, versioned,
collaborated on, and deployed. No need for anyone to install or use git, clone
the repo locally, install programming languages and dependencies, or use a local
text editor.

For example, here's how to make a change to this blog that you're reading right
now:

<p style="position: relative; aspect-ratio: 16/9; border: 1.5px solid grey; border-radius: 10px; overflow: hidden;">
  <iframe
    src="https://player.mux.com/8n5KlbJOlPKqLpQ02HDaNmVBGuRnDzLj1CXsahaZE96o?poster=""
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
    allowfullscreen="true"
  ></iframe>
</p>

Val Town is uniquely positioned to allow anyone see their changes deployed live
in their remix, because we host both your source code _and_ your deployments.

## A fast migration

How did we migrate 65 blog posts – with images, videos, and intricate formatting
and styles – to an entirely new blog in a single day?

We didn't. We left them where they are, and proxy to them.

Writing a proxy in Val Town (or any functions platform with the
['fetch handler' interface](https://blog.val.town/blog/the-api-we-forgot-to-name/))
is a delight:

```ts
const OLD_BLOG_HOST = "https://val-town-blog.pages.dev/";
export async function proxy(req: Request): Promise<Response> {
  const url = new URL(req.url);
  return fetch(OLD_BLOG_HOST + url.pathname + url.search, {
    method: req.method,
    headers: req.headers,
  });
}
```

So if you go to view
[blog.val.town/blog/val-town-newsletter-24](https://blog.val.town/blog/val-town-newsletter-24)
you'll see exactly what you would at
[val-town-blog.pages.dev/blog/val-town-newsletter-24](https://val-town-blog.pages.dev/blog/val-town-newsletter-24).
I find it eerie that proxies work so well.

We've had reasonable success with this technique of migrating to Val Town
quickly by proxying most old content, and only rebuilding the homepage and new
posts. I first used this technique on my personal website,
[stevekrouse.com](https://stevekrouse.com), and was pleased to see it continue
to work here.

## Good reasons _not_ to blog on Val Town

1. Val Town Projects are beta software, so you'd be on the cutting-edge
   alongside us. We're coming up with patterns that you'd get for free from
   mature blogging tools like Astro and Cloudflare Pages.
2. Val Town doesn't have good workflows for bundlers or build steps, so it's
   hard to use anything that requires vite, etc.
3. Val Town doesn't (yet) have pull request comments.

Personally, I value simplicity, so I don't mind building a basic blog from
scratch without a bundler with some help from AI. I do miss pull requests
comments though. We plan on building them soon.

## Bad reasons _not_ to blog on Val Town

1. **Lock-in**. Val Town is built on Deno and web standards, so you can easily
   leave for another deployment platform like Cloudflare, Vercel, or Deno
   Deploy. We'll even help you migrate. We believe in the open web.

2. **Price**. We have a generous free tier, so your blog can go viral on HN, get
   100k hits in a day, and you pay $0. It's $10 / month for 1m code runs per
   day. Need additional scale beyond that? It's still $10 / month while our
   Scale Plan is in beta. When ready, our scale pricing will be in line with
   other FaaS providers.

## Get yourself a Val Town blog

If you are starting a new blog from scratch, remix
[this markdown blog starter](https://www.val.town/x/stevekrouse/markdownBlogStarter).

If you are migrating an existing blog, feel free to remix
[the Val Town blog](https://www.val.town/x/ValDotTown/blog). It comes with good
patterns for proxying to old content.
