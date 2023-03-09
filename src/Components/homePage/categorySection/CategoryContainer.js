import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import {
  CardContainer,
  CategoryContainerStyled,
  ErrorCategory,
} from "./styledCategory";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../common/loader/Loader";


export default function CategoryContainer({
  categorySelected,
  hadleSelectCategory
}) {
  const [categorys, setCategorys] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useFetch("/categorias", setCategorys, setLoading, setError);

  return (
    <CategoryContainerStyled>
    
      <h2>Busca por tipo de alojamiento</h2>
      {loading && <Loader />}
      {categorys && 
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
      }
      {error && 
        <ErrorCategory>
          <img src="/assets/icon-warning.svg" alt="question icon" />
          <p>Ha ocurrido un error, por favor vuelva a intetar más tarde</p>
        </ErrorCategory>
      }
    </CategoryContainerStyled>
  );
}
