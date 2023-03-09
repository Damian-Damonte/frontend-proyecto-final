import React, { useState, useEffect } from "react";
import CategoryContainer from "../Components/homePage/categorySection/CategoryContainer";
import ProductContainer from "../Components/homePage/productSection/ProductContainer";
import SearchBar from "../Components/homePage/searchBar/SearchBar";
import { useFetch } from "../hooks/useFetch";
import {
  allCategorys,
  allProducts,
  allCitys,
  getProductFilters,
  getRandomProducts,
  customFetch
} from "../service/getRequests";

const initialSearchParams = {
  citySelected: null,
  categorySelected: null,
  startDate: null,
  endDate: null,
};

function Home() {
  const [citySelected, setCitySelected] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);
  const [searchParams, setSearchParams] = useState(initialSearchParams);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useFetch("/productos/random", setProducts, setLoading, setError);

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearchProducts = (e) => {
    e.preventDefault();
    if (!citySelected && !categorySelected) {
      setSearchParams({ citySelected, categorySelected, startDate, endDate });
      getRandomProducts(setProducts);
    } else {
      setSearchParams({ citySelected, categorySelected, startDate, endDate });
      getProductFilters(citySelected?.id, categorySelected?.id, setProducts, setLoading, setError);
    }
  };

  const hadleSelectCategory = (category) => {
    if (category.id === categorySelected?.id) {
      setCategorySelected(null);
      setSearchParams({
        citySelected,
        categorySelected: null,
        startDate,
        endDate,
      });
      citySelected
        ? getProductFilters(citySelected?.id, null, setProducts, setLoading, setError)
        : customFetch("/productos/random", setProducts, setLoading, setError);
    } else {
      setCategorySelected(category);
      setSearchParams({
        citySelected,
        categorySelected: category,
        startDate,
        endDate,
      });
      getProductFilters(citySelected?.id, category.id, setProducts, setLoading, setError);
    }
  };

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
        hadleSelectCategory={hadleSelectCategory}
      />
      <ProductContainer
        products={products}
        searchParams={searchParams}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Home;
