/** @jsxImportSource react */
import { Bluesky, HackerNews, Twitter } from "./icons.tsx";
import { BlogPost as BlogPostType } from "../utils/types.ts";

export default function Backmatter({ post }: { post: BlogPostType }) {
  const t = encodeURIComponent(post.title);
  const u = `https://blog.val.town${post.link}`;
  const share = {
    twitter: `https://twitter.com/share?text=${t}&url=${encodeURIComponent(u)}&via=valdottown`,
    hn: `http://news.ycombinator.com/submitlink?u=${u}&t=${t}`,
    bluesky: `https://bsky.app/intent/compose?text=${t}%20${u}`,
  };

  return (
    <div className="backmatter">
      <div className="bar">
        <a href={post.sourceURL.replace("/blob/main/", "/edit/main/")} className="source">
          <Pencil />
          Edit on GitHub
        </a>

        <div className="line" />

        <div className="share">
          <a
            href={share.twitter}
            title={`Share on Twitter`}
            className="sharelink twitter"
            target="_blank"
          >
            <Twitter />
            <span className="sr-only">Share on Twitter</span>
          </a>
          <a
            href={share.bluesky}
            title={`Share on Bluesky`}
            className="sharelink bluesky"
            target="_blank"
          >
            <Bluesky />
            <span className="sr-only">Share on Bluesky</span>
          </a>
          <a
            href={share.hn}
            title={`Share on Hacker News`}
            className="sharelink hn"
            target="_blank"
          >
            <HackerNews />
            <span className="sr-only">Share on Hacker News</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Pencil() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V10"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M15.3125 2.18751C15.644 1.85599 16.0937 1.66974 16.5625 1.66974C17.0313 1.66974 17.481 1.85599 17.8125 2.18751C18.144 2.51903 18.3303 2.96866 18.3303 3.43751C18.3303 3.90635 18.144 4.35598 17.8125 4.68751L10.3017 12.1992C10.1038 12.3969 9.85933 12.5416 9.59083 12.62L7.19666 13.32C7.12496 13.3409 7.04895 13.3422 6.97659 13.3236C6.90423 13.3051 6.83819 13.2675 6.78537 13.2146C6.73255 13.1618 6.6949 13.0958 6.67637 13.0234C6.65783 12.9511 6.65908 12.875 6.68 12.8033L7.38 10.4092C7.45877 10.1409 7.60378 9.89672 7.80166 9.69917L15.3125 2.18751Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
