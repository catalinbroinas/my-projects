import Intro from "./sections/Intro";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <div className="page-container">
      <header>
        <Intro />
      </header>

      <main className="container">
        <ProjectGrid />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
