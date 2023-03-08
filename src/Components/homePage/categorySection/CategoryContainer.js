import React from "react";
import CategoryCard from "./CategoryCard";
import { CardContainer, CategoryContainerStyled } from "./styledCategory";

export default function CategoryContainer({
  categorySelected,
  hadleSelectCategory,
  categorys,
}) {

  return (
    <CategoryContainerStyled>
      <h2>Busca por tipo de alojamiento</h2>
      <CardContainer>
        {categorys?.map((cat) => (
          <CategoryCard
            key={cat.id}
            categoria={cat}
            categorySelected={categorySelected}
            hadleSelectCategory={hadleSelectCategory}
          />
        ))}
      </CardContainer>
    </CategoryContainerStyled>
  );
}
