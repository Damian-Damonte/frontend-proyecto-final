import React from "react";
import {
  LineaDivisoria,
  PoliciesContainer,
  ProductPoliciesStyled,
} from "./styledProductPolicies";
import { v4 as uuid } from "uuid";

export default function BookingProductPolicies({ policies }) {
  const policiesByType = policies.reduce((acc, politica) => {
    if (!acc[politica.tipoPolitica.nombre]) {
      acc[politica.tipoPolitica.nombre] = [];
    }
    acc[politica.tipoPolitica.nombre].push(politica);
    return acc;
  }, {});

  const paragraphToPolicy = (paragraph) => {
    const policies = paragraph.split("\n");
    return policies.map((policy) => <p key={uuid()}>{policy}</p>);
  };

  return (
    <ProductPoliciesStyled>
      <h3>Qué tenés que saber</h3>
      <LineaDivisoria></LineaDivisoria>

      <PoliciesContainer>
        {Object.keys(policiesByType).map((type) => (
          <div key={type}>
            <h4>{type}</h4>
            <div>
              {policiesByType[type].map((policy) => (
                paragraphToPolicy(policy.descripcion)
              ))}
            </div>
          </div>
        ))}
      </PoliciesContainer>
    </ProductPoliciesStyled>
  );
}
