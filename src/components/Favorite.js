import React from "react";
import icon from "../assets/like.png";

export default class Favorite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggleStyle: false
      };
    }
  
    render() {
      return (
        <div>
         
          <button style={this.state.toggleStyle ? {backgroundColor:"red"}: null} onClick={() => this.setState({ count: this.state.count + 1, toggleStyle:true })}>
            <img src={icon} height="10px" alt="like"/>
          </button>
        </div>
      );
    }
  }