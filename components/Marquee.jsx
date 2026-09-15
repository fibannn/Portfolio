const ITEMS = [
  "Python",
  "Numba",
  "Optuna",
  "Pandas",
  "NumPy",
  "SQL",
  "Figma",
  "Git",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <span className="sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
