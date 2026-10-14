import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";

// Data
import { projects } from "../data/projects/projects";

function Intro() {
  const technologies = projects.flatMap(
    (project) => project.technologies
  );

  const technologiesList = [...new Set(technologies)];

  const countByTechnology = (id) => technologies.filter(
    (technology) => technology.id === id
  ).length;
  
  return (
    <section className="intro">
      <div className="container">
        <h1 className="intro__title">My Projects</h1>

        <p className="intro__text">
          A collection of my public web development projects.
        </p>

        <p className="intro__meta">
          <FontAwesomeIcon
            icon={faFolder}
            className="intro__meta-icon"
            aria-hidden="true"
          />
          {projects.length}{" "}projects
        </p>

        <hr className="intro__hr" aria-hidden="true" />

        <ul className="list-unstyled intro__list">
          {technologiesList.map(({ id, label }) => (
            <li key={id} className="intro__item">
              <span className="intro__item-label">{label}</span>
              <span className="intro__item-value">
                {countByTechnology(id)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Intro;
