import React, { useState } from "react";
import CategoryContainer from "../Components/homePage/categorySection/CategoryContainer";
import ProductContainer from "../Components/homePage/productSection/ProductContainer";
import SearchBar from "../Components/homePage/searchBar/SearchBar";

function Home() {
  const [citySelected, setCitySelected] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearchProducts = (e) => {
    e.preventDefault();
  };

  console.log("render");

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
      <CategoryContainer
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      <ProductContainer />
    </div>
  );
}

export default Home;
