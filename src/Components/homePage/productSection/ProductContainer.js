import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import {
  EmptyProductsContainer,
  LoaderContainer,
  ProductCardContainer,
  ProductContainerStyled,
  WidthLimitContainer,
} from "./styledProductSection";
import LoaderCircles from "../../common/loaderCircles/LoaderCircles";
import { dateToUserDate } from "../../../utils/dateFormater";
import ProductoPages from "./ProductoPages";
import UserContext from "../../../context/user.context";
import ProductSectionSkeleton from "./skeleton/ProductSectionSkeleton";

export default function ProductContainer({
  lastSearchParams,
  pageData,
  searchProducts,
  setPageData,
  showPager,
  productState,
}) {
  const { city, category, startDate, endDate } = lastSearchParams;
  const { products, loading, error } = productState;
  const { favs } = useContext(UserContext);

  const isProductFav = (id) => {
    return favs.some((fav) => id === fav.id);
  };

  const searchParmsMsj = (defaultText, customText) => {
    let title = defaultText;
    const allSearchParamsNull = Object.values(lastSearchParams).every(
      (e) => e === null
    );
    if (allSearchParamsNull) return title;
    else title = customText;

    if (city) title += ` en ${city.name}, ${city.country.name}`;
    if (category) title += ` de tipo ${category.name}`;
    if (startDate && endDate)
      title += ` entre ${dateToUserDate(startDate)} y ${dateToUserDate(
        endDate
      )}`;
    return title;
  };

  return (
    <WidthLimitContainer>
      <ProductContainerStyled>
        {loading && (
          <ProductSectionSkeleton />
        )}

        {products &&
          (products?.length > 0 ? (
            <>
              <h4>{searchParmsMsj("Recomendaciones", "Alojamientos")}</h4>
              <ProductCardContainer>
                {products?.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isFav={isProductFav(product.id)}
                  />
                ))}
              </ProductCardContainer>
            </>
          ) : (
            <EmptyProductsContainer>
              <img src="/assets/icon-warning.svg" alt="question icon" />
              <p>
                {searchParmsMsj(
                  "No se encontraron alojamientos",
                  "No se encontraron alojamientos disponibles"
                )}
              </p>
            </EmptyProductsContainer>
          ))}

        {error && (
          <EmptyProductsContainer>
            <img src="/assets/icon-warning.svg" alt="question icon" />
            <p>Ha ocurrido un error. Por favor, vuelva a intetar más tarde</p>
          </EmptyProductsContainer>
        )}

        {showPager && !error && (
          <ProductoPages
            pageData={pageData}
            setPageData={setPageData}
            searchProducts={searchProducts}
            lastSearchParams={lastSearchParams}
            loading={loading}
          />
        )}
      </ProductContainerStyled>
    </WidthLimitContainer>
  );
}
