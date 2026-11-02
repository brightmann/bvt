---
title: Catching stars
description: Finding new customers & hires from your GitHub stargazers
pubDate: 2026-01-14:00:00.000Z
author: Steve Krouse, Pete Millspaugh
thumbnail: "https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/dcbbc8be-9378-4144-31a6-374ec82b2b00/public"
tags: [engineering]
---

![catching-stars.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/34d63456-9cdf-4890-59c7-a32ace4e0c00/public)

TLDR: Find new customers and/or hires from your GitHub stargazers:

1. [val.town/x/templates/github-leads](https://www.val.town/x/templates/github-leads)
2. [val.town/x/templates/github-hires](https://www.val.town/x/templates/github-hires)

Last month we started [pickling compute](https://blog.val.town/pickling):
bottling up Val Town's commodity ingredient (compute) and selling the flavor of
the month (narrow use case). Right now we're bottling "inbound lead
qualification" and selling it to seed-stage b2b founders who can code. Bottling
inbound lead qualification means automating the manual process of researching
new customer signups by hand to see if they'd be good upsell candidates: going
to their GitHub profile, googling them, looking for a LinkedIn or personal
website, finding where they work, researching their company, etc. This turns out
to be a good fit for an LLM agent armed with a web-search tool.
[Charmaine](https://www.charmaineklee.com/) on our team threw the
[OpenAI Agents SDK](https://openai.github.io/openai-agents-js/) at it, and it
was surprisingly effective, often surpassing results from traditional enrichment
services. From there we iterated toward the current
[GitHub Leads](https://www.val.town/x/templates/github-leads) template that
tracks activity on your public GitHub repos (stars, forks, issues, etc.) and
gauges whether your contributors could be new hires or customers. In short,
_catching stars_.

![github-leads val preview.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/0fb83700-973c-41b7-3994-2d962c88eb00/public)

There are a couple reasons why we're interested in catching stars, beyond the
tool itself:

1. Like our customers, we're also searching for new
   [hires](https://www.val.town/careers) and [Teams](https://www.val.town/teams)
   customers, so we've been dogfooding this leads val as we build it. Eating our
   own pickles, I guess
2. This tool—and others like it—are stops on our way toward
   [end-programmer programming](https://blog.val.town/blog/end-programmer-programming).
   The tool is _yours_, meaning it's completely customizable—remix the val and
   refactor the code as you wish. There are plenty of existing tools that
   automate hiring and sales pipelines, and if you don't want to touch code you
   should use one of those instead! But if you're a "know-code" founder (or head
   of sales or hiring manager) with a public GitHub repo, we think you'll like
   remixing our tool and making it your own

If you'd like to try it out, the vals live here:
[github-leads](https://val.town/x/templates/github-leads),
[github-hires](https://www.val.town/x/templates/github-hires) (same code, save
for the prompt). Here's what the code does:

1. [Cron job polls GitHub for new activity](https://www.val.town/x/templates/github-leads/code/github.cron.ts)
2. [SQLite database stores activity](https://www.val.town/x/templates/github-leads/code/db.ts)
3. [OpenAI web-search agent researches & qualifies hires/customers](https://www.val.town/x/templates/github-leads/code/agent.ts)
4. [Dashboard displays the results](https://www.val.town/x/templates/github-leads/code/dashboard.tsx)
5. [Daily email digest sends you the best leads](https://www.val.town/x/templates/github-leads/code/digest.ts)

The research and scoring are only as good as your prompt. If your company has an
"ideal customer profile" written down (or a job description), this is the place
for it. Here's our current
[PROMPT.txt](https://www.val.town/x/templates/github-leads/code/PROMPT.txt):

```md
You are an assistant to the CEO of Val Town.

Val Town is like Zapier for people who know how to code, a tool for writing code
and getting it running in the cloud, particularly useful for lightweight
automations in technical teams.

I'm sending you data about GitHub activity and it's your job to exhaustively
research the person by visiting the links on their GitHub profile, any company
listed on their profile, searching the web for their name creatively, finding
their personal and company sites, blogs they've written, etc to determine if
they are in Val Town's ideal customer profile.

Val Town's ideal customer profile:

1. Founder
2. B2B SaaS Startup
3. Seed-stage (approximately)
4. They know how to code

Return your final response in JSON only with the following schema:

{ "name": string, "company": string, "match": boolean, "score": number,
"reasoning": string }

- The score field is from 0 to 100.
- The company is where they currently work.
- For the "reasoning" field, write in Markdown. Include newlines where
  appropriate.
- If the person works at Val Town, there is no match and the score is 0.
```

The core of this app was coded carefully by hand, while the lower stakes parts
were churned out by Claude.

- To ingest GitHub activity, we thoughtfully considered (1) webhooks, (2)
  polling every resource individually, or (3) polling an org's entire activity
  feed. After much trial-and-error, we choose option 3—polling the activity
  feed—as the simplest approach. It's an elegant enough
  [34 lines of code](https://www.val.town/x/templates/github-leads/code/github.cron.ts)
  covering all activity across an org (stargazers, issues, discussions, PRs,
  etc...but not emoji reactions 😢)
- [The research agent code](https://www.val.town/x/templates/github-leads/code/agent.ts)
  is similarly short and sweet. The complex agent-loop parts are handled by the
  OpenAI Agent SDK
- On the other hand, the dashboard and daily digest email were mostly vibe
  coded. They aren't load bearing and can be regenerated from scratch at any
  time. [Vibe code is legacy code](/vibe-code), but only when you have to
  maintain it

To test, we ran this GPT-5 agent on ourselves first.
[Tom](https://macwright.com) was automatically disqualified by the hiring agent,
for example:

```md
He is actively merging PRs and pushing to main on Val Town repos as of January
2026, indicating he works with Val Town. Per our rules, current Val Town team
members/users are automatically disqualified.
```

And it's a good thing Tom does work for Val Town, because before we added
automatic disqualification criteria to the prompt, GPT-5 identified him as a
stellar candidate, 99/100:

```md
Prolific open‑source engineer and writer; cofounder/CTO at Val Town with deep
devtools and infrastructure focus, previously founder of Placemark and
ex‑Mapbox. Strong full‑stack/backend track record with extensive public work.
Exceptional hire fit (already on team), not a customer lead.
```

You can remix [leads](https://www.val.town/x/templates/github-leads) or
[hires](https://www.val.town/x/templates/github-hires) to qualify new customers
or employees for your startup...or to qualify _yourself_ as a new lead or hire
at Val Town 😉.

A note of caution for anyone looking to use this mini-app to contact developers:
we're particularly allergic to spam. If you're a commercial OSS company, use
these tools to qualify leads so you can reach out to fewer people, more
thoughtfully. Reach out humbly and with respect and curiosity.

Each OpenAI agent run costs about 30 cents and 30 seconds in inference with
GPT-5. That can be dialed way down on cheaper models and still return decent
signal. You can run this on a free [Val Town](https://val.town/) account by
supplying your own OpenAI key. Or if you’re using this for a business, consider
signing up for [Val Town Teams](https://www.val.town/pricing) for collaboration,
production limits, and extra support starting at $167/mo. And if you want a hand
automating any workflow, please reach out.