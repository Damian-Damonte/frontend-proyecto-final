import React from "react";
import ProductCard from "./ProductCard";
import {
  EmptyProductsContainer,
  ProductCardContainer,
  ProductContainerStyled,
} from "./styledProductSection";
import Loader from "../../common/loader/Loader";
import { userDateFormater } from "../../../utils/dateFormater";


export default function ProductContainer({
  products,
  lastSearchParams,
  loading,
  error,
}) {
  const { city, category, startDate, endDate } = lastSearchParams;

  const searchParmsMsj = (defaultText, customText) => {
    let title = defaultText;
    const allSearchParamsNull = Object.values(lastSearchParams).every((e) => e === null);
    if(allSearchParamsNull) return title;
    else title = customText;

    if (city) 
      title += ` en ${city.nombre}, ${city.pais.nombre}`
    if (category)
      title += ` de tipo ${category.titulo}`
    if (startDate && endDate)
      title += ` entre ${userDateFormater(startDate)} y ${userDateFormater(endDate)}`
      
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
