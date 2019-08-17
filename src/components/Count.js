import React from "react";
import { withContext } from "../AppContext";
import { Link } from "react-router-dom";

const Count = props => {
  return (
    <Link to={"/favs"}>
      <button style={{ position: "fixed", top: "1%", right: "1%" }}>
        Favs:{props.likesCount}
      </button>
    </Link>
  );
};

export default withContext(Count);
