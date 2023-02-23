import React from "react";
import {
  SelectCityOptionStyled,
  SelectCityOptionNames,
} from "./styledSearchBar";
import { ReactComponent as IconOptionCity } from "../../img/icon-option-city.svg";

export default function SelectCityOption({ city, handleSelectCity }) {
  const {id, country, name} = city;
  return (
    <SelectCityOptionStyled onClick={() => handleSelectCity(id)}>
      <IconOptionCity />

      <SelectCityOptionNames>
        <p>{name}</p>
        <p>{country}</p>
      </SelectCityOptionNames>
    </SelectCityOptionStyled>
  );
}
