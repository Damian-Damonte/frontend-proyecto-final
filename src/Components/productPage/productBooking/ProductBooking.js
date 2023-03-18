import React from "react";
import DatepickerBooking from "./datePicker/DatePickerBooking";
import {
  BookingSection,
  BtnBookingContainer,
  ProductBookingContainer,
} from "./styledProductBooking";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductBooking({ reservas }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const toProductBooking = () => {
    navigate(`/producto/${id}/reserva`);
  };
  return (
    <ProductBookingContainer>
      <h3>Fechas disponibles</h3>
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
