import React, { Fragment } from "react";
import FavList from "./FavList";
import { withContext } from "../AppContext";

class FavsListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <FavList />
      </Fragment>
    );
  }
}

export default FavsListContainer;
