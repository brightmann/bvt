---
title: "Scammers, exit nodes, and my part-time job fighting abuse"
description: "Keeping the bad ones out."
pubDate: "2026-10-16T04:00:00.000Z"
author: Tom MacWright
thumbnail: https://www.val.town/i/images/008a9ade-4fab-4f01-9795-69a00a9c7e4a/public
---

Unfortunately, spammers and scammers are constantly trying to use Val Town as
part of their toolset. We had a honeymoon period of a year or so when it was
only some enthusiasts using the platform. But then we appeared on their radar.
Ever since then, I've had the part-time job of battling the Indonesian gambling
websites, OpenAI token resellers, rootkit distributors, and all other kinds of
scoundrels.

It can be tough work, not just technically but mentally and emotionally, and
it's given me a deep appreciation for the people doing harder work and more of
it at the Trust & Safety teams in big social networks. After spending some time
doing abuse prevention, I usually need a long walk and some time to paint
[watercolors](https://macwright.com/2026/10/06/cloudhead-study) or play the
guitar. A creative reset.

But that's not to say it's uninteresting. It's interesting as heck. Since I
haven't written about it before, here's what I've learned about moderation,
abuse prevention, spam, and so on.

## Abuse is distributed and every platform is part of it

I was shocked to learn how many big platforms are part of these attacks. For
example, we have long had a problem with people hosting phishing attacks on Val
Town, in particular fake cPanel or webmail login pages. But even though Val Town
lets you host databases, backend applications, send emails, and more, their code
would just be a static HTML page that would send the stolen credentials to one
server, load JavaScript from another one, and so on. And they'd use some other
stolen resource to send the emails with links to that bogus login page.

Obviously I'm not rooting for them to host the whole thing on Val Town. By
distributing the parts across services, it surely becomes a little harder to
track it all down and identify that one of the services is involved. And it's
consistently shocking which services are involved - JavaScript from a storage
service hosted by a major publicly-traded company, a database by a major
startup, files in popular file-storage sites. I even encountered one attack that
used the Internet Archive as a link in the chain.

One lesson we all keep learning is that every application can be distilled down
to its component parts and used for something unexpected. An NPR comments
section can be
[a chatroom for teens](https://www.thisamericanlife.org/897/intergenerational-space-travel).
GitHub Actions can be used to
[mine cryptocurrency](https://www.bleepingcomputer.com/news/security/github-actions-being-actively-abused-to-mine-cryptocurrency-on-github-servers/).
YouTube can be
[infinite file storage](https://hackaday.com/2023/02/21/youtube-as-infinite-file-storage/).
Similarly, any website that lets you host a file is an abuse vector.

## Dialing in the right sensitivity for our warning systems

A fake login page for a real bank is an easy red flag for bad behavior, so
stealing bank credentials is a good rule for a detector. But then you identify
someone who's transmitting the session cookies for an online bank between
browsers and, after learning about them and their use-case and the fact that
it's a purely personal tool, that actually turns out to be legitimate. The goal
is to find enough bad guys to protect Val Town's services and domain and to
crack down on the internet-wide problem of abusive behavior, but trying to find
_every_ malicious actor is probably an impossible feat. My favorite columnist,
Matt Levine,
[wrote about this phenomenon with banks recently](https://www.bloomberg.com/opinion/newsletters/2026-10-14/bank-of-america-missed-some-bad-guys) -
they also need to find most of the bad actors, but they routinely miss some and
that job then falls to regulators.

I find myself in a tension between natural curiosity about why these people are
doing these particular schemes, and the practical principle that it doesn't
really matter that much: scammers aren't really putting that much effort or
intentionality into setting up these systems because they aren't very
high-reward anyway. They have to expect to get shut down at some point, so
they're not like engineers crafting some beautiful system.

So our categories grew to be more broad in terms of topic but narrow in terms of
functionality: are we seeing telltale obfuscated code patterns, or people
sending a password to some other service? Is it gambling or crypto-related?

Anyway, why _Indonesian_ gambling websites? As far as I've been able to learn,
the country has both
[skyrocketing interest in gambling](https://www.reuters.com/technology/indonesia-vows-crack-down-blood-sucking-online-gambling-2024-06-14/)
but also
[a total ban on gambling](https://www.abc.net.au/asia/indonesia-has-a-huge-online-gambling-problem/104179856),
which they're attempting to enforce. Multiply that by a population of 287
million, and you end up with a lot of operators trying to host illegal websites
anywhere they can. They're using Val Town to try and get SEO or just run the
gambling apps as long as they can.

Here's what we actually see, in terms of what gets accounts banned:

![Chart of reasons for account bans](https://www.val.town/i/images/5fcd2ab3-cd5d-4991-b0be-44fbfa8d6fc9/public)

The long tail includes things like attempted
[SSRF](https://en.wikipedia.org/wiki/Server-side_request_forgery) exploits on
Val Town itself, and people trying to distribute other hacking tools.

## Implementing complete non-destructive banning

When I started building the system for abuse prevention, it relied on actual
hard deletion of user accounts. Wiping accounts was rare and a simple system was
enough. But once we introduced automatic detection, suddenly there are other
risks: what if a trusted user trips the system or we need to audit the code that
we just deleted? What we have is by no means a self-improving system, but banned
user content is pretty useful for improving the LLM-based rules.

So I built a more advanced system, that supported silent banning, sending
notifications, unbanning, and could store the reasons for why a particular
account was banned. Now when accounts are clearly connected in the same network,
the ban system can communicate that information. And when a user is
automatically banned, they can get a notification and then contest and reverse
the decision if it's wrong.

## Detecting spam before and after publishing code

The first naïve system was based on keyword matching. There were a handful of
predictable patterns and that worked.

But we quickly outgrew that and started using
[Netcraft](https://www.netcraft.com/) as a primary signal. When a Val is saved,
any web endpoints are sent to them for their audit, and if Netcraft reports
something as abusive, we'll automatically ban. Netcraft has been incredibly
accurate, even for sites with pretty sophisticated attacks. They don't catch
everything, but what they do catch has been reliably correct.

But that only covers HTTP endpoints, and catches problems after they are online.
Vals can run on intervals, send emails, and receive emails. And Val source code
is all served as JavaScript modules on [esm.town](https://esm.town/), so we
could inadvertently serve as a _link_ in a larger exploit. We don't want that
either. So we additionally run all saved code through a cheap, lightweight LLM
with tuned prompting. That produces both a score and a reason, and scores above
a certain level get automatically banned.

And that only covers vals! Any textbox, any link on the internet can be part of
spam. So that bot also crawls usernames, social media links, and bio information
to catch people trying to use Val Town for SEO farming operations. An SEO
farming operation usually looks like someone setting up a lot of accounts and
creating accounts that advertise some online gambling, crypto, or AI service,
and their "social link" in their biography will be to the service.

Those SEO schemes wouldn't work anyway: user-generated links on Val Town have
always had [rel=nofollow](https://en.wikipedia.org/wiki/Nofollow), so smart
search engines disregard them for ranking purposes. But as I mentioned earlier,
spam is a low-intent volume business.

We've also used [VirusTotal](https://www.virustotal.com/) as a secondary source
of detection data alongside Netcraft. It's useful for different kinds of work,
like manually diagnosing coordinated spam systems.

## Hosting bad material makes us guilty by association

The problem with people hosting phishing websites on your subdomain is that
they'll send emails with links to those fake login pages, and those emails will
get flagged as phishing, and the links in those emails will also get flagged as
phishing websites. So Google might act on that report, and the email
deliverability of domains similar to the domain of the page will get docked.
Also, it's wrong.

Chrome will flag all of the sites under the subdomain as
[unsafe sites](https://support.google.com/chromebook/answer/99020?hl=en-GB&co=GENIE.Platform%3DDesktop),
and you'll have to delete the content and contest the ban. Even if those
subdomains are on the [Public Suffix List](https://publicsuffix.org/), which
kind of disclaims ownership of `*.web.val.run`, we're still really responsible
and those sites are connected in the eyes of Google, and they probably should
be.

Personally I think it's right to expect companies that are providing any kind of
hosting of content to be responsible for that content. And even though there are
some mild [legal distinctions](https://en.wikipedia.org/wiki/Section_230)
between the host and the hostee, the de-facto self-policing of the internet
works, kind of. It could definitely work better, though.

## Sometimes we have to ban stuff that's not illegal

![Accounts banned in 2026](https://www.val.town/i/images/ff349764-4b7c-4df0-99b2-a88447e65d62/public)

In May this year, we got an extraordinary number of signups, all deploying
identical code. Any guesses?

The
[internet blackout in Iran](https://en.wikipedia.org/wiki/2026_Internet_blackout_in_Iran)
led to hundreds of thousands of people trying to get around a massive,
restrictive firewall, and Val Town was one of the easiest places to deploy code.
Unfortunately, hosting thousands of exit nodes is not our business, and it did a
number on our servers, bandwidth costs, and IP reputation.

![May spike in bans](https://www.val.town/i/images/5f127e84-68e8-4879-99ba-9ea944f13b32/public)

Other providers, like Deno, have solved this problem by restricting outbound
traffic from new free accounts. We could do the same in the future, or try and
find other fingerprints of generic proxies. Right now, we just try to ban users
who are simply deploying generic proxies: it's a valid need, but Val Town isn't
the place to do it.

## Will we ever be able to solve abuse?

Probably not. Definitionally, it's a moving target: today's crypto miners are
tomorrow's stolen AI-token miners. There'll always be a new thing, and new
schemes to get around the rules. This is why companies have whole departments
devoted to this problem.

One way to cut down on the abuse is to require a credit card to do anything
useful with the product. Unfortunately, that's also
[enshittification](https://en.wikipedia.org/wiki/Enshittification). And credit
card fraud is rampant. Maybe we could make everyone
[scan their eyeballs](https://en.wikipedia.org/wiki/World_%28blockchain%29). Or
only sign up for accounts in-person, greeted with a hearty handshake at our
office. Who knows.

But I know the next frontier for my side-job of doing trust & safety is to fight
this problem from the identity & behavior side of things. There should be a way
to preserve a powerful onboarding experience to Val Town that also makes it a
pain in the butt for scammers to sign up, drop in their spam slop, and
accomplish their mission.