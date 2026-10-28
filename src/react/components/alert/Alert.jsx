import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

function Alert() {
  return (
    <div className="alert alert-info" role="status">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="me-3"
        aria-hidden="true"
      />
      No projects match your search.
    </div>
  );
}

export default Alert;
