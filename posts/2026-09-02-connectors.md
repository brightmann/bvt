---
title: Connecting every app to every other app
description: DCR and CIMD are solving OAuth's n² problem
pubDate: 2026-09-02T00:00:00.000Z
author: Steve Krouse
thumbnail: https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/5a0fe0c4-e748-4412-cb22-5e5775b21300/public
tags: essay
---

I've long envied Zapier's extensive connectors library. I wish our app –
[Val Town](https://val.town/), a vibe coding platform – could one-click connect
to every app.

<a href="https://zapier.com/apps">
  <img
    src="https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/089ec129-c8bc-4a3a-d68d-a984b39fd300/public"
    alt="Zapier's integrations directory showing over 9,000 app connections, including Google Sheets, Gmail, Slack, Google Calendar, and Notion"
    style="display: block; width: 100%; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px"
  />
  <a href="https://zapier.com/apps" style="display: block; text-align: center; color: #6b7280; font-size: 0.9em; margin-top: 6px">zapier.com/apps</a>
</a>

This is a classic n² problem, connecting every app to every other app.

My dream has always been that there could be some _protocol_ by which any app
could _dynamically_ _authenticate_ and _authorize_ any other app.

Is OAuth that protocol?

Almost!

## Registering OAuth Clients

The core n² problem remains: every app still needs to register as an OAuth
client for every other app.

At best, registering an OAuth client is 5 minutes of clicking around a developer
portal. But you never know. It can mean filling out some forms, making a demo
video, signing paperwork, or, horror of horrors, getting on a video call. It's a
ad-hoc, manual headache. And we all have to do it for every single app our users
want to connect to.

But there's reason for hope! Anthropic and OpenAI saw this problem coming. They
need a way to connect to all their customers' apps, but they didn't want to get
all those OAuth clients. So they put a little-known OAuth extension
[into the spec for MCP](https://modelcontextprotocol.io/specification/draft/basic/authorization/client-registration):
[Dynamic Client Registration (DCR)](https://www.rfc-editor.org/info/rfc7591/).

## Dynamic Client Registration (DCR)

DCR automates the client registration problem. Instead of requiring a human to
manually get an OAuth client, your app _dynamically_ provisions one, and then
immediately starts the OAuth flow _to this app it had never heard of before_.
This is the dream!

At my startup [Val Town](https://val.town/), we learned about DCR while building
[our MCP server / plugin](https://docs.val.town/guides/prompting/plugin), which
is what enables you to OAuth into Val Town from Claude and ChatGPT.

But the benefits don't end with just Claude and ChatGPT. _Any app_ can
dynamically register an OAuth client with Val Town, and connect to their users'
Val Town accounts.

## Login with DCR

For example, on top of this primitive, we created
[std/oauth](https://www.val.town/x/std/oauth), a middleware library that adds
"Login with Val Town" OAuth to your Val Town app in 2 lines of code. This is
literally a whole app:

```tsx
/** @jsxImportSource https://esm.sh/hono/jsx */
import { Hono } from "https://esm.sh/hono";
import {
  getOAuthUserData,
  oauthMiddleware,
} from "https://esm.town/v/std/oauth/middleware.ts";

const app = new Hono();

app.get("/", async (c) => {
  const session = await getOAuthUserData(c.req.raw);

  return c.html(
    <html>
      <body>
        {session?.user
          ? <p>Logged in as {session.user.username}</p>
          : <a href="/auth/login">Log in</a>}
      </body>
    </html>,
  );
});

export default oauthMiddleware(app.fetch);
```

Try it out below:

<iframe
  src="https://std-oauth.val.run/"
  style="display: block; width: 100%; height: 300px; border: 1px solid #e5e7eb; border-radius: 12px"
></iframe>

There is no extra set up step. If you hit "remix" on Val Town, you'll have a
copy of that app, and "Login with Val Town" authentication will immediately
work. Your app's OAuth client to Val Town will be created behind the scenes when
the first user logs in.

To be clear, there's no magic here because Val Town runs both the authorization
server and the app's infrastructure. This library could be adapted to run on any
infrastructure, and for any authentication provider that supports DCR.

It gets better.

## Client ID Metadata Documents (CIMD)

DCR, while solving most of the OAuth client registration problem, can be
[somewhat painful to implement](https://blog.modelcontextprotocol.io/posts/client_registration/#challenge-1-operational-limitations-of-dynamic-client-registration).
(Paul Carleton from the MCP team
[explains more here](https://youtu.be/wvtGlur2SdI?t=715).)

Enter
[Client ID Metadata Documents (CIMD)](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/).

CIMD means you don't have to pre-register an OAuth client at all. Instead you
can self-host your OAuth client data at a URL, and then initiate an OAuth flow
right away.

For example, Notion's CIMD link is
[`https://mcp.notion.com/.well-known/oauth-authorization-server`](https://mcp.notion.com/.well-known/oauth-authorization-server),
which returns:

```json
{
  "issuer": "https://mcp.notion.com",
  "authorization_endpoint": "https://mcp.notion.com/authorize",
  "token_endpoint": "https://mcp.notion.com/token",
  "registration_endpoint": "https://mcp.notion.com/register",
  "scopes_supported": [
    "default"
  ],
  "response_types_supported": [
    "code"
  ],
  "response_modes_supported": [
    "query"
  ],
  "grant_types_supported": [
    "authorization_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:jwt-bearer"
  ],
  "authorization_grant_profiles_supported": [
    "urn:ietf:params:oauth:grant-profile:id-jag"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post",
    "none"
  ],
  "revocation_endpoint": "https://mcp.notion.com/token",
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ],
  "client_id_metadata_document_supported": true,
  "introspection_endpoint": "https://mcp.notion.com/introspect",
  "introspection_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post",
    "none"
  ]
}
```

Any app that supports CIMD can start an OAuth flow with Notion immediately –
whenever a user requests it – even if that app had never heard of Notion before.

## All together now

Thousands of apps now support DCR and hundreds support CIMD. I can't remember a
time where a new software protocol spreads this quickly. In our rush to all make
MCP servers that play with ChatGPT and Claude, we've inadvertently made our apps
connectable to each other as well.

So I took it to the logical extreme, and built this live demo app with 3,613
connectors:

<a href="https://oauth-demos.val.run/">
  <img
    src="https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/6ce4db6b-3e0b-42e9-605d-6bf4dc086500/public"
    alt="Demo app of 21 DCR or CIMD connections"
    style="display: block; width: 100%; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px"
  />
  <a href="https://oauth-demos.val.run/" style="display: block; text-align: center; color: #6b7280; font-size: 0.9em; margin-top: 6px">oauth-demos.val.run</a>
</a>

The mind-blowing part is that if you deploy a copy of this app yourself – ie by
[clicking "remix" here on Val Town](https://www.val.town/x/stevekrouse/oauth-demos)
– all the connectors will instantly work. You won't need to get a single OAuth
client.

## The dream is closer

As you may have noticed, we're not yet living the dream. Even us at Val Town haven't shipped connectors to all these apps. There are
still problems to be solved, mostly stemming from the fact that these new
protocols weren't designed to solve this connect-all-the-apps problem.

### Problem #1: Actually supported dynamic registration

Many of these dynamic client registration endpoints aren't truly dynamic. For
example, if you try (in my app above) to connect to Google Ads, you'll get this
error message: `redirect host not in platform catalog: oauth-demos.val.run`. In
other words, they don't support truly dynamic registration; we still need to be
pre-registered in their catalog.

### Problem #2: MCP vs REST API

DCR/CIMD may only work for MCP. It might not authorize you to make normal REST
API calls. This is a potentially tricky problem for us at Val Town as a vibe
coding platform.

For example, say you want to build a Stripe dashboard in Val Town. We can easily
use DCR to connect you to Stripe via MCP. However, that will not work for their
REST API.

The problem here is more social convention than technical: while you technically
_can_ write code to build a dashboard by calling Stripe's MCP server instead of
its API server, that's not how you're supposed to interact with an MCP server. I
believe, this is the single core difference between REST API vs MCP: the promise
of stability. Stripe [in particular](https://stripe.com/blog/api-versioning)
goes to great lengths to ensure your REST API calls will always work. That's
important because code is brittle. If the API changes, the code breaks.

However, the convention with MCPs is that there is _inference on both sides of
the call_. An LLM can read the MCP toolset before invoking them, and if they get
an error or changed behavior, the LLM can error-correct and make more MCP calls
until it succeeds. By way of metaphor, an MCP server is the AI equivalent of a
user interface (UI), because UIs also don't have any promise of stability, and
for the same reason: there's inference (a person) on both sides of any action.
Unlike code, a person notices when in a UI buttons move, or when buttons
suddenly do different things, and can error-correct in real time.

One solution here is that application could allow DCR/CIMD for their API, or
allow the tokens obtained through either means work on either surface – given
the requisite resource permissions. That's how it works in Val Town currently.
Any token you obtain from DCR works both with our MCP and our REST API.

### Problem #3: OSS & Tooling

There should probably be some sort of public registry of all these
connectors. I scraped my list from [mcpservers.org](https://mcpservers.org/).

We also need good open-source tooling on how to easily connect to them all. Maybe the OSS library could look like the [Zapier SDK](https://zapier.com/sdk),
[Pipedream Connect](https://pipedream.com/connect), or
[Nango](https://nango.dev/).

## No clicks, no keys

As we've seen above, DCR/CIMD allows you to _authorize_ to other apps you have accounts at. 

But there's another category of problem: accessing a pay-per-use API that you don't have an account at. Maybe [x402 solves the other half of this problem](https://stevekrouse.com/x402), the _payment_ part, so you don't need an account with your credit card attached to immediately be able to pay for premium APIs. 

Together, DCR/CIMD and x402 point towards a future of apps without API keys as env variables. In the
age of vibe coding – where generating the whole app takes mere minutes – not having to have a human get and set an API key is a huge reduction in drudgery, and a huge step forward
for malleable software.