/** @jsxImportSource react */
import { BlogPost } from "../utils/types.ts";
import { archivePageHref } from "../utils/archive.ts";
import { formatDate } from "./util.tsx";

interface ArchiveSectionProps {
  posts: BlogPost[];
  page: number;
  totalPages: number;
}

export function ArchiveSection(
  { posts, page, totalPages }: ArchiveSectionProps,
) {
  const prevHref = page > 1 ? archivePageHref(page - 1) : null;
  const nextHref = page < totalPages ? archivePageHref(page + 1) : null;

  return (
    <section className="more">
      <h2>
        <img
          src="/images/b2edab23-a365-44aa-319c-6082ac54cc00.svg"
          alt="Archive"
          width="120"
        />
        <span className="sr-only">Archive</span>
      </h2>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={post.link}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>
                {post.author} |{" "}
                <time dateTime={post.pubDate}>
                  {formatDate(post.pubDate)}
                </time>
              </p>
            </a>
          </li>
        ))}
      </ul>

      <nav className="pagination" aria-label="Archive pages">
        {prevHref
          ? <a href={prevHref} rel="prev">&larr; Newer posts</a>
          : <span className="disabled" aria-disabled="true">&larr; Newer posts</span>}
        <span className="page-status">Page {page} of {totalPages}</span>
        {nextHref
          ? <a href={nextHref} rel="next">Older posts &rarr;</a>
          : <span className="disabled" aria-disabled="true">Older posts &rarr;</span>}
      </nav>
    </section>
  );
}
