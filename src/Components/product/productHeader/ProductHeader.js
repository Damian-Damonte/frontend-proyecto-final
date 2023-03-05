import React from "react";
import {
  IconContainer,
  LocationContainer,
  OpinionStarsContainer,
  ProductLocationRatingHeader,
  ProductNameHeader,
  ProductTitleContainer,
  RatingContainer,
  StarsContainer,
  TextLocationContainer,
} from "./styledProduct";
import { ReactComponent as Back } from "../../../img/icon-product-back.svg";
import { ReactComponent as Location } from "../../../img/icon-location.svg";
import { ReactComponent as StarFull } from "../../../img/icon-star-full.svg";

export default function ProductHeader() {
  return (
    <div>
      <ProductNameHeader>
        <div>
          <p>HOTEL</p>
          <h3>Hermitage Hotel</h3>
        </div>
        <Back />
      </ProductNameHeader>

      <ProductLocationRatingHeader>
        <LocationContainer>
          <IconContainer>
            <Location />
          </IconContainer>
          <TextLocationContainer>
            <p>Buenos Aires, Ciudad Autonoma de Buenos Aires, Argentina</p>
            <p>A 940 m del centro</p>
          </TextLocationContainer>
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
    </div>
  );
}
