import React from "react";
import { withContext } from "../AppContext";

const Count = (props) => {
  
        return (
            <p style={{position: "fixed", top:"1%", right:"1%"}}>Fav count:{props.likesCount}</p>
        );
 
}

export default withContext(Count);