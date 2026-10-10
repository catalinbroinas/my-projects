
function TechnologyFilter({ options, value, onChange }) {
  return (
    <div className="input-group technology-filter">
      <select
        className="form-select technology-filter__select"
        aria-label="Filter projects by technology"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(({ value, label}) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TechnologyFilter;
