/** @jsxImportSource react */
import { formatDate, getAuthorLink } from "./util.tsx";
import { BlogPost as BlogPostType } from "../utils/types.ts";

function AuthorLink({ name }: { name: string }) {
  const link = getAuthorLink(name);
  if (link) {
    return <a href={link}>{name}</a>;
  }
  return <>{name}</>;
}

export default function Frontmatter({ post }: { post: BlogPostType }) {
  const authors = post.author.split(",").map((a) => a.trim());

  return (
    <div className="frontmatter">
      <a href={post.sourceURL} className="source">
        <ExternalLinkIcon />
        View source on GitHub
      </a>

      <h1 className="h1">
        <a href={post.link} className="h1link">
          {post.title}
        </a>
      </h1>

      <span className="authors">
        {authors.map((name, i) => (
          <span key={name}>
            <AuthorLink name={name} />
            {i < authors.length - 1 && ", "}
          </span>
        ))}
      </span>

      <time dateTime={post.pubDate} className="timestamp">
        {formatDate(post.pubDate)}
      </time>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
