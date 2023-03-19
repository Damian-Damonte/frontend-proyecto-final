import React from "react";
import {
  DetailsImgContainer,
  DetailSectionTitleCardContainer,
  ProductDetailsSectionStyled,
  DetailsContainer,
  LocationContainer,
  IconContainer,
  CheckInCheckOutContainer,
  CheckInCheckOut,
  BtnSubmit,
  ImgContainer,
} from "./styledProductDetailsSection";
import { ReactComponent as StarFull } from "../../../../img/icon-star-full.svg";
import { ReactComponent as Location } from "../../../../img/icon-location.svg";
import { dateToUserDate } from "../../../../utils/dateFormater";

export default function ProductDetailsSection({ product, dates }) {
  const { checkIn, checkOut } = dates;
  const {
    imagenes,
    categoria: { titulo: categoryTitle },
    titulo: productTitle,
    direccion,
    ciudad: {
      nombre: cityName,
      pais: { nombre: countryName },
    },
  } = product;
  return (
    <ProductDetailsSectionStyled>
      <DetailSectionTitleCardContainer>
        <h3>Detalle de la reserva</h3>
        <DetailsImgContainer>
          <ImgContainer $imgUrl={imagenes[0].url} />
          <DetailsContainer>
            <p>{categoryTitle.toUpperCase()}</p>
            <h4>{productTitle} damian damonte damian </h4>
            <div>
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
              <StarFull />
            </div>
            <LocationContainer>
              <IconContainer>
                <Location />
              </IconContainer>
              <p>{`${direccion}, ${cityName}, ${countryName}`}</p>
            </LocationContainer>

            <CheckInCheckOutContainer>
              <CheckInCheckOut>
                <p>Check in</p>
                <p>{checkIn ? dateToUserDate(checkIn) : "___ /___ /___"}</p>
              </CheckInCheckOut>
              <CheckInCheckOut>
                <p>Check in</p>
                <p>{checkOut ? dateToUserDate(checkOut) : "___ /___ /___"}</p>
              </CheckInCheckOut>
            </CheckInCheckOutContainer>

            <BtnSubmit>Confirmar reserva</BtnSubmit>
          </DetailsContainer>
        </DetailsImgContainer>
      </DetailSectionTitleCardContainer>
    </ProductDetailsSectionStyled>
  );
}
