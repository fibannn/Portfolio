import { background, credentials } from "../data/content.js";

export default function Background() {
  return (
    <section
      className="band shell"
      id="background"
      aria-labelledby="background-heading"
    >
      <h2 className="band-heading" id="background-heading">
        Background
      </h2>

      <div className="background-grid">
        <ul className="timeline">
          {background.map((item) => (
            <li key={item.title}>
              <span className="period numeric">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="note">{item.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="credentials">
          <h3>Certifications and simulations</h3>
          <ul>
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
