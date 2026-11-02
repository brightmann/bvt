import { GITHUB_URL } from "./constants.ts";

// Keep renamed URLs working, including their legacy /blog/ variants.
export const SLUG_REMAP: Record<string, string> = {
  "post-mortem-degraded-host-network": "post-mortem-host-connection-pool",
  "post-mortem-exhausted-host-connection-pool": "post-mortem-host-connection-pool",
  "public-key-auth-val-town-users-can-be-your-users": "public-key-auth-for-your-users",
  "an-introduction-to-openai-fine-tuning": "intro-to-openai-fine-tuning",
};

export function redirectsFile(): string {
  const lines = ["/blog / 301", "/blog/ / 301"];
  for (const [oldSlug, newSlug] of Object.entries(SLUG_REMAP)) {
    for (const prefix of ["/", "/blog/"]) {
      for (const suffix of ["", "/"]) lines.push(`${prefix}${oldSlug}${suffix} /${newSlug} 301`);
    }
  }
  lines.push("/blog/:slug/ /:slug 301", "/blog/* /:splat 301");
  lines.push(`/source ${GITHUB_URL} 302`);
  return lines.join("\n") + "\n";
}
