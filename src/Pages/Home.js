import React, { useEffect, useState } from "react";
import CategoryContainer from "../Components/homePage/categorySection/CategoryContainer";
import ProductContainer from "../Components/homePage/productSection/ProductContainer";
import SearchBar from "../Components/homePage/searchBar/SearchBar";
import { getFilteredProducts, getRandomProducts } from "../service/productos";
import { areEqualsObjects } from "../utils/areEqualsObjects";

function Home() {
  const [productState, setProductState] = useState({});
  const [pageData, setPageData] = useState({});
  const [searchParams, setSearchParams] = useState({});
  const [lastSearchParams, setLastSearchParams] = useState({});
  const [showPager, setShowPager] = useState(false);

  useEffect(() => {
    getRandomProducts(setProductState, setShowPager);
  }, []);

  const searchProducts = (searchParams, page=0) => {
    if (!productState.loading) {
      areEqualsObjects(searchParams, lastSearchParams)
        ? setShowPager(true)
        : setShowPager(false);
      setSearchParams(searchParams);
      setLastSearchParams(searchParams);
      const allSearchParamsNull = Object.values(searchParams).every((e) => e === null);
      allSearchParamsNull
        ? getRandomProducts(setProductState, setShowPager)
        : getFilteredProducts(page, searchParams, setProductState, setPageData, setShowPager);
    }
  };

  return (
    <div>
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        searchProducts={searchProducts}
      />
      <CategoryContainer
        searchParams={searchParams}
        searchProducts={searchProducts}
      />
      <ProductContainer
        lastSearchParams={lastSearchParams}
        pageData={pageData}
        searchProducts={searchProducts}
        setPageData={setPageData}
        showPager={showPager}
        productState={productState}
      />
    </div>
  );
}

export default Home;
