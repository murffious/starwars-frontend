import React, { useState } from 'react'
import { withContext } from "../AppContext";
import update from 'immutability-helper'
import FavList from './FavList';
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
    return (
      <div style={style}>
        {favorites.map((card, i) => (
          <FavList
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        ))}
      </div>
    )
  }
}
export default withContext(Container)
