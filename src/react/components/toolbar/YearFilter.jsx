
function YearFilter() {
  return (
    <div className="input-group year-filter">
      <select
        className="form-select year-filter__select"
        aria-label="Filter projects by year"
      >
        <option value="all">All years</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default YearFilter;
