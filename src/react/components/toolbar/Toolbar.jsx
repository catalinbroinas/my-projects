// React
import { useEffect } from "react";

// MDB
import { Input, initMDB } from "mdb-ui-kit";

function Toolbar({ children }) {
  useEffect(() => {
    initMDB({ Input });
  }, []);

  return (
    <div className="toolbar">
      {children}
    </div>
  );
}

export default Toolbar;
