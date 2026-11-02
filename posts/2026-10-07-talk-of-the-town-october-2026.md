---
title: Talk of the Town - October 2026
description: Playing with Jev & home-cooked transit dev
pubDate: 2026-10-07:00:00.000Z
author: Pete Millspaugh
thumbnail: /images/4352648b-9035-4473-aa75-9ebf2d5633d0.webp
tags: [customers]
---

![Talk of the Town doodle](/images/4352648b-9035-4473-aa75-9ebf2d5633d0.webp)

_Talk of the Town_ is our series highlighting neat public vals in userspace.

## Community vals

[**Justin Uberti**](https://x.com/juberti), Head of Realtime at OpenAI, made
[hello-live.val.run](https://hello-live.val.run/) to demo GPT-Live. You can
literally call the val by telephone!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This might be a bit quaint in the age of Codex, but here’s a simple GPT-Live API demo of a voice agent that you can access via web or phone.
web: https://t.co/vpSayItSyH
phone: 425-800-0073
source: https://t.co/DyF68xwBRw
It’s easy to customize - check out routes/agent.ts. https://t.co/G0JDKxe8Ix</p>&mdash; Justin Uberti (@juberti) <a href="https://x.com/juberti/status/2098263283182817465?ref_src=twsrc%5Etfw">September 11, 2026</a></blockquote>
<script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

Justin is a recurring friend of the town (see:
[March](https://blog.val.town/talk-of-the-town-mar-2026),
[May](https://blog.val.town/talk-of-the-town-may-26)) with many OpenAI Realtime
demo vals to his name. (If you’re interested in trying out more AI voice demos
on Val Town, we also have one for
[Gemini Live](https://www.val.town/x/valdottown/hello-gemini-live).)

---

[**Jim Nielsen**](https://www.jim-nielsen.com/) wrote an
[analytics-cron](https://www.val.town/x/jimniels/analytics-cron) val to stick
his Netlify web analytics data—which goes kapoof after 30 days—into SQLite.

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:ln6p42mckoylrkcd3ds6b7vv/app.bsky.feed.post/3mvh6532h7s2z" data-bluesky-cid="bafyreicxvbbpbrsvkj4zfac7apndhdaylkjahlqun74o2rzbsc5ifhs7fq" data-bluesky-embed-color-mode="system"><p lang="en">📝 I&#x27;m officially a hoarder now.

Netlify throws away my analytics data every 30 days, but I finally setup a
little automation with @val.town to persist it.

blog.jim-nielsen.com/2026/preserv...<br><br><a href="https://bsky.app/profile/did:plc:ln6p42mckoylrkcd3ds6b7vv/post/3mvh6532h7s2z?ref_src=embed">[image
or embed]</a></p>&mdash; Jim Nielsen
(<a href="https://bsky.app/profile/did:plc:ln6p42mckoylrkcd3ds6b7vv?ref_src=embed">@jim-nielsen.com</a>)
<a href="https://bsky.app/profile/did:plc:ln6p42mckoylrkcd3ds6b7vv/post/3mvh6532h7s2z?ref_src=embed">September
13, 2026 at 11:28
PM</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

---

[**Luis Gabriel**](https://luisgabriel.online/) published a Youtube RSS feed
val, using Codex and the Val Town agent plugin. He wrote a great
[blog post about it](https://luisgabriel.online/posts/youtube-rss-feed-grabber),
too. Thanks for the kind words, LG!

> I was quite happy with the result. I think this is vibe coding at its finest.
> A simple tool written specifically for me, the way that I wanted it. -LG

![YouTube RSS feed val](/images/00b4ba0d-a845-40c3-9f9b-486b51f61e41.webp)

---

**Arber Xhindoli**, founder of [Canonry](https://canonry.ai/), made two vals for
testing your brand’s [AEO](/aeo) on Val Town: a
[brand perception check](https://www.val.town/x/canonry/Brand-Perception-Check)
and an
[AI visibility check](https://www.val.town/x/canonry/AI-Visibility-Check).
Charlie also [interviewed Arber](https://www.youtube.com/watch?v=44h6_jjW62o)
about AEO as part of his “Charlie learns AEO in public for Val Town” series.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/44h6_jjW62o?si=ODOm4oon2zhxpW4a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

[**Owen Christofferson**](https://www.val.town/u/owenchristofferson) made a tiny
transit info website, [grand-perkins.val.run](https://grand-perkins.val.run/),
for (presumably) his stop in Oakland.
[A val can be a home-cooked meal](https://www.robinsloan.com/notes/home-cooked-app/).

![Owen’s transit val](/images/6f227662-84cc-4f82-af28-ee4c5c2107ea.webp)

On the topic of home-cooked transit apps,
[**Jonathan Blanchard**](https://www.val.town/u/jpblanchard) made a street
cleaning parking map for Park Slope, Brooklyn:
[parkslope-parking.val.run](https://parkslope-parking.val.run/).

![Jonathan’s transit val](/images/af6c6bab-02c4-419f-bdf7-67e349c5d0b1.webp)

And one more—[**Kirill Maltsev**](https://www.kirillmaltsev.net/) home-cooked a
personal transit val for his stop in Tallinn, Estonia.

![Kirill’s transit val](/images/157088a0-57d5-406d-98cd-58e85860ac23.webp)

_“Val Town? Oh, that’s the personal transit website builder, right?”_

---

[**Nico Baier**](https://nicobaier.com/) made
[example-domain.val.run](https://example-domain.val.run/), a canonical
`*.val.run` example URL, in the spirit of IANA’s
[example.com](https://example.com). Nico also created a
[Lorem Ipsum API](https://www.val.town/x/nbbaier/lorem-ipsum) at
[lipsum.val.run](https://lipsum.val.run/), which I am waiting for an excuse to
use!

```bash
# One paragraph
curl https://lipsum.val.run/p

# Three paragraphs
curl https://lipsum.val.run/p/3

# One sentence
curl https://lipsum.val.run/s

# Five sentences
curl https://lipsum.val.run/s/5
```

Nico is a [prolific](https://www.val.town/u/nbbaier) friend of the town, always
producing a steady stream of neat vals (or as he puts it in his bio: “Valin’ up
a storm”).

---

[**Devon Winrick**](https://github.com/winrid/), creator of
[FastComments](https://fastcomments.com/), built a
[blog-with-comments](https://www.val.town/x/fastcomments/blog-with-comments)
demo val and contributed a
[FastComments integration guide](https://docs.val.town/guides/fastcomments) to
our docs. If your agent is integrating FastComments in a val, it can refer to
agent skills on
[fastcomments-skills.val.run](https://fastcomments-skills.val.run/).

![Devon's comments widget](/images/3f38560e-4a55-4d4d-95d7-669251da1e17.webp)

---

[**Fabian Iwand**](https://mootari.de/) asked Townie to make a
[Commitfest-to-RSS val](https://www.val.town/x/mootari/cf-rss) for following
Postgres patches without having to subscribe to the mailing list or wait for the
cool-off period on new accounts.

---

[**Paul Chin Jr.**](https://paulchinjr.com/) made a “cute feed of animals
skateboarding,” available for your viewing pleasure at the cleverly named
[boardmembers.val.run](https://boardmembers.val.run/). Paul is vibing all sorts
of Fun Software on Val Town, like his
[glamstrum](https://www.val.town/x/pchinjr/glamstrum) site (“Webcam air guitar.
Big hair. Bigger riffs.”) and [firstpage.val.run](https://firstpage.val.run/)
(“A 20-minute HTML website maker for kids”).

![Paul’s HTML writing lab](/images/c3ecec00-468d-4968-9a18-9412639ab297.webp)

---

[**Mariano Guerra**](https://marianoguerra.org/) vibe coded
[his own coding agent](https://www.youtube.com/watch?v=ZJOE_EuyRTY) for Val
Town-specific code.

---

[**Derek Ahmedzai**](https://cheersderek.com/) made a
[Letterboxd heartbeat](https://x.com/derekahmedzai/status/2087471361572663417)
visualization that you can try at
[letterboxd-heartbeat.cheersderek.com](https://letterboxd-heartbeat.cheersderek.com/).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">new letterboxd toy! it takes your last 50 ratings and makes a nice heartbeat monitor visualisation, and you can even save a png or gif<br><br>share your <a href="https://x.com/hashtag/letterboxdheartbeat?src=hash&amp;ref_src=twsrc%5Etfw">#letterboxdheartbeat</a>!<a href="https://t.co/BIT6mXJdec">https://t.co/BIT6mXJdec</a> <a href="https://t.co/GYQtUzMXJd">pic.twitter.com/GYQtUzMXJd</a></p>&mdash; derek (@derekahmedzai) <a href="https://x.com/derekahmedzai/status/2087471361572663417?ref_src=twsrc%5Etfw">August 12, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

---

[**Frank van Puffelen**](https://puf.io/) used Codex to create a
[goodreads-bookhive-sync](https://www.val.town/x/puf/goodreads-bookhive-sync)
val that automatically syncs his GoodReads updates to BookHive.

---

[**Ozan Öğreden**](https://ozan.ogreden.com/) made
[org-publish](https://www.val.town/x/cricks_unmixed4u/org-publish) (live at
[org-publish.val.run](https://org-publish.val.run/about)) for publishing plain
text files from Emacs or Neovim.

---

[**jellyj**](https://www.val.town/u/jellyj) created
[everyone-red-button.val.run](https://everyone-red-button.val.run/). It reminds
me of [The (Reddit) Button](https://en.wikipedia.org/wiki/The_Button_(Reddit)),
which—fun fact—was created by Josh Wardle of Wordle fame. (I also created
[The Val Town Button](https://www.petemillspaugh.com/val-town-button) a few
years ago, before I worked here.)

![a red and blue button that change the text color](/images/5e375992-e702-4a55-8212-6f872719f391.webp)

---

[**Holger Harzer**](https://www.val.town/u/fnxsdev) vibed
[readable.val.run](https://readable.val.run/) on top of the
[Mozilla Readability](https://github.com/mozilla/readability) library, which
lets you paste a URL and get the same webpage back with less “clutter” (like
Firefox’s reader mode).

---

**Romain Demesmay** vibe coded
[pizza-feu-de-bois](https://www.val.town/x/Romain/pizza-feu-de-bois), apparently
an app to order wood-fired pizzas for house parties, which I am including
because I initially assumed it meant “pizza for the boys.

---

Many people are vibe coding MCP servers to stick an API they use into their
chatbots, like Emad Gadou’s MCP servers for
[Brave Search](https://www.val.town/x/emadgadou/brave-search-mcp); Nososke’s for
[Google Classroom](https://www.val.town/x/nososke/google-classroom-mcp),
[Google Maps & Google Earth](https://www.val.town/x/nososke/maps-earth-mcp), and
[YouTube](https://www.val.town/x/nososke/youtube-mcp); Yuki Murakami’s for
[Oura](https://www.val.town/x/YukiMurakami/oura-mcp); and Lindsay Patrick’s for
[Sleeper Fantasy Football](https://www.val.town/x/lindsaypatrick/sleeper-mcp).

## From the Val Town team

[**Charlie**](https://charliemolthrop.com/) made
[Whose Jev is it anyway?](https://www.val.town/x/dcm31/whose-jev-is-it-anyway)
at [whosejev.val.run](https://whosejev.val.run/).
[Made me laugh](https://x.com/CharlieMolthrop/status/2100946286136406421?s=20)!

<img
  src="/images/7081baeb-0a9a-4aee-9821-a0ebb7935e61.webp"
  alt="Charlie’s Whose Jev is it anyway"
  style="max-width: 500px; border: 2px solid var(--beige);"
/>

Charlie also made [JevHero](https://www.val.town/x/dcm31/jevhero) at
[jevhero.val.run](https://jevhero.val.run/).
[Made me laugh again](https://x.com/CharlieMolthrop/status/2100330435351920806?s=20).

<img
  src="/images/63dc88d7-66cc-409d-991f-19e32b1985fd.webp"
  alt="Charlie’s JevHero"
  style="max-width: 500px; border: 2px solid var(--beige);"
/>

---

[**Steve**](https://stevekrouse.com/) made a Jev demo to classify your prose at
[typesafe-demo.val.run](https://typesafe-demo.val.run/).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">typesafe’s jev is fun! live demo you can play with: https://t.co/ctnPF0w70r https://t.co/i6kMGkkWOV</p>&mdash; Steve Krouse (@stevekrouse) <a href="https://x.com/stevekrouse/status/2100287368221659289?ref_src=twsrc%5Etfw">September 16, 2026</a></blockquote>
<script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

Steve also prototyped using Jev + Kernel for fast browser use at
[jev-browser-use.val.run](https://jev-browser-use.val.run/).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">jev + kernel browser use demo

pretty freaking cool! so fast!

try it yourself: https://t.co/CoVFzscaa0 https://t.co/OyXdNA1H0F</p>&mdash;
Steve Krouse (@stevekrouse)
<a href="https://x.com/stevekrouse/status/2100321685081559542?ref_src=twsrc%5Etfw">September
16, 2026</a></blockquote>

<script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

One more from Steve: A Cerebras voice coder demo—

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">cerebras voice coder - this is realtime - no speedups!

the slow parts are me deciding what to change https://t.co/F2KivGifzj</p>&mdash;
Steve Krouse (@stevekrouse)
<a href="https://x.com/stevekrouse/status/2095943522985603468?ref_src=twsrc%5Etfw">September
4, 2026</a></blockquote>

<script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

---

[**Potluck**](https://potluckmittal.com/) made
[gmail-interactions](https://www.val.town/x/potluck/gmail-interactions) to scan
his email and keep his ducks in a row, where by ducks I mean CRM cards for email
correspondence with Val Town customers. (The Val Town CRM is itself also
[on Val Town](https://www.val.town/x/valdottown/crm).)

Potluck also made
[Dustbound](https://www.val.town/x/potluck/burn-group-planner), a planning app
for his burning man camp to coordinate rides, tents, slushie shifts, and
whatnot.

---

[**Pete**](https://www.petemillspaugh.com/)—I—put together
[abottom.org](https://abottom.org/), an infosite for the word _abottom_, meaning
“at the bottom,” an analogue of _atop_. (I know it’s silly, but I’m hoping to
spread the word and eventually get it in the dictionary, so I invite you to use
it!)

We—the Val Town team—also published an
[OpenRouter template](https://www.val.town/x/templates/openrouter) val. It’s
very easy to get an OpenRouter API key and try out hundreds of models.

We also migrated our official Val Town docs to
[a val](https://www.val.town/x/valdottown/docs) and wrote about the
[docfooding](https://blog.val.town/docfooding) process. This blog is also
[a val](https://www.val.town/x/valdottown/blog), and we have an older writeup
about [blogfooding](https://blog.val.town/migration).