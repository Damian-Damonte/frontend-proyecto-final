import React from "react";
import {
  PoliciesContainer,
  ProductPoliciesStyled,
} from "./styledProductPolicies";


export default function ProductPolicies({ policies }) {
  const policiesByType =policies.reduce((acc, politica) => {
    if (!acc[politica.tipoPolitica.nombre]) {
      acc[politica.tipoPolitica.nombre] = [];
    }
    acc[politica.tipoPolitica.nombre].push(politica);
    return acc;
  }, {});

  return (
    <ProductPoliciesStyled>
      <h3>Qué tenés que saber</h3>

      <PoliciesContainer>

        {
          Object.keys(policiesByType).map(type => (
            <div key={type}>
              <h4>{type}</h4>
              <div>
                {policiesByType[type].map(policie => (<p key={policie.id}>{policie.descripcion}</p>))}
              </div>
            </div>
          ))
        }
        
      </PoliciesContainer>
    </ProductPoliciesStyled>
  );
}
