import React, { useState, Fragment } from "react";
import { withContext } from "../AppContext";
import update from "immutability-helper";
import FavDragOrder from "./FavDragOrder";
import { Link } from "react-router-dom";

const style = {
  width: 400
};
const Container = props => {
  {
    const [favorites, setFavorites] = useState(props.favorites);
    const moveCard = (dragIndex, hoverIndex) => {
      const dragCard = favorites[dragIndex];
      setFavorites(
        update(favorites, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        })
      );
    };
    return (
      <div style={style}>
        <table>
          <thead>
            <tr>
              <td>My Favorites</td>
            </tr>
            <tr>
              <td>
                <Link to={"/"}>
                  <button name="back">Back</button>{" "}
                </Link>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Homeworld</th>
              <th>Birthday</th>
              <th>Rank</th>
            </tr>
          </tbody>
        </table>
        {favorites.map((card, i) => (
          <Fragment key={card.name}>
            <FavDragOrder
              key={card.name}
              index={i}
              id={card.name}
              text={card.name + " " + card.homeworld + " " + card.birth_year}
              moveCard={moveCard}
            />
          </Fragment>
        ))}
      </div>
    );
  }
};
export default withContext(Container);
