import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

function SearchBar() {
  return (
    <div className="form-outline search-bar" data-mdb-input-init>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="trailing search-bar__icon"
        aria-hidden="true"
      />

      <input
        type="search"
        id="search-project"
        className="form-control search-bar__field"
      />

      <label htmlFor="search-project" className="form-label">
        Search project
      </label>
    </div>
  );
}

export default SearchBar;
