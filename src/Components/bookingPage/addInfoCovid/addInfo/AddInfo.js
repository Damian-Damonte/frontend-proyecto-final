import React from "react";
import { AddInfoContainer, AddInfoStyled } from "./styledAddInfo";

export default function AddInfo() {
  return (
    <AddInfoStyled>
    <h3>Información adicional</h3>
      <AddInfoContainer>
        {/* <p>¿Querés dejarle alguna información al venderdor?</p> */}
        <p>Ingresá cualquier información adicional que desees compartir con el anfitrión o vendedor</p>
        <textarea placeholder="Opcional" />
      </AddInfoContainer>
    </AddInfoStyled>
  );
}
