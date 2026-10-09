
function ProjectSort() {
  return (
    <div className="input-group sort">
      <select
       className="form-select sort__select"
       aria-label="Sort projects"
      >
        <option value="default">Default order</option>
        <option value="newest-first">Newest first</option>
        <option value="oldest-first">Oldest first</option>
      </select>
    </div>
  );
}

export default ProjectSort;
