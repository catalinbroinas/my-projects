import Intro from "./sections/Intro";
import Toolbar from "./components/toolbar/Toolbar";
import ProjectGrid from "./components/projects/ProjectGrid";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="page-container">
      <header>
        <Intro />
      </header>

      <main className="container">
        <Toolbar>
          {/* Toolbar controls */}
        </Toolbar>
        
        <ProjectGrid />
      </main>

      <Footer />
    </div>
  );
}

export default App;
