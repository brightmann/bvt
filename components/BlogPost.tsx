/** @jsxImportSource react */
import { BlogPost as BlogPostType } from "../utils/types.ts";
import { Layout } from "./Layout.tsx";
import Frontmatter from "./Frontmatter.tsx";
import Backmatter from "./Backmatter.tsx";

interface BlogPostProps {
  post: BlogPostType;
  content: string;
}

export function BlogPostComponent({ post, content }: BlogPostProps) {
  return (
    <Layout post={post}>
      <article className="post">
        <Frontmatter post={post} />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Backmatter post={post} />
      </article>

      <footer className="post-footer">
        © 2022-{new Date().getFullYear()} Val Town
      </footer>

    </Layout>
  );
}