import React, { Component } from "react";

const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      likesCount: JSON.parse(localStorage.getItem("likes")) || {},
    };
  }


  render() {
    return (
      <AppContext.Provider
        value={{
          likes: localStorage.getItem("likes"),
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
