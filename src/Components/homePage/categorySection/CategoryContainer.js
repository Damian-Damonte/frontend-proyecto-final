import React from "react";
import CategoryCard from "./CategoryCard";
import {
  CardContainer,
  CategoryContainerStyled,
  ErrorCategory,
} from "./styledCategory";

export default function CategoryContainer({
  categorySelected,
  hadleSelectCategory,
  categorys,
}) {
  return (
    <CategoryContainerStyled>
      <h2>Busca por tipo de alojamiento</h2>
      {categorys?.length > 0 ? (
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
      ) : (
        <ErrorCategory>
          <img src="/assets/icon-warning.svg" alt="question icon" />
          <p>Ha ocurrido un error, por favor vuelva a intetar más tarde</p>
        </ErrorCategory>
      )}
    </CategoryContainerStyled>
  );
}
