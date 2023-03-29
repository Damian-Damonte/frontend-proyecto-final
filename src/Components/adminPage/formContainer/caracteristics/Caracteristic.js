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
import useFetch from "../../../../hooks/useFetch";
import { ReactComponent as InputArrow } from "../../../../img/icon-bottom-arrow.svg";
import { ReactComponent as AddCaract } from "../../../../img/icon-add-caracteristic.svg";

export default function Caracteristic() {
  const [showSelect, setshowSelect] = useState(false);
  const { data: caracteristics, loading, error } = useFetch("/caracteristicas");
  const [caracteristicSelected, setCaracteristicSelected] = useState(null);

  const handleShowSelect = () => {
    setshowSelect(!showSelect);
  };

  const selectCaracteristics = (caracteristic) => {
    setCaracteristicSelected(caracteristic);
  };

  return (
    <CaracteristicStyled>
      <InputsContainer>
        <CaracteristicSelectContainer>
          <p>Nombre</p>
          <CaracteristicSelect onClick={handleShowSelect}>
            {/* caracteristica seleccionada */}
            <p>{caracteristicSelected?.nombre || "Seleccione un atributo"}</p>
            <CaracteristicOptionContainer
              $show={showSelect}
              $coutCaracteristics={caracteristics?.length || 1}
            >
              {caracteristics &&
                caracteristics.map((caract) => (
                  <CaracteristicOption key={caract.id} onClick={() => selectCaracteristics(caract)}>
                    <p>{caract.nombre}</p>
                  </CaracteristicOption>
                ))}
            </CaracteristicOptionContainer>
            <InputArrow />
          </CaracteristicSelect>
        </CaracteristicSelectContainer>

        <IconContainer>
          <p>Ícono</p>
          <IconContainerChild />
        </IconContainer>
      </InputsContainer>

      <AddCaracteristic>
        <AddCaract />
      </AddCaracteristic>
    </CaracteristicStyled>
  );
}
