import React, { useState } from "react";
import Caracteristic from "./Caracteristic";
import {
  CaracteristicsContainerStyled,
  CaracteristicStyledContainer,
} from "./styledCaracteristics";
import useFetch from "../../../../hooks/useFetch";
import StaticCaracteristic from "./StaticCaracteristic";

export default function CaracteristicsContainer({
  productForm,
  setProductForm,
}) {
  const {
    data: allCaracteristics,
    loading,
    error,
  } = useFetch("/caracteristicas");
  const [currentCaracteristics, setCurrentCaracteristics] = useState([]);


  const caracteristicTemplate = (
    <Caracteristic
      allCaracteristics={allCaracteristics}
      loading={loading}
      error={error}
    />
  );

  const changeCaracteristic = () => {};

  const addCaracteristic = () => {
    setCurrentCaracteristics([...currentCaracteristics, { id: currentCaracteristics.length }]);
  };

  const removeCaracteristic = () => {};

  return (
    <CaracteristicsContainerStyled>
      <h3>Agregar atributos</h3>

      <CaracteristicStyledContainer $countCaract={currentCaracteristics.length }>
        {currentCaracteristics.map((caract) => (
          <Caracteristic
            key={caract.id}
            allCaracteristics={allCaracteristics}
            loading={loading}
            error={error}
          />
        ))}
      </CaracteristicStyledContainer>
      <StaticCaracteristic addCaracteristic={addCaracteristic} />
    </CaracteristicsContainerStyled>
  );
}
