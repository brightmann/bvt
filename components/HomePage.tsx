/** @jsxImportSource react */
import { BlogPost } from "../utils/types.ts";
import { Layout } from "./Layout.tsx";
import { formatDate } from "./util.tsx";

const FALLBACK_THUMBNAIL =
  "https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/06edc272-e9da-42a6-709a-4eea5ccbf400/public";

interface HomePageProps {
  posts: BlogPost[];
}

export function HomePage({ posts }: HomePageProps) {
  const featured = posts.slice(0, 5);
  const archive = posts.slice(5);

  return (
    <Layout>
      <main>
        <section className="recent">
          <h2>
            <img
              src="https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/8052c2d4-f7c0-4ae6-0c6b-36e1d98f0b00/public"
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

        <section className="more">
          <h2>
            <img
              src="https://imagedelivery.net/iHX6Ovru0O7AjmyT5yZRoA/b2edab23-a365-44aa-319c-6082ac54cc00/public"
              alt="Archive"
              width="120"
            />
            <span className="sr-only">Archive</span>
          </h2>

          <ul>
            {archive.map((post) => (
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
        </section>
      </main>

      <footer className="post-footer">
        <p>© 2022-{new Date().getFullYear()} Val Town</p>
      </footer>
    </Layout>
  );
}
