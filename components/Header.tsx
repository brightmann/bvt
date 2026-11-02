/** @jsxImportSource react */
import Lockup from "./Lockup.tsx";
import {
  Bluesky,
  Discord,
  Email,
  GitHub,
  LinkedIn,
  OSS,
  RSS,
  Twitter,
  YouTube,
} from "./icons.tsx";

const ELSEWHERE = [
  { text: "RSS", Icon: RSS, url: "/rss.xml" },
  { text: "Email", Icon: Email, url: "mailto:hi@val.town" },
  { text: "Twitter", Icon: Twitter, url: "https://x.com/ValDotTown" },
  {
    text: "Bluesky",
    Icon: Bluesky,
    url: "https://bsky.app/profile/val.town",
  },
  { text: "Discord", Icon: Discord, url: "https://discord.val.town" },
  {
    text: "YouTube",
    Icon: YouTube,
    url: "https://www.youtube.com/@valDotTown",
  },
  { text: "GitHub", Icon: GitHub, url: "https://github.com/val-town" },
  {
    text: "LinkedIn",
    Icon: LinkedIn,
    url: "https://www.linkedin.com/company/val-town/",
  },
  {
    text: "OSS Pledge",
    Icon: OSS,
    url: "https://opensourcepledge.com/members/val-town/",
  },
];

export default function Header() {
  return (
    <header className="header">
      <Lockup />

      <div>
        <button popovertarget="elsewhere" className="elsewhere">
          <span className="label">Elsewhere</span>
          <Globe />
          <span className="sr-only">Elsewhere</span>
        </button>
        <div
          id="elsewhere"
          popover="auto"
          className="popover"
        >
          <nav>
            <ul className="socials">
              {ELSEWHERE.map(({ text, Icon, url }) => (
                <li key={url}>
                  <a href={url} className="link">
                    {text}
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Globe() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}