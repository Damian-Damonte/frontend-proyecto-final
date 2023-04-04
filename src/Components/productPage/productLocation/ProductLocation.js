import React from "react";
import { MapSection, ProductLocationStyled } from "./styledProductLocation";
import LeafletMap from "./leafletMap/LeafletMap";

export default function ProductLocation({ coordinates, city }) {
  const {nombre: cityName, pais:{nombre: countryName}} = city;
  const {latitud, longitud} = coordinates;

  const toGoogleMaps = () => {
    const urlMap = `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`;
    window.open(urlMap, "_blank");
  };

  return (
    <ProductLocationStyled>
      <h3>¿Dónde vas a estar?</h3>
      <MapSection>
        <p>{`${cityName}, ${countryName}`}</p>
        {/* <img src="/assets/map-desktop.png" alt="map" onClick={toGoogleMaps} /> */}
        <LeafletMap latitud={latitud} longitud={longitud} />
      </MapSection>
    </ProductLocationStyled>
  );
}
