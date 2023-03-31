import React, { useState } from "react";
import Caracteristic from "./Caracteristic";
import {
  CaracteristicsContainerStyled,
  CaracteristicStyledContainer,
} from "./styledCaracteristics";
import useFetch from "../../../../hooks/useFetch";
import StaticCaracteristic from "./StaticCaracteristic";
import { v4 as uuid } from "uuid";

export default function CaracteristicsContainer({
  productForm,
  setProductForm,
}) {
  const {
    data: allCaracteristics,
    loading,
    error,
  } = useFetch("/caracteristicas");
  const { caracteristicas: currentCaracteristics } = productForm;
  const [selectOpen, setSelectOpen] = useState(null);

  const changeCaracteristic = (id, caracteristic) => {
    const objIndex = currentCaracteristics.findIndex((obj) => obj.id === id);
    if (objIndex !== -1) {
      const newCurrentCaracteristcs = currentCaracteristics;
      newCurrentCaracteristcs[objIndex].caracteristicSelected = caracteristic;
      setProductForm({
        ...productForm,
        caracteristicas: newCurrentCaracteristcs,
      });
    }
  };

  const addCaracteristic = () => {
    setProductForm({
      ...productForm,
      caracteristicas: [
        ...currentCaracteristics,
        { id: uuid(), caracteristicSelected: null },
      ],
    });
  };

  const removeCaracteristic = (id) => {
    setProductForm({
      ...productForm,
      caracteristicas: currentCaracteristics.filter((obj) => obj.id !== id),
    });
  };

  const handleOpenSelect = (id) => {
    id === selectOpen ? setSelectOpen(null) : setSelectOpen(id);
  };

  return (
    <CaracteristicsContainerStyled>
      <h3>Agregar atributos</h3>

      <CaracteristicStyledContainer $countCaract={currentCaracteristics.length}>
        {currentCaracteristics.map((caract) => (
          <Caracteristic
            caracteristic={caract}
            key={caract.id}
            allCaracteristics={allCaracteristics}
            loading={loading}
            error={error}
            changeCaracteristic={changeCaracteristic}
            removeCaracteristic={removeCaracteristic}
            handleOpenSelect={handleOpenSelect}
            selectOpen={selectOpen}
          />
        ))}
      </CaracteristicStyledContainer>
      <StaticCaracteristic
        addCaracteristic={addCaracteristic}
        currentCaracteristics={currentCaracteristics}
      />
    </CaracteristicsContainerStyled>
  );
}
