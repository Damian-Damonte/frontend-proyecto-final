import React from "react";
import { AddInfoContainer, AddInfoStyled } from "./styledAddInfo";

export default function AddInfo({ formData, setFormData }) {

  const handleChangeAddInfo = (e) => {
    setFormData({ ...formData, addInfo: e.target.value });
  };

  return (
    <AddInfoStyled>
    <h3>Información adicional</h3>
      <AddInfoContainer>
        <p>Ingresá cualquier información adicional que desees compartir con el propietario o anfitrión</p>
        <textarea placeholder="(Opcional)" value={formData.addInfo} onChange={handleChangeAddInfo} />
      </AddInfoContainer>
    </AddInfoStyled>
  );
}
