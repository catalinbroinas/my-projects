// React
import { useState } from "react";

// Components
import Toolbar from "../components/toolbar/Toolbar";
import ProjectGrid from "../components/projects/ProjectGrid";
import SearchBar from "../components/toolbar/SearchBar";
import ProjectSort from "../components/toolbar/ProjectSort";
import TechnologyFilter from "../components/toolbar/TechnologyFilter";
import YearFilter from "../components/toolbar/YearFilter";

// Data
import { projects } from "../data/projects/projects";
import {
  projectSortOptions,
  technologyFilterOptions
} from "../data/toolbar/selectOptions";

// Utilities
import { sortProjects } from "../../js/utils/sort";
import { getAvailableYears } from "../../js/utils/years";

function Main() {
  // Data
  const years = getAvailableYears(projects);
  const yearFilterOptions = [
    { value: 'all', label: 'All years' },
    ...years.map((year) => ({ value: year, label: year })),
  ];

  // States
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState(projectSortOptions[0].value);
  const [technologyFilter, setTechnologyFilter] = useState(
    technologyFilterOptions[0].value
  );
  const [yearFilter, setYearFilter] = useState(yearFilterOptions[0].value);

  // Processing
  const normalizedQuery = query.trim().toLowerCase();

  const searchedProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(normalizedQuery)
  );

  const technologyFilteredProjects = 
    technologyFilter === technologyFilterOptions[0].value
      ? searchedProjects
      : searchedProjects.filter((project) =>
        project.technologies.some(
          (technology) => technology.id === technologyFilter
        )
  );

  const yearFilteredProjects = 
    yearFilter === yearFilterOptions[0].value
      ? technologyFilteredProjects
      : technologyFilteredProjects.filter((project) =>
        project.period.start.startsWith(String(yearFilter))
  );

  const projectsVisible = sortProjects(yearFilteredProjects, sortOption);

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
            value={technologyFilter}
            onChange={setTechnologyFilter}
          />

          <YearFilter
            options={yearFilterOptions}
            value={yearFilter}
            onChange={setYearFilter}
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
