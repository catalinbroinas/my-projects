
function TechnologyFilter() {
  return (
    <div className="input-group technology-filter">
      <select
        className="form-select technology-filter__select"
        aria-label="Filter projects by technology"
      >
        <option value="all">All technologies</option>
        <option value="react">React</option>
        <option value="javascript">JavaScript</option>
        <option value="scss">SCSS</option>
        <option value="vite">Vite</option>
        <option value="webpack">Webpack</option>
        <option value="php">PHP</option>
        <option value="sql">SQL</option>
      </select>
    </div>
  );
}

export default TechnologyFilter;
