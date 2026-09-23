import { profile } from "../data/content.js";
import { trackEvent } from "../lib/analytics.js";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="contact shell">
        <h2 className="contact-lead">
          Always open for new roles and collaborations.
        </h2>

        <a className="contact-email" href={`mailto:${profile.email}`}
          onClick={() => trackEvent("contact_email_click")}
        >
          {profile.email}
        </a>

        <p className="contact-rest">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="numeric">
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("contact_linkedin_click")}
          >
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>{profile.location}</span>
        </p>
      </div>

      <div className="colophon shell">
        <span>
          {profile.first} {profile.last}
        </span>
        <span className="colophon-links">
          <a href={`${import.meta.env.BASE_URL}privacy/`}>Privacy Policy</a>
          <a href={`${import.meta.env.BASE_URL}terms/`}>Terms of Service</a>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
          >
            Cookie settings
          </button>
        </span>
      </div>
    </footer>
  );
}
