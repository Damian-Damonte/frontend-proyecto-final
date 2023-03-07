import React from "react";
import ProductCard from "./ProductCard";
import {
  ProductCardContainer,
  ProductContainerStyled,
} from "./styledProductSection";

const text = "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";

export default function ProductContainer() {
  return (
    <ProductContainerStyled>
      <h4>Recomendaciones</h4>

      <ProductCardContainer>
        <ProductCard text={text}/>
        <ProductCard text={text}/>
        <ProductCard text={text}/>
        <ProductCard text={text}/>
      </ProductCardContainer>
      
    </ProductContainerStyled>
  );
}
