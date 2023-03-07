import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BtnShareFavContainer,
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
import { ReactComponent as Share } from "../../../img/icon-share.svg";
import { ReactComponent as Fav } from "../../../img/icon-fav-empty.svg";

export default function ProductHeader({ handleFav, handleShare }) {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <ProductNameHeader>
        <div>
          <p>HOTEL</p>
          <h3>Hermitage Hotel</h3>
        </div>
        <Back onClick={goBack}/>
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

      <BtnShareFavContainer>
        <Share onClick={handleShare} />
        <Fav onClick={handleFav}/>
      </BtnShareFavContainer>
    </div>
  );
}
