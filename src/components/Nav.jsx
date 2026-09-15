import { useState } from "react";
import { profile } from "../data/content.js";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#practice", label: "Practice" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
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

          <span className="nav-pill">
            Open to work
          </span>

          
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
