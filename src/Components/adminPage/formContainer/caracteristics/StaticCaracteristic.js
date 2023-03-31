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
import { ReactComponent as AddCaract } from "../../../../img/icon-add-caracteristic.svg";
import { IoIosWifi as Wifi } from "react-icons/io";

export default function StaticCaracteristic({ addCaracteristic, currentCaracteristics }) {
  return (
    <CaracteristicStyled $marginTop={currentCaracteristics.length}>
      <InputsContainer>
        <CaracteristicSelectContainer>
          <p>Nombre</p>
          <CaracteristicSelect $static={true}>
            <p>Agregue atributos</p>
            <CaracteristicOptionContainer></CaracteristicOptionContainer>
          </CaracteristicSelect>
        </CaracteristicSelectContainer>

        <IconContainer>
          <p>Ícono</p>
          <IconContainerChild $static={true}>
            <Wifi />
          </IconContainerChild>
        </IconContainer>
      </InputsContainer>

      <AddCaracteristic onClick={addCaracteristic} $static={true}>
        <AddCaract />
      </AddCaracteristic>
    </CaracteristicStyled>
  );
}
