import React from "react";
import ProductCard from "./ProductCard";
import {
  EmptyProductsContainer,
  LoaderContainer,
  ProductCardContainer,
  ProductContainerStyled,
} from "./styledProductSection";
import LoaderCircles from "../../common/loaderCircles/LoaderCircles";
import { dateToUserDate } from "../../../utils/dateFormater";
import ProductoPages from "./ProductoPages";

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

  const searchParmsMsj = (defaultText, customText) => {
    let title = defaultText;
    const allSearchParamsNull = Object.values(lastSearchParams).every(
      (e) => e === null
    );
    if (allSearchParamsNull) return title;
    else title = customText;

    if (city) title += ` en ${city.nombre}, ${city.pais.nombre}`;
    if (category) title += ` de tipo ${category.titulo}`;
    if (startDate && endDate)
      title += ` entre ${dateToUserDate(startDate)} y ${dateToUserDate(
        endDate
      )}`;
    return title;
  };

  return (
    <ProductContainerStyled>
      {loading && (
        <LoaderContainer>
          <LoaderCircles />
        </LoaderContainer>
      )}

      {products &&
        (products?.length > 0 ? (
          <>
            <h4>{searchParmsMsj("Recomendaciones", "Alojamientos")}</h4>
            <ProductCardContainer>
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
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
  );
}
