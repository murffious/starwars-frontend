import React, { Component } from "react";
import { URL_PEOPLE } from "./components/helpers/constants";

const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      people: JSON.parse(localStorage.getItem("people")) || {},
    };
  }

  componentDidMount() {
    fetch(`${URL_PEOPLE}`)
    .then(data => data.json())
    .then(data => {
      return this.setState({
        count: data.count,
        next: data.next,
        previous: data.previous
      });
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          people: localStorage.getItem("people"),
          ...this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const withContext = Component => {
  return props => {
    return (
      <AppContext.Consumer>
        {globalState => {
          return <Component {...globalState} {...props} />;
        }}
      </AppContext.Consumer>
    );
  };
};
