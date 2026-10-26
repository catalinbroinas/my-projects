
function YearFilter({ options, value, onChange }) {
  return (
    <div className="input-group year-filter">
      <select
        className="form-select year-filter__select"
        aria-label="Filter projects by year"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YearFilter;
