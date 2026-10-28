// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

// Utilities
import { createRipple } from "../../utils/ripple";

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
        className={`bg-image ${siteLink ? 'hover-overlay ripple' : ''} ratio ratio-16x9`}
        onPointerDown={siteLink ? createRipple : undefined}
      >
        <img
          src={imageUrl}
          alt={`${name} website screenshot`}
          className="card-project__image"
          loading="lazy"
        />

        {siteLink && (
          <a
            href={siteLink}
            aria-label={`View ${name} live site`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="d-block mask card-project__mask"></span>
          </a>
        )}
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
          {technologies.map(({ id, label, imageUrl }) => (
            <li
              key={id}
              className="card-project__badge"
            >
              <img
                src={imageUrl}
                alt={label}
                className="img-fluid"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer card-project__footer">
        <a
          href={codeLink}
          className="btn btn-primary card-project__btn ripple"
          onPointerDown={createRipple}
          target="_blank"
          rel="noopener noreferrer"
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
