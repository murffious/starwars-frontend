import React, { Component } from "react";

const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      likesCount: JSON.parse(localStorage.getItem("likesCount")) || 0,
      favorites: JSON.parse(localStorage.getItem("favorites")) || []
    };
  }

  addFav = async fav => {
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
    await localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  removeFav = async index => {
    await localStorage.removeItem("favorites")
    let favorites = this.state.favorites;
    await favorites.splice(index, 1);

    this.setState({ favorites });
    await localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  hanldeLike = async (toggle, person) => {
    console.log(person.index)
    toggle ? await this.addFav(person) : await this.removeFav(person.index);
    toggle
    ? await localStorage.setItem("likesCount", this.state.likesCount + 1)
    : await localStorage.setItem("likesCount", this.state.likesCount - 1);
    this.setState({
      likesCount: toggle ? this.state.likesCount + 1 : this.state.likesCount - 1
    });
    
  };
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
