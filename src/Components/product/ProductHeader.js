import React from "react";
import {
  HeaderContainer,
  LocationContainer,
  OpinionStarsContainer,
  ProductLocationRatingHeader,
  ProductNameHeader,
  ProductTitleContainer,
  RatingContainer,
  StarsContainer,
} from "./styledProduct";
import { ReactComponent as Back } from "../../img/icon-product-back.svg";
import { ReactComponent as Location } from "../../img/icon-location.svg";
import { ReactComponent as StarFull } from "../../img/icon-star-full.svg";

export default function ProductHeader() {
  return (
    <HeaderContainer>
      <ProductNameHeader>
        <div>
          <p>HOTEL</p>
          <h3>Hermitage Hotel</h3>
        </div>
        <Back />
      </ProductNameHeader>

      <ProductLocationRatingHeader>
        <LocationContainer>
          <Location />
          <p>Buenos Aires, Ciudad Autonoma de Beuenos Aires, Argentina</p>
        </LocationContainer>

        <RatingContainer>
          <OpinionStarsContainer>
            <p>Muy bueno</p>
            <StarsContainer>
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
            </StarsContainer>
          </OpinionStarsContainer>
          <p>8</p>
        </RatingContainer>
      </ProductLocationRatingHeader>
    </HeaderContainer>
  );
}
