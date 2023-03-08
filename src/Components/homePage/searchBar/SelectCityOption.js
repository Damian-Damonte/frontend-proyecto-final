import React from "react";
import {
  SelectCityOptionStyled,
  SelectCityOptionNames,
} from "./styledSearchBar";
import { ReactComponent as IconOptionCity } from "../../../img/icon-option-city.svg";

export default function SelectCityOption({ city, handleSelectCity }) {
  const {id, nombre, pais:{nombre:paisNombre}} = city;
  return (
    <SelectCityOptionStyled onClick={() => handleSelectCity(city)}>
      <IconOptionCity />
      <SelectCityOptionNames>
        <p>{nombre}</p>
        <p>{paisNombre}</p>
      </SelectCityOptionNames>
    </SelectCityOptionStyled>
  );
}
