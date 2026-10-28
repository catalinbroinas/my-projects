import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";

// React
import { useEffect } from "react";

// MDB
import { Tooltip, initMDB } from "mdb-ui-kit";

// Data
import { projects } from "../data/projects/projects";
import { FEATURED_TECHNOLOGIES } from "../constants/technologies";

function Intro() {
   useEffect(() => {
    initMDB({ Tooltip });
  }, []);
  
  const technologies = projects.flatMap(
    (project) => project.technologies
  );
  
  const countByTechnology = (id) => technologies.filter(
    (technology) => technology.id === id
  ).length;

  const technologiesList = FEATURED_TECHNOLOGIES.map(
    (technology) => ({
      ...technology,
      count: countByTechnology(technology.id)
    })
  ).filter((technology) => technology.count > 0);
  
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
          {projects.length}{" "}
          {projects.length === 1 ? "project" : "projects"}
        </p>

        <hr className="intro__hr" aria-hidden="true" />

        <ul className="list-unstyled intro__list">
          {technologiesList.map(({ id, label, imageUrl, count }) => (
            <li key={id} className="intro__item">
              <img
                src={imageUrl}
                alt={label}
                className="intro__item-icon"
                data-mdb-tooltip-init
                title={label}
              />
              <span className="intro__item-value">{count}</span>
              <span className="intro__item-label">
                {count === 1 ? "project" : "projects"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Intro;
