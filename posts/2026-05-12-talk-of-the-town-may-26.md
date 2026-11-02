---
title: Talk of the Town – May 2026
description: Claude managed agents, OpenAI voice agents, domaining, and more
pubDate: 2026-05-12:00:00.000Z
author: Pete Millspaugh
thumbnail: /images/9401623b-a9db-47f0-4f83-2a6a4e805800.webp
tags: [customers]
---

![may-talk.png](/images/9401623b-a9db-47f0-4f83-2a6a4e805800.webp)

_Talk of the Town_ is our series where we highlight neat public vals from the
Val Town community. We have something for everyone, from OpenAI voice models &
Claude managed agents to counting sheep on a cron val. And if you’re more
watcher than reader, please enjoy a
[video walkthrough](https://www.youtube.com/watch?v=ry4DCGI9Tao).

---

**[Justin Uberti](https://x.com/juberti)**, Head of Realtime AI at OpenAI and
creator of WebRTC, is back with another OpenAI demo on Val Town:
[realtime-typer](https://www.val.town/x/jubertioai/realtime-typer), live at
[realtyper.val.run](https://realtyper.val.run), which transcribes speech to text
using `gpt-realtime-whisper` with impressively low latency.

<div style="display: flex; justify-content: center; margin-bottom: 1rem;">
  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">Guess who&#39;s back, back again. Whisper, but now with realtime streaming. Check out the new gpt-realtime-whisper transcription model in my <a href="https://t.co/b2UTuSxhOI">https://t.co/b2UTuSxhOI</a> demo. <a href="https://t.co/ONusKRSRD2">pic.twitter.com/ONusKRSRD2</a></p>
    &mdash; Justin Uberti (@juberti) <a href="https://twitter.com/juberti/status/2052478775523512356?ref_src=twsrc%5Etfw">May 7, 2026</a>
  </blockquote>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

Justin also updated his
[hello-realtime](https://www.val.town/x/jubertioai/hello-realtime) demo to use
the new `gpt-realtime-2` model (which now has “reasoning” capabilities). It’s
live at [hello-realtime.val.run](https://hello-realtime.val.run), or by calling
[425-800-0042](tel:4258000042)!

---

**[Charlie](https://www.val.town/u/dcm31)** built a
[claude-managed-agents](https://www.val.town/x/templates/claude-managed-agents)
val to showcase Anthropic’s new managed agents, launched last week. As Michael
on the Anthropic team said, you can remix the val to get managed agents working
in under 2 minutes.

<div style="display: flex; justify-content: center; margin-bottom: 1rem;">
  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">0 to fully functional in less than 2 minutes! <a href="https://twitter.com/CharlieMolthrop?ref_src=twsrc%5Etfw">@CharlieMolthrop</a> this is awesome. please keep sharing your work and tell me what&#39;s missing for you <a href="https://t.co/MHCRw4viNc">https://t.co/MHCRw4viNc</a>
    </p>
    &mdash; Michael Cohen (@_hi_mc) <a href="https://twitter.com/_hi_mc/status/2053156422385377701?ref_src=twsrc%5Etfw">May 9, 2026</a></blockquote>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

Charlie also improved our
[ai-slackbot](https://www.val.town/x/templates/ai-slackbot) template val, which
pre-fills API scopes, events, and webhook URL from a manifest file to make the
Time To Aha even faster setting up your Slack agent.

---

**[Tijs Teulings](https://tijs.org)** customized a pocket e-reader with a Val
Town backend to pull a reading list and convert to EPUB.

<div style="display: flex; justify-content: center; margin-bottom: 1rem;">
  <blockquote
    class="bluesky-embed"
    data-bluesky-uri="at://did:plc:aq7owa5y7ndc2hzjz37wy7ma/app.bsky.feed.post/3mj5j3shgs22s"
    data-bluesky-cid="bafyreiejzad6rsu4zhjsrncn7gaop54lovmcrjz5rswlazbxqzrhn2b5dy"
    data-bluesky-embed-color-mode="system"
  >
      <p lang="en">
        Needed more proof the age of personal software is here?
        I got this Xteink X4 pocket e-reader.
        I flashed it with open source firmware.
        Then vibecoded a backend running on @val.town that pulls `toread` tagged articles from @kipclip.com and converts them to epub ...
        <br><br>
        <a href="https://bsky.app/profile/did:plc:aq7owa5y7ndc2hzjz37wy7ma/post/3mj5j3shgs22s?ref_src=embed">[image or embed]</a>
      </p>&mdash; Tijs Teulings 🦑 (<a href="https://bsky.app/profile/did:plc:aq7owa5y7ndc2hzjz37wy7ma?ref_src=embed">@tijs.org</a>)
      <a href="https://bsky.app/profile/did:plc:aq7owa5y7ndc2hzjz37wy7ma/post/3mj5j3shgs22s?ref_src=embed">April 10, 2026 at 10:15 AM</a>
  </blockquote>
  <script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>
</div>

Tijs also made an [openpds](https://www.val.town/x/tijs/openpds) val, live at
[openpds.val.run](https://openpds.val.run/), and an
[atproto-to-fediverse](https://www.val.town/x/tijs/atproto-to-fediverse) val
that syncs Bluesky posts to Mastodon, live on
[atproto-to-fediverse.val.run](https://atproto-to-fediverse.val.run/). And bonus
points: Tijs’s personal website is also
[a val](https://www.val.town/x/tijs/tijs_org)!

---

**[Eric Feng](https://ehfeng.com/)** from [Kernel](https://www.kernel.sh/) made
[playwright-cdp-connect](https://www.val.town/x/eric/playwright-cdp-connect) to
connect to a Kernel browser via CDP using Playwright. The Kernel team also has
vals for
[Stagehand + Gemini Computer Use](https://www.val.town/x/kernel/stagehand-gemini/),
[Playwright](https://www.val.town/x/kernel/playwright), and
[Puppeteer](https://www.val.town/x/kernel/puppeteer).

---

**[Paul Kinlan](https://x.com/Paul_Kinlan)**, Chrome DevRel Lead at Google, is
back at it again with a
[Hacker News watcher val](https://www.val.town/x/paulkinlan/hn-watcher), live at
[hn-push.val.run](https://hn-push.val.run/).

---

**[Omar Aziz](https://omar.mov/)** from [Tempo](https://tempo.xyz/) (Stripe’s
blockchain) made an [mpp-demo](https://www.val.town/x/git/mpp-demo) val to
showcase the Machine Payments Protocol (MPP).

---

**[Kaspars Dancis](https://k7d.dev/)**, founder and CTO of
[Whimsical](https://whimsical.com/), made a useful cron val that checks
availability of a domain name. We remixed his val into a
[domain-availability](https://www.val.town/x/templates/domain-availability)
template that lets you add as many domains as you’d like to track and emails you
when they become available. I know I’d like my surname’s dot com, but I don’t
think the circa-1858 family furniture company who owns it (no relation) will
give it up any time soon.

---

**[Mariano Guerra](https://bsky.app/profile/marianoguerra.org)**, co-author of
WASM from the Ground Up and the Feeling of Computing newsletter, made a
[recursive-task-lists](https://www.val.town/x/warianoguerra/recursive-task-lists)
REST API using Val Town SQLite and OAuth.

---

**[Sri](https://sri.xyz)** made a
[vsky-network](https://www.val.town/x/username/vsky-network) val, live at
[vsky.val.run](https://vsky.val.run/), that broadcasts crawl requests to a
network of atproto relays.

---

**[Alex McRoberts](https://bsky.app/profile/alex.mcroberts.me)** made a
[bluesky-thread-reader](https://www.val.town/x/alexmcroberts/bluesky-thread-reader/)
val, live at [btr.val.run](https://btr.val.run/).

---

**[Steve](https://stevekrouse.com)** gave a talk at the Betaworks
[Beyond Text](https://www.betaworks.com/event/beyond-text) event, and of course
made a [beyond-text](https://www.val.town/x/stevekrouse/beyond-text/) val to
demo live. Steve also built
[voice-townie](https://www.val.town/x/stevekrouse/voice-townie/), a way to talk
to Townie via phone using the Vapi voice agent and Val Town MCP server, and
[remix-3-beta-demo](https://www.val.town/x/stevekrouse/remix-3-beta-demo), a
minimal val using recently released Remix 3.

Steve also recorded a
[Val Town 101](https://www.youtube.com/watch?v=0MrspHO-zps) video for anyone who
wants to learn how to (vibe) code: “This is the video I wish I could’ve watched
when I was 14 and wanted to know how to make web apps.” Pass it along to those
friends of yours who want to build websites and finally feel like they might be
able to.

---

**[Jenn Schiffer](https://jennschiffer.com/)** made a
[counting-sheep-on-bluesky](https://www.val.town/x/jennschiffer/counting-sheep-on-bluesky)
val to power her
[counting sheep bot](https://bsky.app/profile/countingsheep.bsky.social): 30k
sheep and counting 🐑

---

**[kamalnrf](https://www.val.town/u/kamalnrf/)** as a prolific Val Town power
user relies on his [valLauncher](https://www.val.town/x/kamalnrf/valLauncher) to
conveniently search through the public HTTP endpoints across all of his vals. He
also made [defuddle](https://www.val.town/x/kamalnrf/defuddle/code/README.md),
live at [defuddle.val.run](https://defuddle.val.run/) as a convenient wrapper
around the [defuddle](https://defuddle.md) web page to markdown service. I think
anyone will have fun (and maybe eat some humble pie) spending 5 or 10 minutes on
Kamal’s [flag-quiz.val.run](https://flag-quiz.val.run/) 🇯🇵 🇧🇯 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🇦🇶 🇨🇦 🇪🇨 🇦🇺

---

**[Nico Baier](https://www.val.town/u/nbbaier)**, another prolific citizen of
Val Town, created: [brrr](https://www.val.town/x/nbbaier/brrr) and
[ntfy](https://www.val.town/x/nbbaier/ntfy), push notification libraries for
brrr.now and ntfy.sh, respectively;
[sheet-exporter](https://www.val.town/x/nbbaier/sheet-exporter) to export public
Google Sheets to CSV or JSON; [vt-ssg](https://www.val.town/x/nbbaier/vt-ssg), a
lightweight static site generator; and
[agentfs](https://www.val.town/x/nbbaier/agentfs), a Val Town port of Pekka
Enberg’s agentfs.

---

**[Peter Liu](https://peterqliu.github.io/)** made
[SQLiteTable](https://www.val.town/x/pql/SQLiteTable), his own SQLite ORM of
sorts with HTTP access and vector search.

---

**[Raymond Camden](https://www.val.town/u/raymondcamden)** wrote another fun Val
Town blog post!
[Using Val Town and Gemini for Sports Ball Stuff](https://www.raymondcamden.com/2026/05/04/using-val-town-and-gemini-for-sports-ball-stuff).

---

**[Britt Lewis](https://bl3.dev/)** made
[pruning-calculator](https://www.val.town/x/bl3/pruning-calculator/code/main.ts),
a prompt cache economics pruning calculator.

---

**[Josh Beckman](https://www.joshbeckman.org/)** from Shopify made a
[preRead](https://www.val.town/x/joshbeckman/preRead) val to consumer a web page
through the lens of his knowledge garden.

---

**Ajaya** from [Subconcious](https://www.subconscious.dev/) made
[subconscious-getting-started](https://www.val.town/x/subconscious_ajaya/subconscious-getting-started)
to use the Subconscious AI agent API on Val Town.

---

**[William Kang](https://www.val.town/u/williamjaesunkang)** ported he and Luke
Muoio’s
[WHOOP dataset/study](https://www.val.town/x/williamjaesunkang/AMWHOOPDATA-PROJECT)
to Val Town.

---

**[v7er](https://www.val.town/u/v7er)** made
[epocket](https://www.val.town/x/v7er/epocket), a backend for a Chrome extension
that defines and saves words as you browse the web.

---

**[garmeeh](https://www.val.town/u/garmeeh)** made
[MyEnergi](https://www.val.town/x/garmeeh/MyEnergi) to automate Zappi and Eddi
charging devices using the MyEnergi API.

---

**[andrewau](https://www.val.town/u/andrewau)** made
[lyric.val.run](https://www.val.town/x/andrewau/claude-tool-util/), a lyric
analysis API tool for Claude.

---

**[bao](https://www.val.town/u/bao)** created
[natgeo](https://www.val.town/x/bao/natgeo/), an RSS feed for National
Geographic articles.

---

**[Ish](https://www.val.town/u/ishbrzero)** made a does-one-thing val called
[HowManyDays](https://www.val.town/x/ishbrzero/HowManyDays) live at
[howmanydays.val.run](https://howmanydays.val.run/). We’re already 131 days into
2026!

---

**[recoeye](https://www.val.town/orgs/recoeye)** made an
[api-watchdog](https://www.val.town/x/recoeye/api-watchdog) val that monitors
your API every minute and reports downtime to Slack with live-updating messages.

---

**[Douglas Mustapick](https://www.val.town/u/guardianengr)** made a
[personal website val](https://www.val.town/x/guardianengr/douglas-mustapick-ai-consulting)
for his AI consulting business.

---

**[ewired](https://www.val.town/u/ewired)** made
[hf-activity-rss](https://www.val.town/x/ewired/hf-activity-rss/), an RSS feed
for HuggingFace user activity pages.

---

If you’d like to be featured in next month’s _Talk_, share your vals in our
`#showcase` channel on [Discord](https://discord.val.town)! (Or share them
around the web, and we’ll see them in Discord [thanks to Octolens](/octolens).)