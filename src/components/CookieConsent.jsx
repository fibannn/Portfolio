import { useEffect, useState } from "react";
import { enableAnalytics } from "../lib/analytics.js";

const KEY = "cookie-consent";

function read() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = read();
    if (saved === "accepted") enableAnalytics();
    if (!saved) setVisible(true);
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* choice applies for this visit only */
    }
    if (value === "accepted") enableAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="consent" role="dialog" aria-labelledby="consent-title">
      <h2 id="consent-title">Cookies</h2>
      <p>
        This site uses optional analytics cookies to count visits and see which
        links get used. Nothing loads unless you accept. Details are in the{" "}
        <a href={`${import.meta.env.BASE_URL}privacy/`}>Privacy Policy</a>.
      </p>
      <div className="consent-actions">
        <button type="button" onClick={() => choose("rejected")}>
          Reject
        </button>
        <button type="button" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
