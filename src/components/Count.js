import React from "react";
import { withContext } from "../AppContext";

const Count = (props) => {
  console.log(props)
        return (
            <button style={{position: "fixed", top:"1%", right:"1%"}}>Favs:{props.likesCount}</button>
        );
 
}

export default withContext(Count);