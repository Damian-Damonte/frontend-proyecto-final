import React from "react";
import { CategoryCardStyled } from "./styledCategory";

export default function CategoryCard({
  categoria,
  categorySelected,
  hadleSelectCategory,
}) {
  const { id, titulo, urlImagen } = categoria;
  return (
    <CategoryCardStyled
      $selected={categorySelected?.id === id}
      onClick={() => hadleSelectCategory(categoria)}
    >
      <div></div>
      <img src={urlImagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>807.105 {titulo}</p>
    </CategoryCardStyled>
  );
}
