
function ProjectSort({ options, value, onChange }) {
  return (
    <div className="input-group sort">
      <select
       className="form-select sort__select"
       aria-label="Sort projects"
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

export default ProjectSort;
