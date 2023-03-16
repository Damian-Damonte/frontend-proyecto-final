import React from "react";
import { MapSection, ProductLocationStyled } from "./styledProductLocation";

export default function ProductLocation({ product }) {
  const {
    ciudad: {
      nombre: cityName,
      pais: { nombre: countryName },
    },
    coordenadas: { latitud, longitud },
  } = product;

  const toGoogleMaps = () => {
    const urlMap = `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`;
    window.open(urlMap, "_blank");
  };

  return (
    <ProductLocationStyled>
      <h3>¿Dónde vas a estar?</h3>
      <MapSection>
        <p>{`${cityName}, ${countryName}`}</p>
        <img src="/assets/map-desktop.png" alt="map" onClick={toGoogleMaps} />
      </MapSection>
    </ProductLocationStyled>
  );
}
