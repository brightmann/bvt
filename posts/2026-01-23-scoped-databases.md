---
title: Every val gets a database!
description: Every user gets a database interface!
pubDate: 2026-01-23:00:00.000Z
author: Tom MacWright
thumbnail: "/images/abb72093-3f91-4fa9-9e4b-c07e409bd800.webp"
tags: [product]
---

![turso+vt](/images/abb72093-3f91-4fa9-9e4b-c07e409bd800.webp)

Every val now gets its own SQLite database, and a powerful database UI. This
makes it even easier for your vals to persist data and then more transparent to
see what data exists, update it manually if you need to, and run queries against
the val-specific database.

This also unlocks new ways to collaborate: when you fork one of your own
projects, you can choose to fork the database too, so that the new forked val
contains a copy of the old database.

## Code example

Using the [std/sqlite](https://www.val.town/x/std/sqlite) val to access the val
database:

```ts
import sqlite from "https://esm.town/v/std/sqlite/main.ts";

await sqlite.execute('CREATE TABLE IF NOT EXISTS "docs" (contents TEXT)');
await sqlite.execute('INSERT INTO docs (contents) VALUES ("Hello, world!")');
```

## Demo

<iframe width="100%" height="450" src="https://www.youtube.com/embed/_LktJyCxUxU?si=PiBoCkfHPBqXQ5Kl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

With the built-in SQLite browser you can:

- Add and rename columns
- Delete rows
- Get the schema of any table
- Run queries
- Export tables as CSV
- Dump the database as SQL

## History

In 2023 we launched
[SQLite](https://blog.val.town/blog/val-town-newsletter-13#sqlite--blob-storage)
for every Val Town user, powered by our friends at [Turso](https://turso.tech/).
Vals could use the database with zero configuration and total control. A lot of
the most interesting vals are built on this - my
[Bluesky ThinkUp Tribute](https://www.val.town/x/tmcw/bluesky-thinkup-tribute)
val uses SQLite to store people's social media bios, and
[devstats](https://www.val.town/x/tmcw/devstats/code/README.md) uses the
database to track statistics about our repository.

But because databases were scoped to users and organizations, they contained
intermixed data: it's impossible to tell a priori which data came from which
val. Scoped databases fix that problem, eliminating conflicts between different
vals and making it easy to just browse val-specific data.

## Security

We've designed scoped databases to be more secure, too: accessible only by the val itself, so vals can't reach into scoped data living somewhere else. This makes it a lot safer to work on SQLite databases too, because your
schema changes can't affect any other vals.

Under the hood, we've added project-scoped API tokens to make this work: each
val automatically gets a temporary API token as the `VAL_TOWN_API_KEY`
environment variable. That API token has always belonged to a user, but now it
belongs to a val as well, which gives it specific val superpowers.

## Existing databases will stick around

We're supporting both val-scoped and user-scoped databases for the long term:
there are uses to both, and there's no reason to force everyone into a gnarly
upgrade path. But val scoped databases are definitely recommended for new
projects: they make a lot of things easier, and come with a powerful UI.

## Thanks Turso for the continued collaboration!

We've provisioned thousands of databases and this will add even more - but it's
possible because Turso runs SQLite in the cloud. This feature really relies on
some tricks from Turso too, like forking databases by
[seeding from point-in-time backups](https://docs.turso.tech/api-reference/databases/create#body-seed).
