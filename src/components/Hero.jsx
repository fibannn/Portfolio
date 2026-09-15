import { useMemo } from "react";
import { profile } from "../data/content.js";

/* A fixed series — not market data, just a stable shape to smooth. */
const SERIES = [
  62, 58, 64, 51, 56, 44, 49, 38, 45, 33, 39, 28, 34, 24, 30, 19, 25, 15, 21,
  12, 16,
];

/* Exponential moving average, the same idea the strategy work runs on:
   a smaller alpha follows the series more slowly. */
function ema(values, alpha) {
  let prev = values[0];
  return values.map((v, i) => {
    if (i === 0) return prev;
    prev = alpha * v + (1 - alpha) * prev;
    return prev;
  });
}

function toPath(values) {
  const step = 400 / (values.length - 1);
  return values
    .map((y, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
}

export default function Hero() {
  const paths = useMemo(
    () => [0.18, 0.35, 0.6, 1].map((a) => toPath(ema(SERIES, a))),
    []
  );

  return (
    <header className="hero shell" id="top">
      <span className="hero-badge">
        <span className="dot" aria-hidden="true" />
        Open to quant research, data, and product roles
      </span>

      <h1 className="hero-name">
        <span className="wide">{profile.first}</span>
        <span className="hero-line">
          <span className="narrow">{profile.last}</span>
          <svg
            className="hero-mark"
            viewBox="0 0 400 80"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            {paths.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </svg>
        </span>
      </h1>

      <p className="hero-intro">{profile.intro}</p>

      <p className="hero-meta">
        <span>{profile.location}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>

      <p className="scroll-cue">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4v16M6 14l6 6 6-6" />
        </svg>
        Scroll for the work
      </p>
    </header>
  );
}
