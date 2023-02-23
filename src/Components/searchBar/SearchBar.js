import { useState } from "react";
import Datepicker from "./DatePicker";
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
} from "./styledSearchBar";

const citysHardCode = [
  {
    id: 1,
    country: "Argentina",
    name: "Buenos Aires",
  },
  {
    id: 2,
    country: "Colombia",
    name: "Bogotá",
  },
  {
    id: 3,
    country: "México",
    name: "Ciudad de México",
  },
  {
    id: 4,
    country: "Perú",
    name: "Lima",
  },
  // {
  //   id: 5,
  //   country: "Brasil",
  //   name: "São Paulo",
  // },
  // {
  //   id: 6,
  //   country: "Estados Unidos",
  //   name: "Nueva York",
  // },
  // {
  //   id: 7,
  //   country: "Francia",
  //   name: "París",
  // },
  // {
  //   id: 8,
  //   country: "Japón",
  //   name: "Tokio",
  // },
  // {
  //   id: 9,
  //   country: "España",
  //   name: "Madrid",
  // },
];

export default function SearchBar({
  citySelected,
  handleSelectCity,
  startDate,
  endDate,
  onChangeDate,
  handleSearchProducts
}) {
  const [showCitys, setShowCitys] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCity = () => {
    showCalendar && setShowCalendar(false);
    setShowCitys(!showCitys);
  };

  const handleShowCalendar = () => {
    showCitys && setShowCitys(false);
    setShowCalendar(!showCalendar);
  };

  const dayFormater = date => {
    const options = { day: 'numeric', month: 'short' };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return formattedDate.replace(/ /, ' de ');
  }

  return (
    <SearchBarContainer>
      <SearchBarTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBarTitle>
      <FormSearch onSubmit={handleSearchProducts}>
        <SelectCity onClick={handleShowCity} $empty={citySelected}>
          <IconLocation $empty={citySelected} />
          <p>
            {citySelected
              ? `${citySelected.name}, ${citySelected.country}`
              : "¿A dónde vamos?"}
          </p>
          <SelectCityOptionContainer $show={showCitys}>
            {citysHardCode.map((city) => (
              <SelectCityOption
                key={city.id}
                city={city}
                handleSelectCity={handleSelectCity}
              />
            ))}
          </SelectCityOptionContainer>
        </SelectCity>

        <SearchDateInput onClick={handleShowCalendar} $empty={startDate} >
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
