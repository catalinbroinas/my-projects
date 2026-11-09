import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  return (
    <div
      className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gx-sm-5 gx-0 gy-5"
    >
      {projects.map((project, index) => (
        <div key={project.id} className="col">
          <ProjectCard
            project={project}
            loading={index < 3 ? 'eager' : 'lazy'}
            priority={index < 3 ? 'high' : 'auto'}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
