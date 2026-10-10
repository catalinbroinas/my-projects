
const sortOptions = [
  { value: "default", label: "Default order" },
  { value: "newest-first", label: "Newest first" },
  { value: "oldest-first", label: "Oldest first" }
];

function ProjectSort({ value, onChange }) {
  return (
    <div className="input-group sort">
      <select
       className="form-select sort__select"
       aria-label="Sort projects"
       value={value}
       onChange={(e) => onChange(e.target.value)}
      >
        {sortOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProjectSort;
