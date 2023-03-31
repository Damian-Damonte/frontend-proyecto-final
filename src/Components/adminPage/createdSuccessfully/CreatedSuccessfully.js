import React from "react";
import {
  CreatedSuccessContainer,
  CreatedSuccessfullyStyled,
} from "./styledCreadteSuccessfully";
import { ReactComponent as Check } from "../../../img/check.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../Routes";

export default function CreatedSuccessfully() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate(routes.home);
  };
  return (
    <CreatedSuccessfullyStyled>
      <CreatedSuccessContainer>
        <Check />
        <p>Tu propiedad se ha creado con éxito</p>
        <button onClick={toHome}>Volver</button>
      </CreatedSuccessContainer>
    </CreatedSuccessfullyStyled>
  );
}
