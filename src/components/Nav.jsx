import { useState } from "react";
import { profile } from "../data/content.js";
import useTheme from "../lib/useTheme.js";
import { trackEvent } from "../lib/analytics.js";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#practice", label: "Practice" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const initials = `${profile.first[0]}${profile.last[0]}`;

  return (
    <>
      <nav className="nav">
        <div className="nav-inner shell">
          <a href="#top" className="nav-mark" onClick={() => setOpen(false)}>
            {initials}
          </a>

          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <span className="nav-pill">
              <span>Open to work</span>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => trackEvent("nav_email_click")}
              >
                Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("nav_linkedin_click")}
              >
                LinkedIn
              </a>
            </span>

            <button type="button" className="theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
