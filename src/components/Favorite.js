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
      this.setState({ toggleStyle:!this.state.toggleStyle })
 console.log(this.props)
      this.props.hanldeLike(!this.state.toggleStyle)
      
    }
    render() {
      return (
        <div>
          <button style={this.state.toggleStyle ? {backgroundColor:"red"}: null} onClick={() => this.hanldeClick()}>
            <img src={icon} height="10px" alt="like"/>
          </button>
        </div>
      );
    }
  }

  export default withContext(Favorite);