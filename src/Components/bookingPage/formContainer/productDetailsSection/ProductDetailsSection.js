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
import { LoaderClassicStyled } from "../../../common/loaderClassic/styledLoaderClassic";

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
    precioPorNoche,
  } = product;

  const getTotal = () => {
    if (!checkIn || !checkOut) {
      return "-----";
    } else if (checkIn.getTime() === checkOut.getTime()) {
      return `$ ${precioPorNoche.toLocaleString()}`;
    } else {
      const unDiaEnMilisegundos = 86400000;
      const diferenciaEnMilisegundos = Math.abs(checkIn - checkOut);
      const diferenciaEnDias = Math.ceil(
        diferenciaEnMilisegundos / unDiaEnMilisegundos
      );
      return `$ ${(diferenciaEnDias * precioPorNoche).toLocaleString()}`;
    }
  };


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

              {/* <StarsContainer>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
              </StarsContainer> */}

              <LocationContainer>
                <IconContainer>
                  <Location />
                </IconContainer>
                <p>{`${direccion}, ${cityName}, ${countryName}`}</p>
              </LocationContainer>
            </ProductDetailsContainer>
            <CheckInCheckOutContainer>
              <CheckInCheckOut>
                <p>Precio base por noche</p>
                <p>{`$ ${precioPorNoche.toLocaleString()}`}</p>
              </CheckInCheckOut>
              <CheckInCheckOut>
                <p>Check in</p>
                <p>{checkIn ? dateToUserDate(checkIn) : "___ /___ /___"}</p>
              </CheckInCheckOut>
              <CheckInCheckOut>
                <p>Check out</p>
                <p>{checkOut ? dateToUserDate(checkOut) : "___ /___ /___"}</p>
              </CheckInCheckOut>
              <CheckInCheckOut>
                <p>Total</p>
                <p>{getTotal()}</p>
              </CheckInCheckOut>
            </CheckInCheckOutContainer>
            <BtnValidationContainer
              $error={Object.keys(formErrors).length || bookingState.error}
            >
              <p>
                {Object.keys(formErrors).length
                  ? "Por favor complete los campos obligatorios"
                  : "Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde"}
              </p>
              <BtnSubmit onClick={handleSubmit}>
                {bookingState.loading ? (
                  <LoaderClassicStyled
                    $size="25px"
                    $loaderColor="#fff"
                    $bgcColor="#383B58"
                    $borderWidth="3px"
                  />
                ) : (
                  "Confirmar reserva"
                )}
              </BtnSubmit>
            </BtnValidationContainer>
          </DetailsContainer>
        </DetailsImgContainer>
      </DetailSectionTitleCardContainer>
    </ProductDetailsSectionStyled>
  );
}
