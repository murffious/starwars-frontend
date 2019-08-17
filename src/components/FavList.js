import React, { Fragment } from "react";
// import Favorite from "./Favorite";
// not sure if allowing UNLIKE on this page yet
import { withContext } from "../AppContext";
import { Link } from "react-router-dom";

function FavList(props) {
  return (
    <div>
      {props.favorites === null ? (
        "...loading"
      ) : props.favorites.length > 0 ? (
        <table>
          <thead>
            <tr>
              <td>My Favorites</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Homeworld</th>
              <th>Birthday</th>
            </tr>
            {props.favorites.map((person, index) => {
              person.index = index;
              return (
                <Fragment key={person.url}>
                  <tr>
                    <td>{person.name}</td>
                    <td>{person.homeworld}</td>
                    <td>{person.birth_year}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Count: {props.favorites.length}</td>
            </tr>
            <tr>
              <td>
                {" "}
              <Link to={"/"}><button name="back">Back</button> </Link> 
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        "error"
      )}
    </div>
  );
}
export default withContext(FavList);
