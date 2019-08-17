import React from "react";
import logo from "./Vadar.svg";
import "./App.css";
import StarWars from "./components/StarWars";
import { AppContextProvider } from "./AppContext";
import Count from "./components/Count";

function App () {
    return (
      <div className="App">
        <AppContextProvider>
          <header className="App-header">
          <Count/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Click to have fun with Star Wars people.</p>
            {/* SearchBar */}
            <StarWars  />
          </header>
        </AppContextProvider>
      </div>
    );
  }

export default App;
