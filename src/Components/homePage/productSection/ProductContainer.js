import React from "react";
import ProductCard from "./ProductCard";
import {
  ProductCardContainer,
  ProductContainerStyled,
} from "./styledProductSection";

export default function ProductContainer({ products }) {
  return (
    <ProductContainerStyled>
      <h4>Recomendaciones</h4>

      <ProductCardContainer>
        {products?.map(product => <ProductCard key={product.id} product={product} />)}
      </ProductCardContainer>
      
    </ProductContainerStyled>
  );
}
