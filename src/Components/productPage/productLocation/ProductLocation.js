import React from "react";
import { LineaDivisoria, MapSection, ProductLocationStyled } from "./styledProductLocation";
import LeafletMap from "./leafletMap/LeafletMap";

export default function ProductLocation({ latitude, longitude, city }) {
  const {name: cityName, country:{name: countryName}} = city;
  // const {latitud, longitud} = coordinates;

  const toGoogleMaps = () => {
    const urlMap = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(urlMap, "_blank");
  };

  return (
    <ProductLocationStyled>
      <h3>¿Dónde vas a estar?</h3>
      <LineaDivisoria></LineaDivisoria>
      <MapSection>
        <p>{`${cityName}, ${countryName}`}</p>
        <LeafletMap latitud={latitude} longitud={longitude} />
        <button onClick={toGoogleMaps}>Ver en Google Maps</button>
      </MapSection>
    </ProductLocationStyled>
  );
}
