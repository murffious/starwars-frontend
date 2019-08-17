import React from "react";
import logo from "./Vadar.svg";
import "./App.css";
import StarWars from "./components/StarWars";
import { AppContextProvider } from "./AppContext";
import { withContext } from "./AppContext";
import Count from "./components/Count";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.likes,
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
          <Count/>
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

export default withContext(App);
