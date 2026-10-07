import Intro from "./sections/Intro";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="page-container">
      <header>
        <Intro />
      </header>

      <main className="container">
        <ProjectGrid />
      </main>

      <Footer />
    </div>
  );
}

export default App;
