import React, { Component } from "react";

const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      likesCount: 0,
    };
  }

  componentDidMount(){
  //   this.setState({
  //     likesCount:JSON.parse(localStorage.getItem("likes")) 
  // })
}

  render() {
    return (
      <AppContext.Provider
        value={{
          likesCount: this.state.likesCount,
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
