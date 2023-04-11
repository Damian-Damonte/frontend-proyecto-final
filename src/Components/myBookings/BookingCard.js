import React from "react";
import {
  BookingCardStyled,
  BookingInfoContainer,
  IconContainer,
  ImgContainer,
  LocationContainer,
  BookingDetailsContainer,
  BookingDetail,
  BtnDetails,
  TitleContainer,
} from "./styledMyBookings";
import { ReactComponent as Location } from "../../img/icon-location.svg";
import { apiDateToUserDate } from "../../utils/dateFormater";
import { useNavigate } from "react-router-dom";

export default function BookingCard({ booking }) {
  const navigate = useNavigate();

  const {
    checkIn,
    checkOut,
    producto: {
      id: productoId,
      direccion,
      titulo: nombreProducto,
      categoria: { titulo: categoria },
      ciudad: {
        nombre: ciudad,
      },
      imagenes,
    },
    total,
  } = booking;

  const navigateProduct = (id) => {
    navigate(`/producto/${id}`);
  };

  return (
    <BookingCardStyled>
      <ImgContainer $imgUrl={imagenes[0].url}></ImgContainer>
      <BookingInfoContainer>
        <p>{categoria}</p>
        <TitleContainer>
          <h3>{nombreProducto}</h3>
        </TitleContainer>

        <LocationContainer>
          <IconContainer>
            <Location />
          </IconContainer>
          <p>{`${direccion}, ${ciudad}`}</p>
        </LocationContainer>

        <BookingDetailsContainer>
          <BookingDetail>
            <p>Check in</p>
            <p>{apiDateToUserDate(checkIn)}</p>
          </BookingDetail>
          <BookingDetail>
            <p>Check out</p>
            <p>{apiDateToUserDate(checkOut)}</p>
          </BookingDetail>
          <BookingDetail>
            <p>Total</p>
            <p>{`$ ${total.toLocaleString()}`}</p>
          </BookingDetail>
        </BookingDetailsContainer>

        <BtnDetails onClick={() => navigateProduct(productoId)}>Ver detalle</BtnDetails>
      </BookingInfoContainer>
    </BookingCardStyled>
  );
}
