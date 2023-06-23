import React from "react";
import {
  SelectCityOptionStyled,
  SelectCityOptionNames,
} from "./styledSelectCity";
import { ReactComponent as IconOptionCity } from "../../../../img/icon-option-city.svg";

export default function SelectCityOption({ city, handleSelectCity }) {
  const { name, country:{name:countryName}} = city;
  return (
    <SelectCityOptionStyled onClick={() => handleSelectCity(city)}>
      <IconOptionCity />
      <SelectCityOptionNames>
        <p>{name}</p>
        <p>{countryName}</p>
      </SelectCityOptionNames>
    </SelectCityOptionStyled>
  );
}
