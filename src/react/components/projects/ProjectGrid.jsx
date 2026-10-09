import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  return (
    <div
      className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gx-sm-5 gx-0 gy-5"
    >
      <div className="col">
        <ProjectCard />
      </div>

      <div className="col">
        <ProjectCard />
      </div>

      <div className="col">
        <ProjectCard />
      </div>

      <div className="col">
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectGrid;
