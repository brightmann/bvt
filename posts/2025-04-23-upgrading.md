---
title: Upgrading vals
description: Vals are being upgraded to support multiple files, folders, and more
pubDate: 2025-04-23T00:00:00.000Z
author: Steve Krouse
tags: [product]
---

Today, we’re unifying our two primitives — *vals* and *projects* — into a single primitive: the **val**, with the best features of both.

Historically, vals have been simple and lightweight, but limited to a single file. This upgrade will preserve the elegant spirit of our platform while supporting more complex code and collaborative workflows. This upgrade will help you create bigger things on Val Town – APIs, internal tools, fullstack apps, blogs ([like this one](https://www.val.town/x/ValDotTown/blog)), and much more – without sacrificing the simplicity you've always loved about vals.

*Legacy vals* will temporarily become *projects* during this migration. Post-migration, the concept of *projects* will disappear entirely — leaving only upgraded *vals*. In short: *legacy vals* → *projects* → *vals*.

## Timeline

For most users, no upgrade action is required. We’ll auto-migrate your vals next week. All existing HTTP endpoints, crons, email handlers, and custom domains will be preserved.

For those with mission-critical vals or who use our API to edit or create vals, you can start upgrading your legacy vals today and integrating with our updated API.

- **April 23, 2025** – Announcement of changes & API deprecations.
- **April 30, 2025** – All remaining *legacy vals* auto-upgraded. Deprecated API routes become read-only.
- **May 1, 2025** – The term *projects* will no longer exist — everything will simply be a *val*.

If you need more time, please contact us at [help@val.town](mailto:help@val.town) and we'll work with you.

## Upgrading

We will upgrade all remaining legacy vals on **April 30, 2025**.

You can proactively upgrade by:

- Going to the **Settings** of any legacy val.
- Clicking **Upgrade**.

[See more details in our docs.](https://docs.val.town/upgrading/legacy-vals)

## API Changes

Today, we're introducing the following API routes:

```bash
GET    /v2/vals
POST   /v2/vals
GET    /v2/vals/{val_id} 
DELETE /v2/vals/{val_id}
GET    /v2/vals/{val_id}/branches/{branch_id}
DELETE /v2/vals/{val_id}/branches/{branch_id}
GET    /v2/vals/{val_id}/branches
POST   /v2/vals/{val_id}/branches
GET    /v2/vals/{val_id}/files
POST   /v2/vals/{val_id}/files
DELETE /v2/vals/{val_id}/files
PUT    /v2/vals/{val_id}/files
GET    /v2/vals/{val_id}/files/content
GET    /v2/alias/vals/{username}/{val_name}
GET    /v2/me/vals
```

_Note: During this transition, `{val_id}` is your `project ID`. You can grab it by clicking `Copy` > `Copy project ID` on any new val._

We are deprecating these routes:

```bash
*   /v1/vals/*
*   /v1/projects/*
GET /v1/alias/{username}/{val_name}
GET /v1/alias/projects/{username}/{project_name}
GET /v1/me/comments
GET /v1/me/references
GET /v1/me/likes
GET /v1/me/projects
GET /v1/users/{user_id}/vals
```

View our [updated API reference here](https://docs.val.town/openapi).

All `v1/vals` API routes become read-only on **April 30, 2025**. If you rely on *writing* to those routes, please upgrade to our new `v2/vals` API. All deprecated API routes will continue serving historical legacy val data.

### SDK changes
We've also released a new major version of the [Val Town SDK](https://github.com/val-town/sdk/tree/main), `v1.0.0`, using these new endpoints. The deprecated routes above are not accessible in this new version of the SDK.

Unpinned SDK imports will automatically pull the latest version upon your next edit / save. At that point, your SDK calls will temporarily break until you upgrade. To upgrade, update every mention of `projects` → `vals`, `projectName` → `valName`. 

## What's next

1. Upgrade your mission-critical vals early.
2. Update your Val Town API & SDK usage to `/v2` routes.
3. All remaining legacy vals migrate on **April 30, 2025**.
4. Migration completes on **May 1, 2025**.

We're committed to making this transition smooth for you — reach out anytime via [email](mailto:help@val.town) or [Discord](http://discord.val.town/) if you need assistance. We appreciate your help and patience through this migration.
