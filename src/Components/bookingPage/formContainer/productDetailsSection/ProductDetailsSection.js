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
  ProductDetailsContainer,
  StarsContainer,
} from "./styledProductDetailsSection";
import { ReactComponent as StarFull } from "../../../../img/icon-star-full.svg";
import { ReactComponent as Location } from "../../../../img/icon-location.svg";
import { dateToUserDate } from "../../../../utils/dateFormater";

export default function ProductDetailsSection({ product, formData, handleSubmit}) {
  const { checkIn, checkOut } = formData;
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
            <ProductDetailsContainer>
              <p>{categoryTitle.toUpperCase()}</p>
              <h4>{productTitle} damian damonte </h4>
              <StarsContainer>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
              </StarsContainer>
              <LocationContainer>
                <IconContainer>
                  <Location />
                </IconContainer>
                <p>{`${direccion}, ${cityName}, ${countryName}`}</p>
              </LocationContainer>
            </ProductDetailsContainer>

            <CheckInCheckOutContainer>
              <CheckInCheckOut>
                <p>Check in</p>
                <p>{checkIn ? dateToUserDate(checkIn) : "___ /___ /___"}</p>
              </CheckInCheckOut>
              <CheckInCheckOut>
                <p>Check out</p>
                <p>{checkOut ? dateToUserDate(checkOut) : "___ /___ /___"}</p>
              </CheckInCheckOut>
            </CheckInCheckOutContainer>

            <BtnSubmit onClick={handleSubmit}>Confirmar reserva</BtnSubmit>
          </DetailsContainer>
        </DetailsImgContainer>
      </DetailSectionTitleCardContainer>
    </ProductDetailsSectionStyled>
  );
}
