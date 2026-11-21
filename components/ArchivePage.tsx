/** @jsxImportSource react */
import { BlogPost } from "../utils/types.ts";
import { Layout } from "./Layout.tsx";
import { ArchiveSection } from "./ArchiveSection.tsx";

interface ArchivePageProps {
  posts: BlogPost[];
  page: number;
  totalPages: number;
}

export function ArchivePage({ posts, page, totalPages }: ArchivePageProps) {
  return (
    <Layout>
      <main>
        <ArchiveSection posts={posts} page={page} totalPages={totalPages} />
      </main>

      <footer className="post-footer">
        <p>© 2022-{new Date().getFullYear()} Val Town</p>
      </footer>
    </Layout>
  );
}
