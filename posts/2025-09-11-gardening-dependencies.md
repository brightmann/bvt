---
title: How to keep package.json under control
description: How I wrangle the many tools that we use to build Val Town
pubDate: 2025-09-11:00:00.000Z
author: Tom MacWright
thumbnail: "/images/062dfce1-0be9-498a-6ce3-99a2f9892900.webp"
tags: [engineering]
---

Val Town is a React application with a ton of dependencies. It's complicated,
and we have to deal with dependency upgrades all the time. We are committing the
cardinal sin of overcomplicating the web: our `node_modules` directory is 863MB
as of this writing. Whew!

![A boat with boxes that symbolize our dependencies](/images/062dfce1-0be9-498a-6ce3-99a2f9892900.webp)

Is it, though? Are we installing dependencies freely, taking on technical debt
left and right? I'd say _not really_.

The thing is, there's some
[essential complexity](https://macwright.com/2023/12/31/luxury-of-simplicity) in
what we're trying to build. We aren't going to DIY our own TypeScript transpiler
or avoid installing [CodeMirror](https://codemirror.net/) and use a textarea for
our code editing. I spend a little time every week looking through
`package.json` and thinking _which of these can I remove?_ Sometimes I find a
dependency that can be yanked, but a lot of times I come up empty-handed: we
actually need all this junk. My ability to judge other people fades as I learn
the hard way how principles make contact with reality.

But that's not to say that there's no art in dependency grooming. There are a
bunch of techniques and tools that all fit together into a general sort of
dependency hygiene that I've developed. I'm not sure I've written it down
anywhere in full. Here's a shot.

## Read all new dependencies (except React)

Rule #1 is to read. This is very literal: read the source code of any dependency
that you're about to introduce into your project. And, of course, the README. I
highly recommend doing this the old fashioned way, with your eyes and brain, but
LLMs can be helpful too if that's more your speed: but don't offload the whole
task to a robot. Actual _understanding_ is the goal, and you can't achieve that
secondhand.

Fairly often you'll do this and discover that the new dependency you're adding
is just 50 lines long, and is better off
[vendored](https://macwright.com/2021/03/11/vendor-by-default) rather than
installed with NPM: just copy that code over and preserve its open source
license in a code comment.

Or you'll realize that the module is 2MB gzipped and introduces 3 new transitive
dependencies, but you're only actually using 50 lines of it. Again, this is not
a good scenario: you're introducing a lot of surface area that's pure downside.
It'll take up more room in `node_modules`, or it could have security
vulnerabilities in the parts that you aren't using and you'll have to triage
them just the same.

I make an exception for React and other mega-dependencies: I've seen the inside
of React's algorithms and TypeScript compiler code, and decided that I just need
to trust the whizzes at those companies.

If you don't read, you won't succeed.

## `npm ls` and reading `package-lock.json` is your friend

Or, if you're using `pnpm`, `pnpm-lock.yaml` and `pnpm why`. And a similar
command for whatever other package manager you're using. The reason is pretty
simple: your direct dependencies are inevitably the tip of the iceberg. What
really fills up `node_modules` is all of the stuff they bring along, and that
stuff - transitive dependencies - is extremely important.

For example, let's say your project needs to transpile TypeScript. It's fairly
likely that you already have a transpiler installed: in our project, we have
copies of esbuild that are dragged in by [drizzle-kit](https://drizzle.team/),
by [Vite](https://vite.dev/), and by [tsx](https://www.npmjs.com/package/tsx).
So using `esbuild` as a _direct dependency_ costs us nothing: it gets deduped to
the same `esbuild` binary that everything was using under the hood before. This
is a useful little game: when you're installing something for your application,
if you can find a way to reuse something that's already installed transitively,
you can get a dependency for free!

And _read_ package-lock.json or pnpm-lock.yaml. It's not that bad, and you'll
learn something. There's a lot in there. It'll familiarize yourself with what
modules others rely on, which builds a little PageRank algorithm in your head so
that you can recall, off the bat, what you might want to use for something new.
Feed your curiosity and open those `npmjs.com` webpages.

## Analyzing the actual size of packages is pretty nifty

There are two distinct impacts of big NPM modules: their contribution to your
distributed application, and how much room they take up in `node_modules` while
you're developing the application. It's good to focus on application size first,
but both matter: an application that relies on 2 gigabytes of code in
`node_modules` is going to be pretty slow to test in CI, and slower to deploy
because it just requires more downloading.

![Grand Perspective visualizing dependencies in node_modules](/images/5e1ec4cb-ff5c-4af1-cda2-ddaa10f72500.webp)

I use [Grand Perspective](http://grandperspectiv.sourceforge.net), a vintage
application that's been around for 20 years, to keep track of `node_modules` on
disk, but there are a lot of other
[disk space analyzers](https://en.wikipedia.org/wiki/Template:Disk_space_analyzers)
worth considering if you're using Linux or Windows.

Analyzing the size of your distributed application is a much more complicated
and system-specific. We're using React Router with [Vite](https://vite.dev/), so
[rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) is
the solution, but it's different for every bundler and some frameworks have
their own solution, like
[Next.js's bundle analyzer](https://www.npmjs.com/package/@next/bundle-analyzer).

## What makes a good NPM module

But what are you really looking for? The definition of a good module keeps
shifting, but pretty often it'll look something like: a decent history of
maintainership, built-in TypeScript types, passing tests, good documentation.

A slang shorthand for this would be that _it should have a vibe of competence_.
Even if you're building something by the seat of your pants and making lots of
mistakes, you want the parts that you're using to be solid. An application's
bugs are the sum total of the bugs you write and the bugs you inherit from
others, so it's actually kind of fair to have higher standards for code that you
install than code that you write.

What makes a bad module? Of course something that's abandoned and poorly written
is bad, but even worse than that is a module that solves the wrong problem -
something that doesn't actually fit the problem you have and instead you have to
shift the problem to make it work. You can fix this by reading and spending a
little time understanding both your problem and the solution. Or by asking the
LLM, you little baby.

## Get rid of what you don't use and keep the rest up to date

![Renovate and Knip](/images/80b2a3d8-80cd-4d09-5298-dbb26a958d00.webp)

You should be using [Renovate](https://www.mend.io/renovate/). It'll nag you to
keep your modules up to date, and it's better to do that kind of work
incrementally rather than in one yearly push.

And you should be using [Knip](https://knip.dev/). It's just straight-up magic:
it's so fast, extremely accurate. It'll tell you which modules you have
specified in `package.json` but that you aren't actually using. It's super easy
to lose track and have a lot of junk lying around from old versions of a
project. Get rid of it with Knip! It'll even show you which files your project
no longer uses. If there was a Knip t-shirt I'd be wearing it right now, that's
how good it is.

## Have a quick cheatsheet of people who write good modules

The NPM module ecosystem is made up of people. It's useful to know who those
people are! For example, when I'm looking for something related to Promises (or
many other topics), I'll check if
[Sindre Sorhus](https://github.com/sindresorhus?tab=repositories&type=source)
has already published something. Very often he has!

Other folks who have lots of solid work are good to know, like
[isaacs](https://github.com/isaacs?tab=repositories&type=source),
[Matteo Collina](https://github.com/mcollina?tab=repositories&type=source),
[Mafintosh](https://github.com/mafintosh?tab=repositories&type=source).

If you're doing something with Markdown, you should know all the
[wooorm](https://github.com/wooorm) and [unified](https://github.com/unifiedjs)
repos. Nextgen Node.js stuff? Check [unjs](https://github.com/unjs). Transpiler
internals, you should always check
[Rich Harris](https://github.com/Rich-Harris?tab=repositories&type=source)'s
projects, which include so many gems.

_Tune in for a follow-up post that just includes some starting points for
dependencies that you can even put in an AGENTS.md file if you want to._

## Dependencies are an inevitability

That's the truth: we're all building on the shoulders of each other. But there's
an art to finding the right shoulders to build on.

In a way, it's frustrating that the web platform, and the NPM module ecosystem,
moves so fast and requires so many nitpicky updates and decisions. But that's
pretty much the norm: even next-generation languages that have learned the
lessons of NPM and Node suffer from bloated package ecosystems. Gardening
dependencies is part of the job and we should do it well.
