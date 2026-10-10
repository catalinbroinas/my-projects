import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function ProjectCard({ project }) {
  const {
    name,
    imageUrl,
    period,
    status,
    description,
    technologies,
    codeLink,
    siteLink
  } = project;

  const periodEnd = status === "completed"
    ? period.end
    : "present";

  const periodDisplayed = period.start === periodEnd
    ? period.start
    : `${period.start}–${periodEnd}`;

  return (
    <article className="card card-project">
      <div 
        className="bg-image hover-overlay"
        data-mdb-ripple-init
        data-mdb-ripple-color="light"
      >
        <img
          src={imageUrl}
          alt={`${name} website screenshot`}
          className="img-fluid"
        />

        <a
          href={siteLink}
          aria-label={`View ${name} live site`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="d-block mask card-project__mask"></span>
        </a>
      </div>

      <div className="card-header card-project__header">
        <h3 className="card-project__title">
          {name}
        </h3>

        <span className="card-project__year">
          {periodDisplayed}
        </span>
      </div>

      <div className="card-body card-project__body">
        <p className="card-project__text">
          {description}
        </p>

        <ul className="list-unstyled card-project__technologies">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="card-project__badge"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer card-project__footer">
        <a
          href={codeLink}
          className="btn btn-primary card-project__btn"
          target="_blank"
          rel="noopener noreferrer"
          data-mdb-ripple-init
          data-mdb-ripple-color="light"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="me-2"
            aria-hidden="true"
          />
          View Code
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
