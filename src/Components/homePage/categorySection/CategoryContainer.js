import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import {
  CardContainer,
  CategoryContainerStyled,
  ErrorCategory,
} from "./styledCategory";
import { useFetch } from "../../../hooks/useFetch";
import LoaderCircles from "../../common/loaderCircles/LoaderCircles";

export default function CategoryContainer({
  searchParams,
  searchProducts,
}) {
  const [catetoryState, setCatetoryState] = useState({});
  useFetch("/categorias", setCatetoryState);
  const{ data: categorys, loading, error} = catetoryState;
  
  const selectCategory = (category) => {
    searchParams.category?.id === category.id 
      ? searchProducts({ ...searchParams, category: null })
      : searchProducts({ ...searchParams, category: category });
  };

  return (
    <CategoryContainerStyled>
    
      <h2>Busca por tipo de alojamiento</h2>
      {loading && <LoaderCircles />}
      {categorys && 
        <CardContainer>
          {categorys?.map((cat) => (
            <CategoryCard
              key={cat.id}
              categoria={cat}
              searchParams={searchParams}
              selectCategory={selectCategory}
            />
          ))}
        </CardContainer>
      }
      {error && 
        <ErrorCategory>
          <img src="/assets/icon-warning.svg" alt="question icon" />
          <p>Ha ocurrido un error. Por favor, vuelva a intetar más tarde</p>
        </ErrorCategory>
      }
    </CategoryContainerStyled>
  );
}
