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
  BtnValidationContainer,
} from "./styledProductDetailsSection";
import { ReactComponent as StarFull } from "../../../../img/icon-star-full.svg";
import { ReactComponent as Location } from "../../../../img/icon-location.svg";
import { dateToUserDate } from "../../../../utils/dateFormater";
import LoaderClassic from "../../../../Components/common/loaderClassic/LoaderClassic";

export default function ProductDetailsSection({
  product,
  formData,
  handleSubmit,
  formErrors,
  bookingState,
}) {
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
              <h4>{productTitle}</h4>
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

            <BtnValidationContainer
              $error={Object.keys(formErrors).length || bookingState.error}
            >
              <p>
                {Object.keys(formErrors).length
                  ? "Por favor complete los campos obligatorios"
                  : "Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde"
                  }

              </p>
              <BtnSubmit onClick={handleSubmit}>
                {bookingState.loading ? <LoaderClassic /> : "Confirmar reserva"}
              </BtnSubmit>
            </BtnValidationContainer>
          </DetailsContainer>

        </DetailsImgContainer>
        
      </DetailSectionTitleCardContainer>
    </ProductDetailsSectionStyled>
  );
}
