import React from "react";
import icon from "../assets/like.png";
import { withContext } from "../AppContext";

class Favorite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggleStyle: false
      };
    }
  
    hanldeClick = () => {
      
      localStorage.setItem("likes")
    }
    render() {
      return (
        <div>
          <button style={this.state.toggleStyle ? {backgroundColor:"red"}: null} onClick={() => this.setState({ toggleStyle:!this.state.toggleStyle })}>
            <img src={icon} height="10px" alt="like"/>
          </button>
        </div>
      );
    }
  }

  export default withContext(Favorite);