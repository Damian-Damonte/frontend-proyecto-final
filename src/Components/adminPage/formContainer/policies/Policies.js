import React from "react";
import {
  AllPoliciesContainer,
  PoliciesStyled,
  PolicyContainer,
} from "./styledPolicies";

export default function Policies({ productForm, setProductForm, errors }) {
  const handleChange = (e) => {
    setProductForm({
      ...productForm,
      politicas: { ...productForm.politicas, [e.target.name]: e.target.value },
    });
  };

  return (
    <PoliciesStyled>
      <h3>Políticas del producto</h3>
      <AllPoliciesContainer>
        <PolicyContainer>
          <h5>Normas de la casa</h5>
          <label htmlFor="normasDeLaCasa">Descripción</label>
          <textarea
            placeholder="Escriba aquí"
            id="normasDeLaCasa"
            name="normasDeLaCasa"
            onChange={handleChange}
            value={productForm.politicas.normasDeLaCasa}
          />
          <p>{errors.normasDeLaCasa}</p>
        </PolicyContainer>
        <PolicyContainer>
          <h5>Salud y seguridad</h5>
          <label htmlFor="saludYSeguridad">Descripción</label>
          <textarea
            placeholder="Escriba aquí"
            id="saludYSeguridad"
            name="saludYSeguridad"
            onChange={handleChange}
            value={productForm.politicas.saludYSeguridad}
          />
          <p>{errors.saludYSeguridad}</p>
        </PolicyContainer>
        <PolicyContainer>
          <h5>Política de cancelación</h5>
          <label htmlFor="politicaDeCancelacion">Descripción</label>
          <textarea
            placeholder="Escriba aquí"
            id="politicaDeCancelacion"
            name="politicaDeCancelacion"
            onChange={handleChange}
            value={productForm.politicas.politicaDeCancelacion}
          />
          <p>{errors.politicaDeCancelacion}</p>
        </PolicyContainer>
      </AllPoliciesContainer>
    </PoliciesStyled>
  );
}
