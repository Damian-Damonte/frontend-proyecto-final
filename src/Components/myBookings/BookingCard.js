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
    product: {
      id: productoId,
      address,
      title: productTitle,
      category: { name: category },
      city: {
        name: cityName,
      },
      images,
    },
    total,
  } = booking;

  const navigateProduct = (id) => {
    navigate(`/producto/${id}`);
  };

  return (
    <BookingCardStyled>
      <ImgContainer $imgUrl={images[0].url}></ImgContainer>
      <BookingInfoContainer>
        <p>{category}</p>
        <TitleContainer>
          <h3>{productTitle}</h3>
        </TitleContainer>

        <LocationContainer>
          <IconContainer>
            <Location />
          </IconContainer>
          <p>{`${address}, ${cityName}`}</p>
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
            <p></p>
            <p>{`$ ${total.toLocaleString()}`}</p>
          </BookingDetail>
        </BookingDetailsContainer>

        <BtnDetails onClick={() => navigateProduct(productoId)}>Ver detalle</BtnDetails>
      </BookingInfoContainer>
    </BookingCardStyled>
  );
}
