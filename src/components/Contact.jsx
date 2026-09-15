import { profile } from "../data/content.js";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="contact shell">
        <h2 className="contact-lead">
          Open to quantitative research, data, and product roles.
        </h2>

        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <p className="contact-rest">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="numeric">
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>{profile.location}</span>
        </p>
      </div>

      <div className="colophon shell">
        <span>
          {profile.first} {profile.last}
        </span>
        <span>Anybody and IBM Plex Sans. Built with React and Vite.</span>
      </div>
    </footer>
  );
}
