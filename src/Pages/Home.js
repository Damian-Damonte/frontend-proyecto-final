import React, { useEffect, useState } from "react";
import CategoryContainer from "../Components/homePage/categorySection/CategoryContainer";
import ProductContainer from "../Components/homePage/productSection/ProductContainer";
import SearchBar from "../Components/homePage/searchBar/SearchBar";
import { getFilteredProducts, getRandomProducts } from "../service/products";
import { areEqualsObjects } from "../utils/areEqualsObjects";

const initialProductState = {
  products: null,
  loading: false,
  error: null
};

function Home() {
  const [productState, setProductState] = useState(initialProductState);
  const [pageData, setPageData] = useState({});
  const [searchParams, setSearchParams] = useState({});
  const [lastSearchParams, setLastSearchParams] = useState({});
  const [nextPage, setNextPage] = useState(false);

  // user useFetch, actualizarlo
  useEffect(() => {
    getRandomProducts(setProductState, setNextPage);
  }, []);

  const searchProducts = (searchParams, page=0) => {
    if (!productState.loading) {
      areEqualsObjects(searchParams, lastSearchParams)
        ? setNextPage(true)
        : setNextPage(false);
      setSearchParams(searchParams);
      setLastSearchParams(searchParams);
      const allSearchParamsNull = Object.values(searchParams).every((e) => e === null);
      allSearchParamsNull
        ? getRandomProducts(setProductState, setNextPage)
        : getFilteredProducts(page, searchParams, setProductState, setPageData, setNextPage);
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
        nextPage={nextPage}
        productState={productState}
      />
    </div>
  );
}

export default Home;
