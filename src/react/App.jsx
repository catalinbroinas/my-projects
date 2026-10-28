// React
import { useEffect } from "react";

// MDB
import { Input, initMDB } from "mdb-ui-kit";

// Components
import Intro from "./sections/Intro";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

function App() {
  useEffect(() => {
    initMDB({ Input });
  }, []);

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
