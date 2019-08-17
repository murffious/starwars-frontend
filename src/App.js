import React from 'react';
import logo from './Vadar.svg';
import './App.css';
import StarWars from './components/StarWars';
import Button from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      next: "",
      previous: ""
    };
  }

  componentDidMount(){
    
  }
render(){

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click to have fun with Star Wars people.
        </p>
        {/* SearchBar */}
        <StarWars/>
        {/* // paginate */}

      </header>
    </div>
  );
}
}

export default App;
