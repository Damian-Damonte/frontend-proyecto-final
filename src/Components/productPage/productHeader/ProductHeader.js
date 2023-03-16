import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BtnShareFavContainer,
  IconContainer,
  LocationContainer,
  OpinionStarsContainer,
  ProductLocationRatingHeader,
  ProductNameHeader,
  RatingContainer,
  StarsContainer,
  TextLocationContainer,
} from "./styledProduct";
import { ReactComponent as Back } from "../../../img/icon-product-back.svg";
import { ReactComponent as Location } from "../../../img/icon-location.svg";
import { ReactComponent as StarFull } from "../../../img/icon-star-full.svg";
import { ReactComponent as Share } from "../../../img/icon-share.svg";
import { ReactComponent as Fav } from "../../../img/icon-fav-empty.svg";
import { getRaitingScale } from "../../../utils/raitingScaleMapper";

export default function ProductHeader({ handleFav, handleShare, product }) {
  const {
    categoria,
    ciudad,
    titulo,
    direccion,
    promedioPuntuacion
  } = product;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <ProductNameHeader>
        <div>
          <p>{categoria.titulo.toUpperCase()}</p>
          <h3>{titulo}</h3>
        </div>
        <Back onClick={goBack} />
      </ProductNameHeader>

      <ProductLocationRatingHeader>
        <LocationContainer>
          <IconContainer>
            <Location />
          </IconContainer>
          <TextLocationContainer>
            <p>{`${ciudad.nombre}, ${ciudad.pais.nombre}`}</p>
            <p>{direccion}</p>
          </TextLocationContainer>
        </LocationContainer>
        <RatingContainer>
          <OpinionStarsContainer>
            <p>{getRaitingScale(promedioPuntuacion)}</p>
            <StarsContainer>
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
            </StarsContainer>
          </OpinionStarsContainer>
          <p>{promedioPuntuacion ? promedioPuntuacion : "-"}</p>
        </RatingContainer>
      </ProductLocationRatingHeader>

      <BtnShareFavContainer>
        <Share onClick={handleShare} />
        <Fav onClick={handleFav} />
      </BtnShareFavContainer>
    </div>
  );
}
