import React, { useState, useEffect } from "react";
import CategoryContainer from "../Components/homePage/categorySection/CategoryContainer";
import ProductContainer from "../Components/homePage/productSection/ProductContainer";
import SearchBar from "../Components/homePage/searchBar/SearchBar";
import {
  allCategorys,
  allProducts,
  allCitys,
  getProductFilters,
} from "../service/getRequests";

const initialSearchParams = {
  citySelected: null,
  categorySelected: null,
  startDate: null,
  endDate: null
};

function Home() {
  const [citySelected, setCitySelected] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);
  const [searchParams, setSearchParams] = useState(initialSearchParams);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [categorys, setCategorys] = useState(null);
  const [products, setProducts] = useState(null);
  const [citys, setCitys] = useState(null);

  useEffect(() => {
    allCategorys(setCategorys);
    allProducts(setProducts);
    allCitys(setCitys);
  }, []);

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearchProducts = (e) => {
    e.preventDefault();
    setSearchParams({ citySelected, categorySelected, startDate, endDate})
    getProductFilters(citySelected?.id, categorySelected?.id, setProducts);
  };

  const hadleSelectCategory = (category) => {
    if (category.id === categorySelected?.id) {
      setCategorySelected(null);
      setSearchParams({ citySelected, categorySelected: null, startDate, endDate})
      getProductFilters(citySelected?.id, null, setProducts);
    } else {
      setCategorySelected(category);
      setSearchParams({ citySelected, categorySelected: category, startDate, endDate})
      getProductFilters(citySelected?.id, category.id, setProducts);
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
        citys={citys}
      />
      <CategoryContainer
        categorySelected={categorySelected}
        hadleSelectCategory={hadleSelectCategory}
        categorys={categorys}
      />
      <ProductContainer
        products={products}
        searchParams={searchParams}
      />
    </div>
  );
}

export default Home;
