import React from "react";
import DatepickerBooking from "./datePicker/DatePickerBooking";
import { BookingSection, BtnBookingContainer, ProductBookingContainer } from "./styledProductBooking";

export default function ProductBooking({ reservas }) {
  console.log(reservas);
  return (
    <ProductBookingContainer>
      <h3>Fechas disponibles</h3>
      <BookingSection>
        <DatepickerBooking reservas={reservas} />

        <BtnBookingContainer>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <button>Iniciar reserva</button>
        </BtnBookingContainer>
      </BookingSection>
      
    </ProductBookingContainer>
  );
}
