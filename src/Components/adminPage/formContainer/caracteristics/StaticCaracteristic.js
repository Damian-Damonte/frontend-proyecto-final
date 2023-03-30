import React from "react";
import {
  AddCaracteristic,
  CaracteristicOptionContainer,
  CaracteristicSelect,
  CaracteristicSelectContainer,
  CaracteristicStyled,
  IconContainer,
  IconContainerChild,
  InputsContainer,
} from "./styledCaracteristics";
import { ReactComponent as InputArrow } from "../../../../img/icon-bottom-arrow.svg";
import { ReactComponent as AddCaract } from "../../../../img/icon-add-caracteristic.svg";

export default function StaticCaracteristic({ addCaracteristic }) {
  const fake = () => {};

  return (
    <CaracteristicStyled $marginTop={true}>
      <InputsContainer>
        <CaracteristicSelectContainer>
          <p>Nombre</p>
          <CaracteristicSelect onClick={fake}>
            <p>Agergue un atributo</p>
            <CaracteristicOptionContainer></CaracteristicOptionContainer>
            <InputArrow />
          </CaracteristicSelect>
        </CaracteristicSelectContainer>

        <IconContainer>
          <p>Ícono</p>
          <IconContainerChild>
           
          </IconContainerChild>
        </IconContainer>
      </InputsContainer>

      <AddCaracteristic onClick={addCaracteristic}>
        <AddCaract />
      </AddCaracteristic>
    </CaracteristicStyled>
  );
}
