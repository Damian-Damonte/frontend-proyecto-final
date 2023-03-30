import React, { useState } from "react";
import {
  AddCaracteristic,
  CaracteristicOption,
  CaracteristicOptionContainer,
  CaracteristicSelect,
  CaracteristicSelectContainer,
  CaracteristicStyled,
  IconContainer,
  IconContainerChild,
  InputsContainer,
} from "./styledCaracteristics";
import { ReactComponent as InputArrow } from "../../../../img/icon-bottom-arrow.svg";
import { ReactComponent as RemoveCaract } from "../../../../img/icon-cross-caracteristic.svg";
import { caracteristicIconMapper } from "../../../../utils/catacteristicsIconMapper";

export default function Caracteristic({
  caracteristic,
  allCaracteristics,
  loading,
  error,
  changeCaracteristic,
  removeCaracteristic,
  handleOpenSelect,
  selectOpen
}) {

  return (
    <CaracteristicStyled>
      <InputsContainer>
        <CaracteristicSelectContainer>
          <p>Nombre</p>
          <CaracteristicSelect onClick={() => handleOpenSelect(caracteristic.id)}>
            <p>{caracteristic.caracteristicSelected?.nombre || "Seleccione un atributo"}</p>
            <CaracteristicOptionContainer
              $show={selectOpen === caracteristic.id}
              $coutCaracteristics={allCaracteristics?.length || 1}
            >
              {loading && (
                <CaracteristicOption>
                  <p>Cargando características...</p>
                </CaracteristicOption>
              )}

              {allCaracteristics &&
                allCaracteristics.map((caract) => (
                  <CaracteristicOption
                    key={caract.id}
                    onClick={() => changeCaracteristic(caracteristic.id, caract)}
                  >
                    <p>{caract.nombre}</p>
                  </CaracteristicOption>
                ))}

              {error && (
                <CaracteristicOption>
                  <p>Ha ocurrido un error al cargar las características</p>
                </CaracteristicOption>
              )}
            </CaracteristicOptionContainer>
            <InputArrow />
          </CaracteristicSelect>
        </CaracteristicSelectContainer>

        <IconContainer>
          <p>Ícono</p>
          <IconContainerChild>
            {caracteristic.caracteristicSelected &&
              caracteristicIconMapper(caracteristic.caracteristicSelected.nombre)}
          </IconContainerChild>
        </IconContainer>
      </InputsContainer>

      <AddCaracteristic onClick={() => removeCaracteristic(caracteristic.id)}>
        <RemoveCaract />
      </AddCaracteristic>
    </CaracteristicStyled>
  );
}
