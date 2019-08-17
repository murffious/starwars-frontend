import React, { useState } from 'react'
import { withContext } from "../AppContext";
import update from 'immutability-helper'
import FavList from './FavList';
import FavDragOrder from "./FavDragOrder";
const style = {
  width: 400,
}
const Container = (props) => {
  {
  
    const [favorites, setFavorites] = useState(props.favorites)
    const moveCard = (dragIndex, hoverIndex) => {
      const dragCard = favorites[dragIndex]
      setFavorites(
        update(favorites, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        }),
      )
    }
    console.log(favorites)
    return (
      <div style={style}>
        {favorites.map((card, i) => (
          <FavDragOrder
            key={card.name}
            index={i}
            id={card.name}
            text={card.name}
            moveCard={moveCard}
          />
        ))}
      </div>
    )
  }
}
export default withContext(Container)
