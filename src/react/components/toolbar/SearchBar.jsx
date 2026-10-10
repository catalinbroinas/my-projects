import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

function SearchBar({ query, onQueryChange }) {
  return (
    <div className="form-outline search-bar" data-mdb-input-init>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`trailing search-bar__icon${
          query && " search-bar__icon--hidden"
        }`}
        aria-hidden="true"
      />

      <input
        type="search"
        id="search-project"
        className="form-control search-bar__field"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />

      <label htmlFor="search-project" className="form-label">
        Search project
      </label>
    </div>
  );
}

export default SearchBar;
