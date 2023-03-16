import React, { useState } from "react";
import CategoryContainer from "../Components/homePage/categorySection/CategoryContainer";
import ProductContainer from "../Components/homePage/productSection/ProductContainer";
import SearchBar from "../Components/homePage/searchBar/SearchBar";
import { useFetch } from "../hooks/useFetch";
import { getFilteredProducts, getRandomProducts } from "../service/products";

const initialSearchParams = {
  citySelected: null,
  categorySelected: null,
  startDate: null,
  endDate: null,
};

function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [lastSearchParams, setLastSearchParams] = useState(initialSearchParams);

  useFetch("/productos/random", setProducts, setLoading, setError);

  const changeSearchParams = (param, value) => {
    setSearchParams({ ...searchParams, [param]: value });
  };

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setSearchParams({ ...searchParams, startDate: start, endDate: end });
  };

  const selectCategory = (category) => {
    searchParams.category?.id === category.id 
      ? searchProducts({ ...searchParams, category: null })
      : searchProducts({ ...searchParams, category: category });
  };

  const handleSearchProducts = (e) => {
    e.preventDefault();
    searchProducts(searchParams);
  };

  const searchProducts = (object) => {
    setSearchParams(object);
    setLastSearchParams(object);
    const allSearchParamsNull = Object.values(object).every((e) => e === null);
    allSearchParamsNull
      ? getRandomProducts(setProducts, setLoading, setError)
      : getFilteredProducts(object, setProducts, setLoading, setError);
  };

  return (
    <div>
      <SearchBar
        onChangeDate={onChangeDate}
        handleSearchProducts={handleSearchProducts}
        searchParams={searchParams}
        changeSearchParams={changeSearchParams}
      />
      <CategoryContainer
        selectCategory={selectCategory}
        searchParams={searchParams}
        changeSearchParams={changeSearchParams}
      />
      <ProductContainer
        products={products}
        lastSearchParams={lastSearchParams}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Home;
