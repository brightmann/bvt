---
title: Val Town supports AGENTS.md
description: Introducing a new .config val
pubDate: 2026-07-17T00:00:00.000Z
author: Pete Millspaugh
thumbnail: https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/9690d073-ed58-44b3-93bb-19cb889df500/public
tags: [product]
---

![floating code robot, AGENTS.md](https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/c3cfdd0b-6531-4420-92c1-c6e5ea539500/public)

Val Town now supports [AGENTS.md](https://agents.md). This is a feature we
craved for ourselves and think you may find quite useful.

## Per val

When you include an `AGENTS.md` file in any val, Townie will automatically read
those instructions when viewing that val. Perfect for onboarding an agent to a
project, explaining preferences and patterns and gotchas.

## Per user

For instructions and preferences that Townie should _always_ be aware of, you
can add `AGENTS.md` instructions in a special `.config` val, which you can
create and view via
[val.town/settings/preferences](https://val.town/settings/preferences).

## Per org

Orgs can also create agent instructions for context shared across your team.
Like your personal instructions, org-wide instructions live in `AGENTS.md`
within your org's `.config` val, also accessible in org Settings > Preferences.

## For any agent

Agent instructions are surfaced to any agent—not just Townie—via our MCP server.
So when you're using Claude Code, Codex, Cursor, or somesuch, your agent will
have always read your personal instructions (and can likewise read per-org and
per-val instructions).

## Self-improving agents

One neat thing about `AGENTS.md` is that agents can read _and write_ to the
file. By writing its own instructions, an agent can create its own memory
system.

This complements our
[custom skills](/changelog-2026-07-02#write-your-own-skills-for-townie) and
[platform skills](/plugin#capabilities) that agents can already discover. In
combination, instructions and skills make Val Town a malleable and durable space
for agents.

_Read more about agent instructions and skills in our
[documentation](https://docs.val.town/guides/prompting/skills)._