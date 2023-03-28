import React, { useState } from "react";
import {
  CategorySelectStyled,
  CategoryOptionContainer,
  CategoryOption,
} from "./styledCategorySelect";
import { ReactComponent as InputArrow } from "../../../../../img/icon-bottom-arrow.svg";


export default function CategorySelect() {
  const [showSelect, setShowSelect] = useState(false);
  const [categorySelected, setCategorySelected] = useState("");

  const handleShowSelect = () => {
    setShowSelect(!showSelect);
  };

  const handleSelectCategory = (name) => {
    setCategorySelected(name);
  }

  return (
    <CategorySelectStyled onClick={handleShowSelect}>
      <p>{categorySelected}</p>

      <CategoryOptionContainer $show={showSelect}>
        <CategoryOption onClick={() => handleSelectCategory("Hotel")}>
          <p>Hotel</p>
        </CategoryOption>
        <CategoryOption onClick={() => handleSelectCategory("Hostel")}>
          <p>Hostel</p>
        </CategoryOption>
        <CategoryOption onClick={() => handleSelectCategory("Departamento")}>
          <p>Departamento</p>
        </CategoryOption>
        <CategoryOption onClick={() => handleSelectCategory("Bed and breakfast")}>
          <p>Bed and breakfast</p>
        </CategoryOption>
      </CategoryOptionContainer>

      <InputArrow />
    </CategorySelectStyled>
  );
}
