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
import { ReactComponent as AddCaract } from "../../../../img/icon-add-caracteristic.svg";
import { caracteristicIconMapper } from "../../../../utils/catacteristicsIconMapper";

export default function Caracteristic({ allCaracteristics, loading, error }) {
  const [showSelect, setshowSelect] = useState(false);
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
            <p>{caracteristicSelected?.nombre || "Seleccione un atributo"}</p>
            <CaracteristicOptionContainer
              $show={showSelect}
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
                    onClick={() => selectCaracteristics(caract)}
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
            {caracteristicSelected &&
              caracteristicIconMapper(caracteristicSelected.nombre)}
          </IconContainerChild>
        </IconContainer>
      </InputsContainer>

      <AddCaracteristic>
        <AddCaract />
      </AddCaracteristic>
    </CaracteristicStyled>
  );
}
