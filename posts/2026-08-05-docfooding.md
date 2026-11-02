---
title: "Docfooding: Eating our own documentation"
description: The Val Town docs are now written and hosted on Val Town
pubDate: 2026-08-05T00:00:00.000Z
author: Pete Millspaugh
thumbnail: https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/f5a9ebdf-6e0b-4429-cbdc-1c0601494a00/public
tags: [engineering]
---

![two anthropomorphized potatoes and a pothole](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/f5a9ebdf-6e0b-4429-cbdc-1c0601494a00/public)

The Val Town [documentation site](https://docs.val.town) is now written and
hosted [on Val Town](https://www.val.town/x/valdottown/docs). To reach parity
with our now-deprecated Astro+Cloudflare site, our docs needed to meet a high
bar of [AX, DX, and UX](https://blog.jim-nielsen.com/2025/thoughts-on-ax/).

1. **AX:** Agents read docs more than humans these days. Are we serving them
   well?
2. **DX:** We knew Val Town would lower editing friction and tighten feedback
   loops. But could we live without a static site framework?
3. **UX:** Docs must be fast and searchable, with all the table stakes features.
   Will users _like_ our new site?

## Stack

The stack for our new docs is unusual. Notably, the entire app is
server-rendered. We do not load a client-side library like React, although we do
use JSX for components. We write vanilla CSS and old fashioned `<script>` tags
for client-side JavaScript. We author pages in markdown and hand doodle the
illustrations (thanks, [Jackson](https://jxnblk.com/)). Version control moved
from GitHub to Val Town, and hosting from Cloudflare to Val Town. We still use
Cloudflare’s edge caching.

As I’ll discuss below, there is no build step in Val Town, which is a huge
architectural departure from most static sites, and also the biggest tradeoff.
Whether we’re on the right side of that tradeoff, I’m honestly not sure—this is
experimental, and I’m writing this to hear what you think.

_Note: Since writing this blog post, we've experimented with client-side
navigation and view transitions as a progressive enhancement (meaning, the site
still works well if you disable JavaScript)._

## AX

Getting agent experience right, or at least to parity, was much simpler than
developer and user experience. Like the old site, we surface
[llms.txt](https://docs.val.town/llms.txt) and
[llms-full.txt](https://docs.val.town/llms-full.txt) for agents. Each page has a
“Copy as markdown” button for the human in the loop, and you can append `.md` to
any URL path to view the raw markdown. The old site’s structure is preserved, so
we inherit all that SEO and AEO juice, which, lately, has become a rather large
slice of our new customers pie (user funnel cake?).

## DX

Val Town’s core tradeoff is not having a build step. Apps (“vals”) are live the
moment you save (in ~100ms), so the friction to edit is very low.
Philosophically, that’s grounded in Bret Victor’s
[principle](https://www.youtube.com/watch?v=PUv66718DII) that creators need an
immediate connection to what they’re creating. We knew from
[moving this blog](/migration) to Val Town that we’d like how easy it is to
edit.

<video
  src="https://assets.blog.val.town/docs-val.mp4"
  style="width: 100%; border-radius: 6px;"
  autoplay loop
/>

The problem is, most static sites rely on a build step to achieve nice DX
without sacrificing UX.

Consider CSS. I’m a big fan of scoped CSS, whether by CSS modules or
styled-components or somesuch. Those solutions typically rely on a build step to
generate unique classnames. In our docs app, we colocate CSS alongside
components, like `Header.css` next to `Header.tsx`, which makes for nice editing
but opens us to specificity footguns. And, to deliver those files without a
build step, we have a single `/styles.css` endpoint on our server that reads and
stitches together all those CSS files at request time when the browser parses a
`<link rel="stylesheet">` in a page’s HTML. That stylesheet is cached both in
your browser with a Cache-Control header and on the edge via Cloudflare, but a
cache miss can be slow: up to ~500ms. Nice DX has a cost.

Overall, though, the DX _is_ pretty nice. While building the site I jumped
between Claude Code, Townie, the val.town editor, and my local editor. With MCP
or CLI, we can pretty much work wherever we’re comfortable.

## UX

Docs should be fast and searchable. For search, the old site used Pagefind—a
nice library that I still use for my personal site—which required a build step.
We replaced it with [MiniSearch](https://github.com/lucaong/minisearch), which
the cmd+k bar lazy loads and is, IMO, about as good as Pagefind. Re speed, I’ll
admit that I’m not sure our site is _quite_ as snappy as the old Astro one.
Pages are small and relatively quick to load, save for vals embedded in iframes,
but for uncached pages the file retrieval and markdown parsing on the server
takes a beat. It could be helpful to do some pre-fetching, say, for any pages
linked in the page you’re viewing.

Forgoing a framework is also just fun. Documenting from scratch feels like an
invitation to be “on brand” and playful. Links on the new docs site are green
for internal pages, blue for val.town and val.run URLs, and orange for external
sites. Of course, we could have applied custom styles to our previously
frameworked site, but, idk, we didn’t. Coding in Val Town is supposed to be
productive, but also fun. We’d like the user experience of reading our docs to
leave that impression. We hope you like it.

## Eat our docfood

Jim, whose blog post I linked up top, writes that our priority should be “UX
over AX over DX.” I worry that our new docs may not be faithful to that order,
but dogfooding has its own benefits. We want to push against and feel Val Town’s
platform limits.

As before, the [code is all public](https://www.val.town/x/valdottown/docs/) for
our [new site](https://docs.val.town), and we’d love your critique to pick out
the no-nos and gotchas.

![our new docs getting started page](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/cb509045-2b36-4448-e0b8-ca60930ba900/public)