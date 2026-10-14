
function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <h1 className="intro__title">My Projects</h1>

        <p className="intro__text">
          A collection of my public web development projects.
        </p>

        <ul className="list-unstyled intro__list">
           <li className="intro__item">
            <span className="intro__item-label">SCSS</span>
            <span className="intro__item-value">4</span>
          </li>
          <li className="intro__item">
            <span className="intro__item-label">JavaScript</span>
            <span className="intro__item-value">1</span>
          </li>
          <li className="intro__item">
            <span className="intro__item-label">React</span>
            <span className="intro__item-value">2</span>
          </li>
          <li className="intro__item">
            <span className="intro__item-label">MDBootstrap</span>
            <span className="intro__item-value">4</span>
          </li>
          <li className="intro__item">
            <span className="intro__item-label">Vite</span>
            <span className="intro__item-value">3</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Intro;
