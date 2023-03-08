import React from "react";
import { MapContainer, ProductLocationStyled } from "./styledProductLocation";

export default function ProductLocation({ city }) {
  return (
    <ProductLocationStyled>
      <h3>¿Dónde vas a estar?</h3>
      <MapContainer>
        <p>{`${city.nombre}, ${city.pais.nombre}`}</p>
      </MapContainer>
    </ProductLocationStyled>
  );
}
