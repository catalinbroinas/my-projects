import worldCupImg from "../../assets/images/projects/worldCup2026.webp";

function ProjectCard() {
  return (
    <article className="card card-project">
      <div className="bg-image hover-overlay">
        <img
          src={worldCupImg}
          alt="World Cup 2026 preview"
          className="img-fluid"
        />
        <a
          href="https://catalinbroinas-world-cup-2026.netlify.app/"
          aria-label="Go to live site"
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
      </div>

      <div className="card-footer card-project__footer">
        <a
          href="https://github.com/catalinbroinas/world-cup-2026"
          className="btn btn-primary card-project__btn">
            View Code
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
