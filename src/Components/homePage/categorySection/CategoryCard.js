import React from "react";
import { CategoryCardStyled } from "./styledCategory";

export default function CategoryCard({
  categoria,
  searchParams,
  selectCategory
}) {
  const { id, titulo, urlImagen } = categoria;

  return (
    <CategoryCardStyled
      $selected={searchParams.category?.id === id}
      onClick={() => selectCategory(categoria)}
    >
      <div></div>
      <img src={urlImagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>807.105 {titulo}</p>
    </CategoryCardStyled>
  );
}
