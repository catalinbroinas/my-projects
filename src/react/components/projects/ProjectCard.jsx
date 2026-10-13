import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function ProjectCard({ project }) {
  const {
    name,
    imageUrl,
    period,
    description,
    technologies,
    codeLink,
    siteLink
  } = project;

  const periodStart = period.start.slice(0, 4);
  const periodEnd = period.end
    ? period.end.slice(0, 4)
    : "Present";
  
  const periodDisplayed = periodStart === periodEnd
    ? periodStart
    : `${periodStart}–${periodEnd}`;

  return (
    <article className="card card-project">
      <div 
        className="bg-image hover-overlay ratio ratio-16x9"
        data-mdb-ripple-init
        data-mdb-ripple-color="light"
      >
        <img
          src={imageUrl}
          alt={`${name} website screenshot`}
          className="card-project__image"
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
          {technologies.map(({ id, label}) => (
            <li
              key={id}
              className="card-project__badge"
            >
              {label}
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
