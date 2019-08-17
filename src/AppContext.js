import React, { Component } from "react";

const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      people: JSON.parse(localStorage.getItem("people")) || {},
    };
  }

  componentDidMount() {}

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
