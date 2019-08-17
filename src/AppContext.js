import React, { Component } from "react";

const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      likesCount: JSON.parse(localStorage.getItem("likesCount"))|| 0,
      favorites: JSON.parse(localStorage.getItem("favorites"))|| []
    };
  }

  componentDidMount(){
 
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
  localStorage.setItem("favorites",JSON.stringify(favorites))
}

removeFav = async (index)=>{
  let favorites = this.state.favorites;
  await favorites.splice(index, 1);
  
  this.setState({favorites})
  localStorage.setItem("favorites",JSON.stringify(favorites))
}

hanldeLike = async (toggle, person) => {
  
  this.setState({
    likesCount: toggle? this.state.likesCount+1: this.state.likesCount-1
  });
  toggle? localStorage.setItem("likesCount",this.state.likesCount+1): localStorage.setItem("likesCount",this.state.likesCount-1)
  toggle? await this.addFav(person): await this.removeFav(person.index)

}
  render() {
    return (
      <AppContext.Provider
        value={{
          likesCount: this.state.likesCount,
          hanldeLike: this.hanldeLike,
          favorites: this.state.favorites,
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
