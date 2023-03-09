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
  searchParams,
  loading,
  error,
}) {
  const { citySelected, categorySelected } = searchParams;

  const SearchParmsMsj = (defaultText, customText) => {
    let title = defaultText;
    if (citySelected && categorySelected) {
      title = `${customText} en ${citySelected.nombre}, ${citySelected.pais.nombre} de tipo ${categorySelected.titulo}`;
    } else if (categorySelected || citySelected) {
      title = categorySelected
        ? `${customText} de tipo ${categorySelected.titulo}`
        : `${customText} en ${citySelected.nombre}, ${citySelected.pais.nombre}`;
    }
    return title;
  };

  return (
    <ProductContainerStyled>
      {loading && <Loader />}

      {products &&
        (products?.length > 0 ? (
          <>
            <h4>{SearchParmsMsj("Recomendaciones", "Alojamientos")}</h4>
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
              {SearchParmsMsj(
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
              Ha ocurrido un error, por favor vuelva a intetar más tarde
            </p>
          </EmptyProductsContainer>
        }
    </ProductContainerStyled>
  );
}
