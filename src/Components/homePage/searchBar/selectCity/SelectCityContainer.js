import React, { useState, useEffect } from "react";
import {
  SelectCityContainerStyled,
  IconLocation,
  SelectCity,
  SelectCityOptionContainer,
  SelectCityOptionStyled,
  SelectCityOptionNames,
} from "./styledSelectCity";
import SelectCityOption from "./SelectCityOption";
import { useFetch } from "../../../../hooks/useFetch";

export default function SelectCityContainer({
  handleShowCity,
  showCitys,
  searchParams,
  changeSearchParams
}) {
  const [citys, setCitys] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [citySearchText, setCitySearchText] = useState("");
  const [citysFilter, setCitysFilter] = useState([]);

  useFetch("/ciudades", setCitys, setLoading, setError);

  const matchCity = (city) => {
    const cityAndContry =
      city.nombre.toLocaleLowerCase() +
      ", " +
      city.pais.nombre.toLocaleLowerCase();
    return cityAndContry.includes(citySearchText.toLocaleLowerCase());
  };

  const handleSelectCity = (city) => {
    changeSearchParams("city", city);
    setCitySearchText(`${city.nombre}, ${city.pais.nombre}`);
  };

  const handleChangeCityText = (e) => {
    e.target.value === "" && changeSearchParams("city", null);
    setCitySearchText(e.target.value);
  };

  useEffect(() => {
    let citysToShow = [];
    if (citys !== null) {
      for (let i = 0; i < citys.length && citysToShow.length < 4; i++) {
        matchCity(citys[i]) && citysToShow.push(citys[i]);
      }
      setCitysFilter(citysToShow);
    }
  }, [citySearchText, citys]);

  return (
    <SelectCityContainerStyled
      onFocus={handleShowCity}
      onBlur={handleShowCity}
      $empty={searchParams.city}
    >
      <IconLocation />
      <SelectCity
        placeholder="¿A dónde vamos?"
        value={citySearchText}
        onChange={handleChangeCityText}
      />
      <SelectCityOptionContainer
        $show={showCitys}
        $citysCount={citysFilter.length || 1}
      >
        {loading && (
          <SelectCityOptionStyled>
            <img src="/assets/icon-warning.svg" alt="question icon" />
            <SelectCityOptionNames>Cargando ciudades...</SelectCityOptionNames>
          </SelectCityOptionStyled>
        )}

        {citys &&
          (citysFilter.length > 0 ? (
            citysFilter.map((city) => (
              <SelectCityOption
                key={city.id}
                city={city}
                handleSelectCity={handleSelectCity}
                changeSearchParams={changeSearchParams}
              />
            ))
          ) : (
            <SelectCityOptionStyled>
              <img src="/assets/icon-warning.svg" alt="question icon" />
              <SelectCityOptionNames>
                No hay alojamientos disponibles en esta ciudad
              </SelectCityOptionNames>
            </SelectCityOptionStyled>
          ))}

        {error && (
          <SelectCityOptionStyled>
            <img src="/assets/icon-warning.svg" alt="question icon" />
            <SelectCityOptionNames>Ha ocurrido un error</SelectCityOptionNames>
          </SelectCityOptionStyled>
        )}
        
      </SelectCityOptionContainer>
    </SelectCityContainerStyled>
  );
}
