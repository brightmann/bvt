/** @jsxImportSource react */
import { BlogPost } from "../utils/types.ts";
import {
  ARCHIVE_PAGE_SIZE,
  archiveTotalPages,
} from "../utils/archive.ts";
import { Layout } from "./Layout.tsx";
import { ArchiveSection } from "./ArchiveSection.tsx";
import { formatDate } from "./util.tsx";

const FALLBACK_THUMBNAIL =
  "/images/06edc272-e9da-42a6-709a-4eea5ccbf400.webp";

interface HomePageProps {
  posts: BlogPost[];
}

export function HomePage({ posts }: HomePageProps) {
  const featured = posts.slice(0, 5);
  const archive = posts.slice(5, 5 + ARCHIVE_PAGE_SIZE);

  return (
    <Layout>
      <main>
        <section className="recent">
          <h2>
            <img
              src="/images/8052c2d4-f7c0-4ae6-0c6b-36e1d98f0b00.svg"
              alt="Recent"
              width="100"
            />
            <span className="sr-only">Recent</span>
          </h2>
          <ul>
            {featured.map((post) => (
              <li key={post.slug} className="card">
                <a href={post.link} key={post.slug}>
                  <img
                    src={post.thumbnail ?? FALLBACK_THUMBNAIL}
                    alt=""
                    aria-hidden="true"
                    className="thumbnail"
                  />
                  <div className="metadata">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div>
                      <span>{post.author}</span>
                      <span>{formatDate(post.pubDate)}</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <ArchiveSection
          posts={archive}
          page={1}
          totalPages={archiveTotalPages}
        />
      </main>

      <footer className="post-footer">
        <p>© 2022-{new Date().getFullYear()} Val Town</p>
      </footer>
    </Layout>
  );
}
