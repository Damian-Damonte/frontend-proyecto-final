import React from "react";
import { MapContainer, ProductLocationStyled } from "./styledProductLocation";

export default function ProductLocation() {
  return (
    <ProductLocationStyled>
      <h3>¿Dónde vas a estar?</h3>
      <MapContainer>
        <p>Buenos Aires, Argentina</p>
      </MapContainer>
    </ProductLocationStyled>
  );
}
