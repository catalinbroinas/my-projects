// React
import { useEffect } from "react";

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

  return (
    <main className="container">
      <Toolbar>
        <SearchBar />
        <ProjectSort />
        <TechnologyFilter />
      </Toolbar>
      
      <ProjectGrid projects={projects} />
    </main>
  );
}

export default Main;
