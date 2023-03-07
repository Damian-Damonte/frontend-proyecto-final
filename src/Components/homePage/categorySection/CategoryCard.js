import React from "react";
import { CategoryCardStyled } from "./styledCategory";

export default function CategoryCard({ categoria, categorySelected, setCategorySelected }) {
  const {id, titulo, urlImagen} = categoria;
  return (
    <CategoryCardStyled onClick={() => setCategorySelected(categoria)}>
      <img src={urlImagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>807.105 {titulo}</p>
    </CategoryCardStyled>
  );
}
