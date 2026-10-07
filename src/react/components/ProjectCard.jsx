import { useEffect } from "react";

import { Ripple, initMDB } from "mdb-ui-kit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

import worldCupImg from "../../assets/images/projects/worldCup2026.webp";

function ProjectCard() {
  useEffect(() => {
    initMDB({ Ripple });
  }, []);

  return (
    <article className="card card-project">
      <div 
        className="bg-image hover-overlay"
        data-mdb-ripple-init
        data-mdb-ripple-color="light"
      >
        <img
          src={worldCupImg}
          alt="World Cup 2026 preview"
          className="img-fluid"
        />

        <a
          href="https://catalinbroinas-world-cup-2026.netlify.app/"
          aria-label="Go to live site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="d-block mask card-project__mask"></span>
        </a>
      </div>

      <div className="card-header card-project__header">
        <h3 className="card-project__title">World Cup 2026</h3>

        <span className="card-project__year">2026</span>
      </div>

      <div className="card-body card-project__body">
        <p className="card-project__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Suscipit, repellat.
        </p>

        <ul className="list-unstyled card-project__technologies">
          <li className="card-project__badge">React</li>
          <li className="card-project__badge">SCSS</li>
          <li className="card-project__badge">MDB 5</li>
          <li className="card-project__badge">Vite</li>
        </ul>
      </div>

      <div className="card-footer card-project__footer">
        <a
          href="https://github.com/catalinbroinas/world-cup-2026"
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
