---
title: Introducing Scoped Blob Storage
description: "Every val gets its own blobs"
pubDate: 2026-06-11:00:00.000Z
author: Tom MacWright
thumbnail: /images/6616231e-e7e5-4488-7327-68c285994a00.webp
tags: [product]
---

Since the early days, vals on Val Town have had the ability to store blobs on an
S3-like service. Just import a val from the standard library and it works, with
no setup or configuration. It's a tremendously useful and popular feature.

What's a blob, you might be asking? It's binary data that you store with a name,
just like a file. And it can be any kind of data - text, photos, music, JSON -
it's all the same to blob storage. It's a great option for storing unstructured,
simple, or big data. If you've got structured data and need a database, check
out our [SQLite database support](https://www.val.town/x/std/sqlite) which is
just as easy to setup.

Today we're adding a new version of blob storage with two important tweaks:

### It's scoped!

Scope blob storage is isolated by val, rather than by account. This simplifies
things for when you might need to transfer a val from one organization to
another, or list only the blobs that were created by one specific val.

In the old days (before yesterday), blob storage was scoped by your user account
or organization. In the rare case that two vals wanted to access the same blobs,
this was nifty, but in the more common case we'd see vals accidentally
overwriting each others data. And there was no connection between a blob and the
val that wrote it, so you couldn't transfer a val without losing access to all
of its blobs.

### It's faster!

About 5x faster on our internal benchmarks. Pretty good! I'll even give away the
secret: under the hood, scoped blob storage is based on good old Amazon S3.

We used Cloudflare R2 for the global blob storage system, because we were
already using some of the Cloudflare stack, and the egress pricing difference is
compelling. But in this case, proximity is the deciding factor: with an S3
bucket in the same region as our servers, file uploads, downloads, and other
operations involve the minimum amount of network hops. It all stays in Amazon's
network, and for small requests where latency is the biggest factor, that means
a big performance difference.

### View those blobs in the settings

<img src="/images/6616231e-e7e5-4488-7327-68c285994a00.webp" style="border: 1px solid lightgray; border-radius: 10px; margin-bottom: 10px" />

Just like for global blobs, you can list, download, and upload blobs from the
website, not just from code. Check it out with the new Blob Storage menu item
from vals.

### Scoped blob storage: a solid new default

If you're using Val Town's MCP servers, skills, or Townie, you might notice that
the LLMs are now set to prefer scoped blob storage, as the more future-proof,
faster alternative to global storage. If you're coding by hand (bless you, sweet
thing) check out the
[new documentation for the std/blob val](https://www.val.town/x/std/blob) for
details on how to use scoped blob storage. It's the same API, just a different
import.