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
addFav = async (fav)=>{

  let favorites = this.state.favorites.concat([
      { 
          name: `${fav.name}`, 
          birth_year: `${fav.birth_year}`,
          homeworld: `${fav.homeworld}`
      }
  ]);
 
  this.setState({ 
      favorites: favorites
  });
}

removeFav = (index)=>{
  let favorites = this.state.favorites;
  favorites.splice(index, 1);
  
  this.setState({favorites})
}

hanldeLike = (toggle) => {
  if(toggle){
    // this.removeFav()
  }
  this.setState({
    likesCount: toggle? this.state.likesCount+1: this.state.likesCount-1
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
