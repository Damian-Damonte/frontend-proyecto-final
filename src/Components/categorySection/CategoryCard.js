import React from "react";
import { CategoryCardStyled } from "./styledCategory";
import imagen from "./img-hotel.png";

export default function CategoryCard({ categoria }) {
  const {id, title, imgUrl} = categoria;
  return (
    <CategoryCardStyled>
      <img src={imgUrl} alt="img" />
      <h3>{title}</h3>
      <p>807.105 {title}</p>
    </CategoryCardStyled>
  );
}
