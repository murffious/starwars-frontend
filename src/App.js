import React from "react";
import logo from "./Vadar.svg";
import "./App.css";
import StarWars from "./components/StarWars";
import Button from "./components/Button";
import { URL_PEOPLE } from "./components/helpers/constants";

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
    fetch(`${URL_PEOPLE}`)
      .then(data => data.json())
      .then(data => {
       return  this.setState({
          count: data.count,
          next: data.next,
          previous: data.previous
        });
      });
  }

  handleClick = () =>{

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Click to have fun with Star Wars people.</p>
          {/* SearchBar */}
          <StarWars next={ <button name="next" onClick={() => this.handleClick}>Next</button>} previous={<button name="previous" onClick={() => this.handleClick}>Previous</button>}/>
          {/* // paginate */}
          
         

        </header>
      </div>
    );
  }
}

export default App;
