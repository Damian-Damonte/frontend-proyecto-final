import React from "react";
import ProductCard from "./ProductCard";
import {
  EmptyProductsContainer,
  ProductCardContainer,
  ProductContainerStyled,
} from "./styledProductSection";
import Loader from "../../common/loader/Loader";

export default function ProductContainer({
  products,
  lastSearchParams,
  loading,
  error,
}) {
  const { city, category } = lastSearchParams;

  const searchParmsMsj = (defaultText, customText) => {
    let title = defaultText;
    if (city && category) {
      title = `${customText} en ${city.nombre}, ${city.pais.nombre} de tipo ${category.titulo}`;
    } else if (category || city) {
      title = category
        ? `${customText} de tipo ${category.titulo}`
        : `${customText} en ${city.nombre}, ${city.pais.nombre}`;
    }
    return title;
  };

  return (
    <ProductContainerStyled>
      {loading && <Loader />}

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

        {error && 
          <EmptyProductsContainer>
            <img src="/assets/icon-warning.svg" alt="question icon" />
            <p>
              Ha ocurrido un error. Por favor, vuelva a intetar más tarde
            </p>
          </EmptyProductsContainer>
        }
    </ProductContainerStyled>
  );
}
