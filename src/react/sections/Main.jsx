import Toolbar from "../components/toolbar/Toolbar";
import ProjectGrid from "../components/projects/ProjectGrid";

function Main() {
  return (
    <main className="container">
      <Toolbar>
        {/* Toolbar controls */}
      </Toolbar>
      
      <ProjectGrid />
    </main>
  );
}

export default Main;
