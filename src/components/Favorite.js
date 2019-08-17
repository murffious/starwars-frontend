import React from "react";
import icon from "../assets/like.png";

export default class Favorite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        next: this.props.next
      };
    }
  
    render() {
      return (
        <div>
         
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            <img src={icon} height="10px" alt="like"/>{this.state.count}
          </button>
        </div>
      );
    }
  }