import React from "react";
import {
  PoliciesContainer,
  ProductPoliciesStyled,
} from "./styledProductPolicies";

export default function ProductPolicies({ policiesHardcoded }) {
  // const policiesByType =policiesHardcoded.reduce((acc, politica) => {
  //   if (!acc[politica.tipoPolitica.nombre]) {
  //     acc[politica.tipoPolitica.nombre] = [];
  //   }
  //   acc[politica.tipoPolitica.nombre].push(politica);
  //   return acc;
  // }, {});

  // console.log(policiesByType);

  return (
    <ProductPoliciesStyled>
      <h3>Qué tenés que saber</h3>

      <PoliciesContainer>
        <div>
          <h4>Normas de la casa</h4>
          <div>
            <p>Check-out 10:00</p>
            <p>look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
            <p>No fumar</p>
          </div>
        </div>

        <div>
          <h4>Normas de la casa</h4>
          <div>
            <p>Check-out 10:00</p>
            <p>look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
            <p>No fumar</p>
          </div>
        </div>

        <div>
          <h4>Normas de la casa</h4>
          <div>
            <p>Check-out 10:00</p>
            <p>look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
            <p>No fumar</p>
          </div>
        </div>
      </PoliciesContainer>
    </ProductPoliciesStyled>
  );
}
