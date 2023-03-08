import React from "react";
import {
  Caracteristic,
  CaracteristicsContainer,
  ProductCaracteristicsStyled,
} from "./styledProductCaracteristics";
import { caracteristicIconMapper } from "../../../utils/catacteristicsIconMapper";


export default function ProductCaracteristics({ caracteristics }) {
  return (
    <ProductCaracteristicsStyled>
      <h3>¿Qué ofrece este lugar?</h3>
      <CaracteristicsContainer>
        {caracteristics.map(caract => (
          <Caracteristic key={caract.id}>
            {caracteristicIconMapper(caract.nombre)}
            <p>{caract.nombre}</p>
          </Caracteristic>
        ))}
      </CaracteristicsContainer>
    </ProductCaracteristicsStyled>
  );
}
