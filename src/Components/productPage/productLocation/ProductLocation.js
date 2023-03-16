import React from "react";
import { MapSection, ProductLocationStyled } from "./styledProductLocation";

export default function ProductLocation({ city }) {
  return (
    <ProductLocationStyled>
      <h3>¿Dónde vas a estar?</h3>
      <MapSection>
        <p>{`${city.nombre}, ${city.pais.nombre}`}</p>
        <img src="/assets/map-desktop.png" alt="map" />
      </MapSection>
    </ProductLocationStyled>
  );
}

// https://www.google.com/maps/search/?api=1&query=-34.55506,-58.47465