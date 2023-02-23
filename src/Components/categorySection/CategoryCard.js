import React from 'react'
import { CategoryCardStyled } from './styledCategory'
import imagen from "./img-hotel.png"

export default function CategoryCard() {
  return (
    <CategoryCardStyled>
      <img src={imagen} alt='img'/>
      <h3>Hoteles</h3>
      <p>807.105 hoteles</p>
    </CategoryCardStyled>
  )
}
