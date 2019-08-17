import React from 'react';
import logo from './Vadar.svg';
import './App.css';
import StarWars from './components/StarWars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click to have fun with Star Wars people.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
