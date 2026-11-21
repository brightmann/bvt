import { posts } from "./posts.ts";

// The homepage features the 5 newest posts; the archive lists the rest,
// ARCHIVE_PAGE_SIZE posts per page. Page 1 also renders at /archive.
export const ARCHIVE_PAGE_SIZE = 5;
export const archivePosts = posts.slice(5);
export const archiveTotalPages = Math.max(
  1,
  Math.ceil(archivePosts.length / ARCHIVE_PAGE_SIZE),
);

export function archivePagePosts(page: number) {
  const start = (page - 1) * ARCHIVE_PAGE_SIZE;
  return archivePosts.slice(start, start + ARCHIVE_PAGE_SIZE);
}

export function archivePageHref(page: number) {
  return page <= 1 ? "/archive" : `/archive/${page}`;
}
