import React from "react";
import {
  CoordinatesContainer,
  CoordinatesInputContainer,
  CoordinatesStyled,
} from "./styledCoordinates";

export default function Coordinates({ productForm, setProductForm, errors }) {
  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleChandeNumber = (e) => {
    const pattern = /^(-?[0-9]*\.?[0-9]*)$/;
    pattern.test(e.target.value) && handleChange(e);
  };

  return (
    <CoordinatesStyled>
      <h3>Coordenadas</h3>
      <CoordinatesContainer>
        <CoordinatesInputContainer>
          <label htmlFor="latitud">Latitud</label>
          <input
            type="text"
            id="latitud"
            name="latitud"
            onChange={handleChandeNumber}
            value={productForm.latitud}
            placeholder="Latitud"
          />
          <p>{errors.latitud}</p>
        </CoordinatesInputContainer>

        <CoordinatesInputContainer>
          <label htmlFor="longitud">Longitud</label>
          <input
            type="text"
            id="longitud"
            name="longitud"
            onChange={handleChandeNumber}
            value={productForm.longitud}
            placeholder="Longitud"
          />
          <p>{errors.longitud}</p>
        </CoordinatesInputContainer>
      </CoordinatesContainer>
    </CoordinatesStyled>
  );
}
