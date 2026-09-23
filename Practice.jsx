import { practice } from "../data/content.js";

export default function Practice() {
  return (
    <section
      className="band shell"
      id="practice"
      aria-labelledby="practice-heading"
    >
      <h2 className="band-heading" id="practice-heading">
        What I work on
      </h2>
      <p className="band-intro">
        Three tracks that keep feeding each other: the research needs the data
        work to be trustworthy, and the design work is where the results have to
        become legible to someone else.
      </p>

      <ul className="practice">
        {practice.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <ul>
              {item.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
