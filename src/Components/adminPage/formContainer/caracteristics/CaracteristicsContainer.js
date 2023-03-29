import React from "react";
import Caracteristic from "./Caracteristic";
import {
  CaracteristicsContainerStyled, CaracteristicStyledContainer,
} from "./styledCaracteristics";

export default function CaracteristicsContainer() {
  return (
    <CaracteristicsContainerStyled>
      <h3>Agregar atributos</h3>

      <CaracteristicStyledContainer>
        <Caracteristic />
        {/* <Caracteristic /> */}
      </CaracteristicStyledContainer>

    </CaracteristicsContainerStyled>
  );
}
