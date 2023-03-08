import { useState, useEffect } from "react";
import Datepicker from "./datePicker/DatePicker";
import SelectCityOption from "./SelectCityOption";
import {
  BtnSearch,
  FormSearch,
  SelectCity,
  SearchBarContainer,
  SearchBarTitle,
  SearchDateInput,
  IconLocation,
  IconCalendar,
  SelectCityOptionContainer,
  SelectCityContainer,
  SelectCityOptionStyled,
  SelectCityOptionNames,
} from "./styledSearchBar";
import { ciudadesHarcoded } from "../../../utils/ciudadesHarcoded";

const citysHardcoded = ciudadesHarcoded;

export default function SearchBar({
  citySelected,
  setCitySelected,
  startDate,
  endDate,
  onChangeDate,
  handleSearchProducts,
  citys
}) {
  const [showCitys, setShowCitys] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [citySearchText, setCitySearchText] = useState("");

  const [citysFilter, setCitysFilter] = useState([]);


  const handleShowCity = () => {
    showCalendar && setShowCalendar(false);
    setShowCitys(!showCitys);
  };

  const handleShowCalendar = () => {
    showCitys && setShowCitys(false);
    setShowCalendar(!showCalendar);
  };

  const dayFormater = (date) => {
    const options = { day: "numeric", month: "short" };
    const formattedDate = date.toLocaleDateString("es-ES", options);
    return formattedDate.replace(/ /, " de ");
  };

  const matchCity = (city) => {
    const cityAndContry =
      city.nombre.toLocaleLowerCase() + ", " + city.pais.nombre.toLocaleLowerCase();
    return cityAndContry.includes(citySearchText.toLocaleLowerCase());
  };

  useEffect(() => {
    let citysToShow = [];
    if(citys !== null) {
      for (let i = 0; i < citys.length && citysToShow.length < 4; i++) {
        matchCity(citys[i]) && citysToShow.push(citys[i]);
      };
  
      setCitysFilter(citysToShow);
    }
  }, [citySearchText, citys]);

  const handleSelectCity = (city) => {
    setCitySelected(city);
    setCitySearchText(`${city.nombre}, ${city.pais.nombre}`);
  };

  const handleChangeCityText = e => {
    e.target.value === "" && setCitySelected(null);
    setCitySearchText(e.target.value);
  };

  return (
    <SearchBarContainer>
      <SearchBarTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBarTitle>
      <FormSearch onSubmit={handleSearchProducts}>
        <SelectCityContainer
          onFocus={handleShowCity}
          onBlur={handleShowCity}
          $empty={citySelected}
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
            {citysFilter.length > 0 ? (
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
            )}
          </SelectCityOptionContainer>
        </SelectCityContainer>

        <SearchDateInput onClick={handleShowCalendar} $empty={startDate}>
          <IconCalendar />
          {startDate ? dayFormater(startDate) : "Check in"}
          {" - "}
          {endDate ? dayFormater(endDate) : "Check out"}
          <Datepicker
            showCalendar={showCalendar}
            startDate={startDate}
            endDate={endDate}
            onChangeDate={onChangeDate}
            handleShowCalendar={handleShowCalendar}
          />
        </SearchDateInput>

        <BtnSearch>Buscar</BtnSearch>
      </FormSearch>
    </SearchBarContainer>
  );
}
