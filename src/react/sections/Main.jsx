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
import { projects } from "../data/projects";

// Utilities
import { sortProjects } from "../../js/utils/sort";

function Main() {
  useEffect(() => {
    initMDB({ Input, Ripple });
  }, []);

  // States
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  // Processing
  const normalizedQuery = query.trim().toLowerCase();

  const searchedProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(normalizedQuery)
  );

  const projectsVisible = sortProjects(searchedProjects, sortOption);

  return (
    <main className="container">
      <Toolbar>
        <SearchBar query={query} onQueryChange={setQuery} />
        
        <ProjectSort value={sortOption} onChange={setSortOption} />

        <TechnologyFilter />
      </Toolbar>
      
      <ProjectGrid projects={projectsVisible} />
    </main>
  );
}

export default Main;
