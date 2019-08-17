import React, { Component } from "react";

const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      likesCount: 0,
      favorites: []
    };
  }

  componentDidMount(){
  //   this.setState({
  //     likesCount:JSON.parse(localStorage.getItem("likes")) 
  // })
}

routeToFaves = () => {

}
hanldeLike = (toggle) => {
  let updateFavs = [...this.favorites];
  
  this.setState({
    likesCount: toggle? this.state.likesCount+1: this.state.likesCount-1,
    favorite: updateFavs
  })
}
  render() {
    return (
      <AppContext.Provider
        value={{
          likesCount: this.state.likesCount,
          hanldeLike: this.hanldeLike,
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
