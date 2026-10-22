// React
import { useEffect, useState } from "react";

// MDB
import { Input, Ripple, initMDB } from "mdb-ui-kit";

// Components
import Toolbar from "../components/toolbar/Toolbar";
import ProjectGrid from "../components/projects/ProjectGrid";
import SearchBar from "../components/toolbar/SearchBar";
import ProjectSort from "../components/toolbar/ProjectSort";
import TechnologyFilter from "../components/toolbar/TechnologyFilter";

// Data
import { projects } from "../data/projects/projects";
import {
  projectSortOptions,
  technologyFilterOptions
} from "../data/toolbar/selectOptions";

// Utilities
import { sortProjects } from "../../js/utils/sort";

function Main() {
  useEffect(() => {
    initMDB({ Input, Ripple });
  }, []);

  // States
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState(projectSortOptions[0].value);
  const [filterOption, setFilterOption] = useState(technologyFilterOptions[0].value);

  // Processing
  const normalizedQuery = query.trim().toLowerCase();

  const searchedProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(normalizedQuery)
  );

  const filteredProjects = filterOption === 'all'
    ? searchedProjects
    : searchedProjects.filter((project) =>
      project.technologies.some(
        (technology) => technology.id === filterOption
      )
  );

  const projectsVisible = sortProjects(filteredProjects, sortOption);

  return (
    <main className="container">
      <Toolbar>
        <div className="toolbar__meta">
          Showing{" "}
          <strong className="toolbar__meta-value">
            {projectsVisible.length}
          </strong>{" "}
          {projectsVisible.length === 1 ? "project" : "projects"}
        </div>

        <div className="toolbar__controls">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
          />

          <TechnologyFilter
            options={technologyFilterOptions}
            value={filterOption}
            onChange={setFilterOption}
          />

          <ProjectSort
            options={projectSortOptions}
            value={sortOption}
            onChange={setSortOption}
          />
        </div>
      </Toolbar>
      
      {projectsVisible.length > 0 ? (
        <section className="projects">
          <h2 className="visually-hidden">Projects</h2>
          
          <ProjectGrid projects={projectsVisible} />
        </section>
      ) : (
        <div className="alert alert-info" role="status">
          No projects found.
        </div>
      )}
    </main>
  );
}

export default Main;
