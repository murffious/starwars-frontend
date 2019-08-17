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

  hanldeClick = (index) => {
    this.setState({ toggleStyle: !this.state.toggleStyle });
    let person = this.props.person;
    // bug is from this line here - using it for two functions - each one needs different thing
    this.props.hanldeLike(!this.state.toggleStyle, person, index);
  };

  componentDidMount() {
    this.checkMemory();
  }
  checkMemory = () => {
    let existingLike = JSON.parse(localStorage.getItem("favorites")) || [];
    let preFill = existingLike.filter(item => {
      return this.props.person.name === item.name;
    });
    this.setState({ toggleStyle: preFill.length > 0 ? true : false });
  };
  render() {
   
    return (
      <div>
        <button
          style={this.state.toggleStyle ? { backgroundColor: "red" } : null}
          onClick={() => this.hanldeClick()}
        >
          <img src={icon} height="10px" alt="like" />
        </button>
      </div>
    );
  }
}

export default withContext(Favorite);
