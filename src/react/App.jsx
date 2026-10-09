import Intro from "./sections/Intro";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="page-container">
      <header>
        <Intro />
      </header>

      <Main />

      <Footer />
    </div>
  );
}

export default App;
