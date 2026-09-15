import { useState } from "react";
import { projects } from "../data/content.js";

function Entry({ project, isOpen, onToggle }) {
  const panelId = `panel-${project.id}`;

  return (
    <li className={`entry${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="entry-trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>
          <span className="entry-title">{project.title}</span>
          <span className="entry-scope">{project.scope}</span>
        </span>
        <span className="entry-headline numeric">{project.headline}</span>
      </button>

      <div className="entry-panel" id={panelId}>
        <div>
          <div className="entry-body">
            <div>
              <p>{project.summary}</p>
              <p>{project.detail}</p>
              <ul className="entry-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <dl className="entry-stats numeric">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Work() {
  const [openId, setOpenId] = useState(projects[0].id);

  return (
    <section className="band shell" id="work" aria-labelledby="work-heading">
      <h2 className="band-heading" id="work-heading">
        Work
      </h2>
      <p className="band-intro">
        Open any entry for what it involved and what came out of it.
      </p>

      <ul className="blotter">
        {projects.map((project) => (
          <Entry
            key={project.id}
            project={project}
            isOpen={openId === project.id}
            onToggle={() =>
              setOpenId((current) => (current === project.id ? null : project.id))
            }
          />
        ))}
      </ul>
    </section>
  );
}
