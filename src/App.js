import React from "react";
import logo from "./Vadar.svg";
import "./App.css";
import StarWars from "./components/StarWars";
import Button from "./components/Button";
import { URL_PEOPLE } from "./components/helpers/constants";
import { AppContextProvider } from "./AppContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      next: "",
      previous: ""
    };
  }

  componentDidMount() {
    
  }

  handleClick = page => {

    this.setState({
      next: page
    })
  };
  render() {
    const { count, next, previous } = this.state;
    return (
      <div className="App">
        <AppContextProvider>
          <header className="App-header">
            <p style={{position: "fixed", top:"1%", right:"1%"}}>Fav count:</p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Click to have fun with Star Wars people.</p>
            {/* SearchBar */}
            <StarWars count={count} next={next} previous={previous} handleClick={this.handleClick} />
          </header>
        </AppContextProvider>
      </div>
    );
  }
}

export default App;
