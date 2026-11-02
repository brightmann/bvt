const AUTHOR_URLS = {
  "Steve Krouse": "https://stevekrouse.com/",
  "Tom MacWright": "https://macwright.com/",
  "André Terron": "https://www.andreterron.com/",
  "Max McDonnell": "https://maxmcd.com/",
  "JP Posma": "https://janpaulposma.nl/",
  "Charmaine Lee": "https://www.charmaineklee.com/",
  "Wolf Mermelstein": "https://404wolf.com/",
  "Sophie Houser": "https://sophiehouser.com/",
  "Pete Millspaugh": "https://www.petemillspaugh.com/",
} as const;

type AuthorName = keyof typeof AUTHOR_URLS;

export function getAuthorLink(name: string): string | null {
  if (name in AUTHOR_URLS) {
    return AUTHOR_URLS[name as AuthorName];
  }
  return null;
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (_e) {
    return dateString;
  }
}