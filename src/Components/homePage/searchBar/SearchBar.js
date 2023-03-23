import { useState } from "react";
import Datepicker from "./datePicker/DatePicker";
import {
  BtnSearch,
  FormSearch,
  SearchBarContainer,
  SearchBarTitle,
  SearchDateInput,
  IconCalendar,
} from "./styledSearchBar";
import SelectCityContainer from "./selectCity/SelectCityContainer";

export default function SearchBar({
  searchParams,
  setSearchParams,
  searchProducts
}) {
  const [showCitys, setShowCitys] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const {startDate, endDate} = searchParams;

  const handleShowCity = () => {
    showCalendar && setShowCalendar(false);
    setShowCitys(!showCitys);
  };

  const handleShowCalendar = () => {
    showCitys && setShowCitys(false);
    if(showCalendar && startDate && !endDate) {
      setSearchParams({ ...searchParams, startDate: null, endDate: null });
    }
    setShowCalendar(!showCalendar);
  };

  const dayFormater = (date) => {
    const options = { day: "numeric", month: "short" };
    const formattedDate = date.toLocaleDateString("es-ES", options);
    return formattedDate.replace(/ /, " de ");
  };

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setSearchParams({ ...searchParams, startDate: start, endDate: end });
  };

  const handleSearchProducts = (e) => {
    e.preventDefault();
    searchProducts(searchParams);
  };

  return (
    <SearchBarContainer>
      <SearchBarTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBarTitle>
      <FormSearch onSubmit={handleSearchProducts}>
      
        <SelectCityContainer
          handleShowCity={handleShowCity}
          showCitys={showCitys}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

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
            searchParams={searchParams}
            handleShowCalendar={handleShowCalendar}
          />
        </SearchDateInput>

        <BtnSearch>Buscar</BtnSearch>
      </FormSearch>
    </SearchBarContainer>
  );
}
