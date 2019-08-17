import React from "react";
import logo from "./Vadar.svg";
import "./App.css";
import StarWars from "./components/StarWars";
import { AppContextProvider } from "./AppContext";
import Count from "./components/Count";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <Count />
            <img src={logo} className="App-logo" alt="logo" />
            <p>Click to have fun with Star Wars people.</p>
            {/* SearchBar */}
            {/* <StarWars  /> */}
            <Switch>
            <Route path={"/"} component={StarWars} />
          </Switch>
          </header>
          
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
