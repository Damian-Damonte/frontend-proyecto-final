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

  return (
    <CoordinatesStyled>
      <h3>Coordenadas</h3>
      <CoordinatesContainer>
        <CoordinatesInputContainer>
          <label htmlFor="latitud">Latitud</label>
          <input
            type="number"
            id="latitud"
            name="latitud"
            onChange={handleChange}
            value={productForm.latitud}
            placeholder="Latitud"
          />
          <p>{errors.latitud}</p>
        </CoordinatesInputContainer>

        <CoordinatesInputContainer>
          <label htmlFor="longitud">Longitud</label>
          <input
            type="number"
            id="longitud"
            name="longitud"
            onChange={handleChange}
            value={productForm.longitud}
            placeholder="Longitud"
          />
          <p>{errors.longitud}</p>
        </CoordinatesInputContainer>
      </CoordinatesContainer>
    </CoordinatesStyled>
  );
}
