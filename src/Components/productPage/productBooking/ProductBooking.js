import React, { useContext } from "react";
import UserContext from "../../../context/user.context";
import DatepickerBooking from "./datePicker/DatePickerBooking";
import {
  BookingSection,
  BtnBookingContainer,
  ProductBookingContainer,
} from "./styledProductBooking";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../../Routes";

export default function ProductBooking({ reservas }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const toProductBooking = () => {
    if (user.token) {
      navigate(`/producto/${id}/reserva`);
    } else {
      setUser({ ...user, toBooking: `/producto/${id}/reserva` });
      navigate(routes.login);
    }
  };
  return (
    <ProductBookingContainer>
      <h3>Fechas disponibles {user.token}</h3>
      <BookingSection>
        <DatepickerBooking reservas={reservas} />

        <BtnBookingContainer>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <button onClick={toProductBooking}>Iniciar reserva</button>
        </BtnBookingContainer>
      </BookingSection>
    </ProductBookingContainer>
  );
}
