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

function Main() {
  useEffect(() => {
    initMDB({ Input, Ripple });
  }, []);

  // States
  const [query, setQuery] = useState("");

  // Processing
  const normalizedQuery = query.trim().toLowerCase();

  const projectsVisible = projects.filter((project) =>
    project.name.toLowerCase().includes(normalizedQuery)
  );

  return (
    <main className="container">
      <Toolbar>
        <SearchBar query={query} onQueryChange={setQuery} />
        
        <ProjectSort />
        <TechnologyFilter />
      </Toolbar>
      
      <ProjectGrid projects={projectsVisible} />
    </main>
  );
}

export default Main;
