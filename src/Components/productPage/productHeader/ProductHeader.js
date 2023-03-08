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

export default function ProductHeader({ handleFav, handleShare, category, title, city, nearby }) {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <ProductNameHeader>
        <div>
          <p>{category.toUpperCase()}</p>
          <h3>{title}</h3>
        </div>
        <Back onClick={goBack}/>
      </ProductNameHeader>

      <ProductLocationRatingHeader>
        <LocationContainer>
          <IconContainer>
            <Location />
          </IconContainer>
          <TextLocationContainer>
            <p>{`${city.nombre}, ${city.pais.nombre}`}</p>
            {/* {nearby && <p>A 940 m del centro</p>} */}
            {/* actualizar API con cercanias */}
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
