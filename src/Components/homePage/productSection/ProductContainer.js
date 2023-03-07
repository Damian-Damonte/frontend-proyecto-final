import React from "react";
import ProductCard from "./ProductCard";
import {
  ProductCardContainer,
  ProductContainerStyled,
} from "./styledProductSection";

export default function ProductContainer() {
  return (
    <ProductContainerStyled>
      <h4>Recomendaciones</h4>

      <ProductCardContainer>
        <ProductCard />
      </ProductCardContainer>
      
    </ProductContainerStyled>
  );
}
