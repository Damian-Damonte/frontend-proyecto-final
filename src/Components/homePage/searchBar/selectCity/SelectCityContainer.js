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
import useFetch from "../../../../hooks/useFetch";
import { BsFillXCircleFill as  CleanCity} from "react-icons/bs";


export default function SelectCityContainer({
  handleShowCity,
  showCitys,
  searchParams,
  setSearchParams,
}) {
  const [citySearchText, setCitySearchText] = useState("");
  const [citysFilter, setCitysFilter] = useState([]);
  const { data: citys, loading, error } = useFetch("/ciudades");

  const matchCity = (city) => {
    const cityAndContry =
      city.nombre.toLocaleLowerCase() +
      ", " +
      city.pais.nombre.toLocaleLowerCase();
    return cityAndContry.includes(citySearchText.toLocaleLowerCase());
  };

  const handleSelectCity = (city) => {
    setSearchParams({ ...searchParams, city: city });
    setCitySearchText(`${city.nombre}, ${city.pais.nombre}`);
  };

  const handleChangeCityText = (e) => {
    e.target.value === "" && setSearchParams({ ...searchParams, city: null });
    setCitySearchText(e.target.value);
  };

  useEffect(() => {
    let citysToShow = [];
    if (citys !== null) {
      for (let i = 0; i < citys?.length && citysToShow.length < 4; i++) {
        matchCity(citys[i]) && citysToShow.push(citys[i]);
      }
      setCitysFilter(citysToShow);
    }
  }, [citySearchText, citys]);

  const cleanCity = () => {
    setCitySearchText("");
    setSearchParams({ ...searchParams, city: null });
  };

  return (
    <SelectCityContainerStyled
      onFocus={handleShowCity}
      onBlur={handleShowCity}
      $citySelected={searchParams.city}
      $emptyInput={citySearchText}
    >
      <IconLocation />
      <CleanCity onClick={cleanCity}/>
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
