import React, { useState } from "react";
import {
  CategorySelectStyled,
  CategoryOptionContainer,
  CategoryOption,
} from "./styledCategorySelect";
import { ReactComponent as InputArrow } from "../../../../../img/icon-bottom-arrow.svg";
import useFetch from "../../../../../hooks/useFetch";

export default function CategorySelect({ productForm, setProductForm }) {
  const { data: categorys, loading, error } = useFetch("/categorias");
  const [showSelect, setShowSelect] = useState(false);

  const handleShowSelect = () => {
    setShowSelect(!showSelect);
  };

  const handleSelectCategory = (category) => {
    setProductForm({ ...productForm, categoria: category });
  };

  return (
    <CategorySelectStyled onClick={handleShowSelect}>
      <p>{productForm.categoria?.titulo}</p>

      <CategoryOptionContainer
        $show={showSelect}
        $coutCateotys={categorys?.length || 1}
      >
        {loading && (
          <CategoryOption>
            <p>Cargando categorias...</p>
          </CategoryOption>
        )}
        {categorys &&
          categorys.map((cat) => (
            <CategoryOption
              key={cat.id}
              onClick={() => handleSelectCategory(cat)}
            >
              <p>{cat.titulo}</p>
            </CategoryOption>
          ))}
        {error && (
          <CategoryOption>
            <p>Error al cargar la categorias</p>
          </CategoryOption>
        )}
      </CategoryOptionContainer>

      <InputArrow />
    </CategorySelectStyled>
  );
}
