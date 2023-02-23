import React from "react";
import CategoryCard from "./CategoryCard";
import { CardContainer, CategoryContainerStyled } from "./styledCategory";

export default function CategoryContainer() {
  return (
    <CategoryContainerStyled>
      <h2>Busca por tipo de alojamiento</h2>
      <CardContainer>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </CardContainer>
    </CategoryContainerStyled>
  );
}
