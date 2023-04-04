import React from "react";
import {
  SuccessBookingContainer,
  SuccessBookingStyled,
} from "./styledSuccessBooking";
import { ReactComponent as Check } from "../../../img/check.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../Routes";

export default function SuccessBooking() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate(routes.home);
  };

  return (
    <SuccessBookingStyled>
      <SuccessBookingContainer>
        <Check />
        <h4>¡Muchas gracias!</h4>
        <p>Su reserva se ha realizado con éxito</p>
        <button onClick={toHome}>Volver al inicio</button>
      </SuccessBookingContainer>
    </SuccessBookingStyled>
  );
}
