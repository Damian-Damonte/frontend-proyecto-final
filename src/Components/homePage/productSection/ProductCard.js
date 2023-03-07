import React from "react";
import {
  CardRating,
  CardTitleStars,
  CategoryStarsContainer,
  ProductCardDescriptionContainer,
  ProductCardStyled,
  ProductCardTitleRatingContainer,
  ProductImgContainer,
  StarsContainer,
} from "./styledProductSection";
import { ReactComponent as Fav } from "../../../img/icon-fav-empty.svg";
import { ReactComponent as StarFull } from "../../../img/icon-star-full.svg";

export default function ProductCard() {
  return (
    <ProductCardStyled>
      <ProductImgContainer>
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <Fav />
      </ProductImgContainer>

      <ProductCardDescriptionContainer>
      
        <ProductCardTitleRatingContainer>

          <CardTitleStars>
            <CategoryStarsContainer>
              <p>HOTEL</p>
              <StarsContainer>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
              </StarsContainer>
            </CategoryStarsContainer>
            <h3>Hermitage Hotel</h3>
          </CardTitleStars>

          <CardRating>
            <p>8</p>
            <p>Muy bueno</p>
          </CardRating>

        </ProductCardTitleRatingContainer>

      </ProductCardDescriptionContainer>
    </ProductCardStyled>
  );
}
