import React, { useState } from 'react'
import CategoryContainer from '../Components/categorySection/CategoryContainer';
import SearchBar from '../Components/searchBar/SearchBar';

const citysHardCoded = [
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

function Home() {
  const [citySelected, setCitySelected] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearchProducts = e => {
    e.preventDefault();
  }


  return (
    <div>
        <SearchBar
          citySelected={citySelected}
          setCitySelected={setCitySelected}
          startDate={startDate}
          endDate={endDate}
          onChangeDate={onChangeDate}
          handleSearchProducts={handleSearchProducts}
        />
        <CategoryContainer />
    </div>
  )
}

export default Home