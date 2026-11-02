---
title: Talk of the Town – Mar 2026
description: Calling vals with GPT Realtime 1.5, NYC doorman, email and voice agents, and more
pubDate: 2026-03-26:00:00.000Z
author: Pete Millspaugh
thumbnail: /images/86ad7542-6032-4e0a-6536-b6afba7fbe00.webp
tags: [customers]
---

![talk-of-the-town-march-2026.png](/images/86ad7542-6032-4e0a-6536-b6afba7fbe00.webp)

This month: calling vals with OpenAI Realtime, a Blade Runner Esper machine, an
NYC doorman, tracking electricity pricing and D.C. water quality, a millennial
core tech quiz, learning web development in Val Town, and much more.

We recorded a video walkthrough of this blog post, like the old newsletter
videos Steve used to record, if you prefer watching to reading. (Thanks to
[Cassidy](https://bsky.app/profile/cassidoo.co/post/3mhbm5b2gd22f) for the
inspiration to reprise the video format!)

<iframe
  src="https://www.youtube.com/embed/mKXoAVVrlXc?si=4iixkgcqAJQhlM1t"
  width="100%"
  style="aspect-ratio: 16 / 9;"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

<hr />

**[Justin Uberti](https://x.com/juberti)**, creator of WebRTC and head of
Realtime AI at OpenAI, built a
[hello-realtime](https://www.val.town/x/jubertioai/hello-realtime) val to demo
OpenAI's new `gpt-realtime-1.5` model. You can literally _call_ the val! (As in
"call the function" but also "call your mother.")

<div style="display: flex; justify-content: center;">
  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">
      Just released gpt-realtime-1.5 with improved intelligence, instruction following, and voice quality.<br>
      Try it out today at <a href="https://t.co/td6Cx2EOPO">https://t.co/td6Cx2EOPO</a> (or call 425-800-0042)!
      <a href="https://t.co/z8BtUMYSJ4">https://t.co/z8BtUMYSJ4</a></p>&mdash; Justin Uberti (@juberti)
      <a href="https://twitter.com/juberti/status/2026038008240337101?ref_src=twsrc%5Etfw">February 23, 2026</a>
  </blockquote>
</div>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Justin's val inspired us to buy our own phone line: 1-304-VAL-TOWN. We haven't
decided what to do with it just yet...a new kind of val
[trigger](https://docs.val.town/vals/#triggers)? A traditional customer support
line? A talking Townie?

<hr />

**[Paul Kinlan](https://x.com/Paul_Kinlan)**, Chrome DevRel Lead at Google,
created a personal assistant
[email-agent](https://www.val.town/x/paulkinlan/email-agent/) val using Val Town
email and SQLite, Deno sandboxes, and the Claude Agent SDK. It's live at
[memory-do.val.run](https://memory-do.val.run).

Paul also wrote a
[colourful-scrollbar](https://www.val.town/x/paulkinlan/colourful-scroll-bar/)
val using the new(ish) CSS `@property` rule (Baseline as of 2024) and
scroll-driven animations, which you can play with at
[colourful-scrollbar.val.run](https://colourful-scrollbar.val.run), and an
[esper](https://www.val.town/x/paulkinlan/esper) val that uses
WebSpeechRecognition and Gemini models to enhance images, as an homage to Blade
Runner's Esper machine.

<div style="display: flex; justify-content: center;">
  <blockquote
    class="bluesky-embed"
    data-bluesky-uri="at://did:plc:pyiweakbkw2vqgku25f5fy5u/app.bsky.feed.post/3mficxi556s2r"
    data-bluesky-cid="bafyreicychomlr3usibkdxvfpo6uz6rsoidtcxlfxwre4em4aaqatr7nia"
    data-bluesky-embed-color-mode="system"
  >
    <p lang="en">
      I am creating a post about using voice as my primary input with LLMs and I remembered Blade Runner&#x27;s Esper machine. I thought it&#x27;d be fun to replicant

      👉 WebSpeechRecognition
      👉 Gemini Flash Lite for Voice to UI 
      👉 Gemini Nano Banana to &quot;Enhance&quot;
      👉 Built with voice

      Clone 👉 val.town/x/paulkinlan...<br><br>
      <a href="https://bsky.app/profile/did:plc:pyiweakbkw2vqgku25f5fy5u/post/3mficxi556s2r?ref_src=embed">[image or embed]</a>

</p>
    &mdash; Paul Kinlan (<a href="https://bsky.app/profile/did:plc:pyiweakbkw2vqgku25f5fy5u?ref_src=embed">@paul.kinlan.me</a>)
    <a href="https://bsky.app/profile/did:plc:pyiweakbkw2vqgku25f5fy5u/post/3mficxi556s2r?ref_src=embed">February 22, 2026 at 6:44 PM</a>
  </blockquote>
</div>
<script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

<hr />

For our party at the Val Town office a couple weeks ago, we dusted off our "NYC
doorman" [buzz](https://www.val.town/x/pmillspaugh/buzz) val to let partygoers
buzz themselves upstairs.

<p style="max-width: 400px; margin-inline: auto;">
  <iframe
    src="https://player.mux.com/cu8C6t33EANBuOSi4Z2g3IOHYSqG00nCogdjK00ZurcEE?metadata-video-title=buzz&video-title=buzz"
    style="width: 100%; border: none; aspect-ratio: 9/16;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowFullscreen
  ></iframe>
</p>

Also at the party, **[Charlie](https://www.val.town/u/dcm31)** 'n' friends vibe
coded a silly [party-val](https://www.val.town/x/partytime/party-val) photo
booth. You can relive the party at
[hivecoding.val.run](https://hivecoding.val.run/).

<hr />

**[Jenn Schiffer](https://jennschiffer.com/)** (longtime Glitch community
director / self-described "glitch witch") wrote a
[pixelstats](https://www.val.town/x/jennschiffer/pixelstats) utility val to
analyze tiny pixel art images 🏙️.

<hr />

**[Cole Lawrence](https://www.colelawrence.com/)**, CTO of
[Phosphor](https://phosphor.co/) and [Forethink](https://www.forethink.ai/),
built an
[ephemeral-links](https://www.val.town/x/colel/ephemeral-links/code/main.ts) val
at [to6r.val.run](https://to6r.val.run/) for "short links that self-destruct in
48 hours." Cole also made a
[newsletter-signup](https://www.val.town/x/colel/newsletter-signup) val and a
[rust-nyc-talk-submissions](https://www.val.town/x/colel/rust-nyc-talk-submissions)
minisite val (hosted at
[rustnyc-talks.val.run](https://rustnyc-talks.val.run/)).

<hr />

**[Josh Beckman](https://www.joshbeckman.org/)** at Shopify wrote a
[comed-hourly-pricing-calendar](https://www.val.town/x/joshbeckman/comed-hourly-pricing-calendar)
val that produces an iCal calendar feed of ComEd electricity price changes. Josh
also made a [criticCron](https://www.val.town/x/joshbeckman/criticCron) val that
emails critiques for new posts on his personal blog.

<hr />

**[Drew McDonald](https://www.val.town/u/drewmcdonald)** at
[Watershed](https://watershed.com/) made a
[dc-water-filter](https://www.val.town/x/drewmcdonald/dc-water-filter) val that
emails you if there's a DC water emergency in your configured home radius.

<hr />

**[Peter Liu](https://peterqliu.github.io/)** wrote an
[importLatest](https://www.val.town/x/peterqliu/importLatest) utility val that
grabs the latest version of an imported dependency val, bypassing the cache.
This is a nice DX improvement when you're actively updating both a val and its
dependencies. Thanks to Peter for opening a pull request to add this to the
upstream `std/utils` library!

Peter also made [PineconeIndex](https://www.val.town/x/pql/PineconeIndex), an
interface for Pinecone vector databases using OpenAI embeddings to vectorize and
search.

<hr />

**[Cam Pak](https://cameronpak.com/)** wrote a
[semantics-css-demo](https://www.val.town/x/cameronpak/semantics-css-demo) val
live at [semanticsui.val.run](https://semanticsui.val.run/) for the nascent
[semantics-ui](https://www.npmjs.com/package/semantics-ui) npm package.

<hr />

**[Paul Chin Jr.](https://paulchinjr.com/)** built
[guess-that-hype](https://www.val.town/x/pchinjr/guess-that-hype), a
"millennial-core quiz about recycled tech hype" (I scored a 3/8, very Gen Z of
me). Paul also made
[devfest26-raffle](https://www.val.town/x/pchinjr/devfest26-raffle/code/main.http.ts),
a groovy raffle website for the NorfolkJS meetup.

<hr />

**[ceculbe](https://www.val.town/u/ceculbe)** made an
[html-css-js-template](https://www.val.town/x/ceculbe/html-css-js-template) and
several other vals like it for learning core web development concepts. I
especially love seeing Val Town used to teach programming, and one day we'd love
to have a Val Town school (Val High?).

<hr />

**[kamalnrf](https://www.val.town/u/kamalnrf/)** built a
[golinks](https://www.val.town/x/kamalnrf/golinks) val for personal /go links,
live at [golink.val.run](https://golink.val.run/), and a
[sprite-playground](https://www.val.town/x/kamalnrf/sprite-playground) val
inspired by Josh Comeau's blog post on sprite animations.

<hr />

**[Raymond Camden](https://www.val.town/u/raymondcamden)** wrote about
[Using Val Town to Get Me to the Movies](https://www.raymondcamden.com/2026/03/01/using-val-town-to-get-me-to-the-movies).

<hr />

**[Curt Cox](https://www.val.town/u/curtcox)** built a
[cors-audit](https://www.val.town/x/curtcox/cors-audit/code/main.ts) val that
checks the CORS policy of various APIs, live on
[cors-audit.val.run](https://cors-audit.val.run/).

<hr />

**[Trevor Munoz](https://www.val.town/u/trevormunoz)** created a
[lakeland-timesheet](https://www.val.town/x/trevormunoz/lakeland-timesheet)
Slack bot val to track intern work hours on the Lakeland Digital Archive
project.

<hr />

**[Charlie](https://www.val.town/u/dcm31/)** made a
[self-improving-podcast](https://www.val.town/x/dcm31/self-improving-podcast)
val that generates a custom daily podcast in his Apple Podcasts feed, and
[meet](https://www.val.town/x/dcm31/meet/), a minimal personal booking website
(live at [charliechat.val.run](https://charliechat.val.run/)).

<hr />

**[Sean Peters](https://www.val.town/u/snptrs/)** made
[marx](https://www.val.town/x/snptrs/marx), a personal bookmark manager val with
tag filtering using Val Town SQLite.

<hr />

**[Tomaso Valmax](https://www.val.town/u/all)** made
[brain](https://www.val.town/x/all/brain), a binaural beats val live at
[brain.val.run](https://brain.val.run/) (wear headphones for intended effect).
Tomaso also built [shredreader](https://www.val.town/x/all/shredreader), a
speed-reading app (100-2000 WPM), live at
[shredreader.val.run](https://shredreader.val.run/).

<hr />

**[Christopher de Beer](https://www.christopherdebeer.com/)** created
[mental-models](https://www.val.town/x/c15r/mental-models), a collection of
interactive mental models, and [microgpt](https://www.val.town/x/c15r/microgpt),
a minimal byte-level decoder transformer.

<hr />

I ([Pete](https://bsky.app/profile/petemillspaugh.com)) made a
[copy-sqlite-table](https://www.val.town/x/pmillspaugh/copy-sqlite-table) val to
copy your account-scoped sqlite databases to a specific val (because now
[every val gets its own database](/scoped-databases)). Then
**[Nico](https://www.val.town/u/nbbaier)** remixed it to make an even better
[migrate-sqlite](https://www.val.town/x/nbbaier/migrate-sqlite) val that fully
migrates tables, views, indexes, and triggers from account- to val-scoped
databases.

<hr />

**[Steve](https://bsky.app/profile/stevekrouse.com)** (Val Town cofounder) is
working on [vtrr](https://www.val.town/x/stevekrouse/vtrr), a Val Town React
Router framework with SSR and client-side hydration and navigation. The
[aim](https://x.com/stevekrouse/status/2025360822243918048) is to find a middle
ground between 100% SSR (e.g. using Hono) and 100% client-side (e.g. with
React).

Steve also made a
[x402-playground](https://www.val.town/x/stevekrouse/x402-playground) val and
wrote a companion blog post about how the
[x402 protocol could make API keys obsolete](https://stevekrouse.com/x402). If
it pans out, it could be like Apple Pay for APIs, moving you through the subway
turnstile without ever stopping at the ticket machine.

And one more: Steve vibe-coded a
[steve-eval](https://www.val.town/x/stevekrouse/steve-eval) val to judge and
rewrite LLM-drafted essays to match his writing voice. He wrote a blog post
about it: [getting AI to write like me](https://stevekrouse.com/eval).

<hr />

Some developers in the atproto space (colloquially, "the Atmosphere," best known
for Bluesky so far) have taken an interest in Val Town.
**[Tom](https://bsky.app/profile/macwright.com)** (Val Town cofounder) wrote a
[blog post about the AT Protocol](https://macwright.com/2026/03/16/atproto),
made an [atproto-login](https://www.val.town/x/tmcw/atproto-login/code/main.ts)
val, and will be at [ATmosphereConf](https://atmosphereconf.org/) in Vancouver
this weekend.

<hr />

If you'd like to be featured in next month's _Talk_, share your vals in our
`#showcase` channel on [Discord](https://discord.val.town)!