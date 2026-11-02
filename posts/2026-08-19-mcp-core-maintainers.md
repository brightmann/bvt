---
title: How MCP’s Core Maintainers leverage Val Town to develop the protocol
description: "“It’s so easy to put up a quick MCP or API with Val Town”"
pubDate: 2026-08-19:00:00.000Z
author: Pete Millspaugh
thumbnail: https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/a7fa5540-8384-4766-13ef-5ce535300800/public
tags: [customers, engineering]
---

![mcp+vt.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/cddcb5d4-1571-4c1f-4d62-b3fefb291f00/public)

The [Model Context Protocol](https://modelcontextprotocol.io/) is built by a
large open source community. One part of the stewardship of that community is a
Core Maintainer team of nine from AI companies like Anthropic, Google,
Microsoft, OpenAI, and Amazon. Paul Carleton is one such Core Maintainer from
the Technical Staff at Anthropic. With the
[new MCP specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
released last month, we interviewed Paul about how he relies on Val Town to test
and demo MCP features.

> “It’s so easy to put up a quick MCP or API with Val Town. I’ve tried other
> platforms and CDNs, but it’s so much faster and smoother to go with Val Town.”

## Table of contents

1. [Paul’s vals](#pauls-vals)
   1. [Developing the new spec](#developing-the-new-spec)
   1. [Testing conformance](#testing-conformance)
   1. [Debugging OAuth for your MCP server](#debugging-oauth-for-your-mcp-server)
   1. [Demoing the TypeScript SDK](#demoing-the-typescript-sdk)
   1. [Solving enterprise auth](#solving-enterprise-auth)
1. [Why Val Town](#why-val-town)
1. [Business _and_ pleasure](#business-and-pleasure)

## Paul’s vals

Paul’s work focuses on MCP auth and conformance. He’s written
[dozens of vals](https://www.val.town/u/pcarleton), collaborating with Anthropic
teammates and other Core Maintainers to test and demo all things MCP.

### Developing the new spec

The new MCP spec (`2026-07-28`) includes fundamental changes to the protocol.
Paul created an
[MCP draft spec viewer](https://www.val.town/x/pcarleton/mcp-draft-spec-viewer)
on Val Town for the Core Maintainers to diff the new spec against the old one,
leave comments, and view conformance testing coverage for each section.

![mcp-draft-spec-viewer.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/313620bb-5403-4b2f-ab9d-538b80822900/public)

> “This one was really handy. The core maintainers all wanted to run through the
> specification and be able to tell what the diff was between the previous
> version and this version. There are nine of us from different companies, and
> so when we need to work on some tool together, it’s nice to be able to deploy
> something quickly to share it.”

### Testing conformance

To check MCP client conformance against the new spec, Paul also set up an HTTP
val that clients can call at
[mcp-checker-2026-07-28.val.run](https://mcp-checker-2026-07-28.val.run). The
val itself is an MCP server that evaluates a client’s request and responds with
an explanation of what failed and why.

![mcp-checker-2026-07-28.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/61a885e7-ed22-4228-bcbb-967aa1530000/public)

> “It’s been helpful to be like, is Claude Code ready for the new spec?”
> [Answer: Yes!]

### Debugging OAuth for your MCP server

If you have an MCP server, you can paste its URL into Paul’s debugger at
[mcp-oauth-debugger.val.run](https://mcp-oauth-debugger.val.run/) to see how it
scores on OAuth.

![mcp-oauth-debugger.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/7efca97f-5894-4261-654d-3cc7ae4e5700/public)

> “You put in an MCP server, and we’ll check the public endpoints. This one I
> share a lot.”

### Demoing the TypeScript SDK

Paul’s [mcp-v2-examples](https://www.val.town/x/pcarleton/mcp-v2-examples) val
has both MCP client and server examples for the TypeScript SDK that follows the
new spec.

![mcp-v2-examples.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/548dcd84-03ed-4e0c-6b25-2fb6beff6f00/public)

> “The way I build MCP servers most of the time is in Val Town. It’s great. A
> GET request returns some JSON that renders here [on the frontend], and I can
> also just query the MCP server directly to see what that example server does.”

### Solving enterprise auth

The Core Maintainer team is working on
[zero-touch OAuth for MCP](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/),
and Val Town has been the right tool to test many of those new auth flows.

![xaa-mcp-idp.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/8cff86fa-a185-4939-f845-16a7b326ac00/public)

Paul has over half a dozen different XAA vals. As he explains:

> “For auth with MCP, you end up having a lot of different parties involved: you
> have the client, the authorization server, and the MCP server. We’re trying to
> make it easier to do single sign-on through MCP through an official extension
> called “Enterprise Managed Auth” or EMA. That extension is based on a draft
> RFC called Identity Assertion Authorization Grant (or ID-JAG). We needed a
> server that’s protected by this new form of auth, and **with Val Town I can
> just get an HTTPS URL that has an MCP, and I can tweak that really quickly,
> and then I can put that MCP into [claude.ai](https://claude.ai/) and have our
> real production backend hit it and test a whole bunch of stuff, which is
> really nice.**”

## Why Val Town

Those five examples are just a fraction of the vals Paul and the MCP team use to
develop the protocol.

Paul uses Claude Code (ofc) and pushes to Val Town via the API, occasionally
jumping into the val.town editor to make changes by hand. The combination of
fullstack TypeScript, instant deployments, live HTTPS URLs, and shareable open
source code make Val Town a good fit for this kind of work.

> “I use Val Town for all the things, especially because I work on the open
> source side. It’s a nice source of truth to help coordinate people in a low
> friction way. Being able to slot in an MCP server val with an HTTPS URL and
> very clear, easy-to-get-to logs is really nice.”

## Business _and_ pleasure

At risk of sounding idealistic, we write fairly often about Val Town’s mission
to spread the joy of programming. We think Val Town can be
[both useful and fun](/shopify-quick-for-all), so it made us smile to see Paul,
smiling, demo one last val: a server to pipe messages from the internet to his
[flipdots](https://flipdots.com/en/products-services/small-7-segment-displays/)
display in meatspace.

![flipdots.png](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/58ea36a0-fd87-4707-2e9b-d8a0ee1a7300/public)

Whenever a friend or coworker submits a message to the `*.val.run` site pictured
above, the board behind Paul’s desk makes that _ft-t-t-t-t-t-t_ sound as the
dots flip into place.

\*\*\*

With the new MCP spec out last month, Paul and our team have MCP vals for your
remixing pleasure (like this
[simple example](https://www.val.town/x/templates/mcp-server)). And—for a bit of
MCP inception—you can connect to our
[MCP server](https://docs.val.town/guides/prompting/mcp/) to get started, or
[book a demo](https://calendar.app.google/uXdbgkdtz9SLzR25A) with our founder
Steve to get a feel for Val Town.