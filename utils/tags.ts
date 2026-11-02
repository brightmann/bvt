// The controlled vocabulary of tags a post may be assigned in its frontmatter.
// This is the single source of truth — a post's `tags` frontmatter must only
// reference slugs listed here. Unknown tags are dropped (with a warning) when
// posts are loaded, so a typo can never leak a bogus filter onto the homepage.

export const TAGS = [
  { slug: "essay", label: "Essay" },
  { slug: "product", label: "Product" },
  { slug: "engineering", label: "Engineering" },
  { slug: "newsletter", label: "Newsletter" },
  { slug: "changelog", label: "Changelog" },
  { slug: "company", label: "Company" },
  { slug: "customers", label: "Customers" },
] as const;

export type Tag = (typeof TAGS)[number]["slug"];

const TAG_SLUGS = new Set<string>(TAGS.map((t) => t.slug));
const LABEL_BY_SLUG = new Map<string, string>(
  TAGS.map((t) => [t.slug, t.label]),
);

export function isValidTag(slug: string): slug is Tag {
  return TAG_SLUGS.has(slug);
}

export function tagLabel(slug: Tag): string {
  return LABEL_BY_SLUG.get(slug) ?? slug;
}

/**
 * Normalize + validate raw frontmatter `tags` into known Tag slugs.
 * Accepts a string ("essay") or array (["essay", "company"]), trims/lowercases,
 * de-dupes, and drops anything not in the controlled vocabulary (warning on it).
 */
export function normalizeTags(raw: unknown, postPath?: string): Tag[] {
  if (raw == null) return [];
  const values = Array.isArray(raw) ? raw : [raw];
  const seen = new Set<Tag>();

  for (const value of values) {
    if (typeof value !== "string") continue;
    const slug = value.trim().toLowerCase();
    if (!slug) continue;
    if (isValidTag(slug)) {
      seen.add(slug);
    } else {
      console.warn(
        `[tags] Unknown tag "${slug}"${
          postPath ? ` in ${postPath}` : ""
        } — ignoring. Valid tags: ${[...TAG_SLUGS].join(", ")}`,
      );
    }
  }

  return [...seen];
}