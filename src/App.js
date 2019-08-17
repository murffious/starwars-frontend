import React from "react";
import logo from "./Vadar.svg";
import "./App.css";
import StarWars from "./components/StarWars";
import { AppContextProvider } from "./AppContext";
import Count from "./components/Count";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FavsListContainer from "./components/FavsListContainer";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <header className="App-header">
              <Count />
              <img src={logo} className="App-logo" alt="logo" />
              <p>Click to have fun with Star Wars people.</p>
              {/* SearchBar */}
              {/* <StarWars  /> */}
              <Switch>
                <Route exact path={"/"} component={StarWars} />
                <Route exact path={"/favs"} component={FavsListContainer} />
              </Switch>
            </header>
          </BrowserRouter>
        </DndProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
