import React from "react";
import { CategoryCardStyled } from "./styledCategory";

export default function CategoryCard({ categoria }) {
  const {id, title, imgUrl} = categoria;
  return (
    <CategoryCardStyled>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>807.105 {title}</p>
    </CategoryCardStyled>
  );
}
