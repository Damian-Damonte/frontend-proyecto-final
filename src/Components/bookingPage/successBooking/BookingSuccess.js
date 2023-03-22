import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../Routes";
import {
  SuccessBookingContainer,
  SuccessContainer,
  CardContainer,
} from "./StyledBookingSuccess";
import { ReactComponent as Check } from "../../../img/check.svg";

function BookingSuccess() {
  return (
    <CardContainer>
      <SuccessBookingContainer>
        <SuccessContainer>
          <spam>
            <Check />
          </spam>
          <h3>¡Muchas gracias!</h3>
          <p>Su reserva se ha realizado con éxito</p>
          <Link to={routes.home}>
            <button type="submit">ok</button>
          </Link>
        </SuccessContainer>
      </SuccessBookingContainer>
    </CardContainer>
  );
}

export default BookingSuccess;
