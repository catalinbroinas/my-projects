// React
import { useEffect } from "react";

// MDB
import { Input, initMDB } from "mdb-ui-kit";

// Components
import Toolbar from "../components/toolbar/Toolbar";
import ProjectGrid from "../components/projects/ProjectGrid";
import SearchBar from "../components/toolbar/SearchBar";
import ProjectSort from "../components/toolbar/ProjectSort";

function Main() {
  useEffect(() => {
    initMDB({ Input })
  }, []);

  return (
    <main className="container">
      <Toolbar>
        <SearchBar />
        <ProjectSort />
      </Toolbar>
      
      <ProjectGrid />
    </main>
  );
}

export default Main;
