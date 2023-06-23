import React from "react";
import {
  Caracteristic,
  CaracteristicsContainer,
  LineaDivisoria,
  ProductCaracteristicsStyled,
} from "./styledProductCaracteristics";
import { caracteristicIconMapper } from "../../../utils/catacteristicsIconMapper";

export default function ProductCaracteristics({ amenities }) {
  return (
      <ProductCaracteristicsStyled>
        <h3>¿Qué ofrece este lugar?</h3>
        <LineaDivisoria></LineaDivisoria>
        <CaracteristicsContainer>
          {amenities.map((amenity) => (
            <Caracteristic key={amenity.id}>
              {caracteristicIconMapper(amenity.name)}
              <p>{amenity.name}</p>
            </Caracteristic>
          ))}
        </CaracteristicsContainer>
      </ProductCaracteristicsStyled>
  );
}
