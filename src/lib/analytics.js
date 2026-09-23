const GA_ID = import.meta.env.VITE_GA_ID;
let loaded = false;

/** Loads GA4 only after the visitor accepts analytics cookies. */
export function enableAnalytics() {
  if (loaded || !GA_ID) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

/** Conversion events (contact clicks). No-op unless analytics is enabled. */
export function trackEvent(name, params = {}) {
  if (loaded && window.gtag) window.gtag("event", name, params);
}
