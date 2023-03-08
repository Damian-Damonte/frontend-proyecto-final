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

function Home() {
  const [citySelected, setCitySelected] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);

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
    getProductFilters(citySelected?.id, categorySelected?.id, setProducts);
  };

  const hadleSelectCategory = (category) => {
    if (category.id === categorySelected?.id) {
      setCategorySelected(null);
      getProductFilters(citySelected?.id, null, setProducts);
    } else {
      setCategorySelected(category);
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
      <ProductContainer products={products} />
    </div>
  );
}

export default Home;
