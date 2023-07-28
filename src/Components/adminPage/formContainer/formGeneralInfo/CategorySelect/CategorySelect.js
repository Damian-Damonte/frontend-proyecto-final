import React, { useState } from "react";
import {
  CategorySelectStyled,
  CategoryOptionContainer,
  CategoryOption,
} from "./styledCategorySelect";
import { ReactComponent as InputArrow } from "../../../../../img/icon-bottom-arrow.svg";
import useFetch from "../../../../../hooks/useFetch";

export default function CategorySelect({ productForm, setProductForm }) {
  const { data: categorys, loading, error } = useFetch("/categories");
  const [showSelect, setShowSelect] = useState(false);

  const handleShowSelect = () => {
    setShowSelect(!showSelect);
  };

  const handleSelectCategory = (category) => {
    setProductForm({ ...productForm, categoria: category });
  };

  return (
    <CategorySelectStyled onClick={handleShowSelect} $empty={productForm.categoria?.name}>
      <p>{productForm.categoria?.name || "Seleccione una categoría"}</p>

      <CategoryOptionContainer
        $show={showSelect}
        $coutCateotys={categorys?.length || 1}
      >
        {loading && (
          <CategoryOption>
            <p>Cargando categorías...</p>
          </CategoryOption>
        )}

        {categorys &&
          categorys.map((cat) => (
            <CategoryOption
              key={cat.id}
              onClick={() => handleSelectCategory(cat)}
            >
              <p>{cat.name}</p>
            </CategoryOption>
          ))}

        {error && (
          <CategoryOption>
            <p>Ha ocurrido un error al cargar las categorías</p>
          </CategoryOption>
        )}
      </CategoryOptionContainer>

      <InputArrow />
    </CategorySelectStyled>
  );
}
