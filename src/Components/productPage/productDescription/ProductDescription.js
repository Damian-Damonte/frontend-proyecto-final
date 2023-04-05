import React from "react";
import {
  ParagraphsContainer,
  ProductDescriptionContainer,
} from "./styledProductDescription";
import { MaxWidthContainer } from "../../common/maxWidthContainer/styledMaxWidthContainer";

export default function ProductDescription({ product }) {
  const { tituloDescripcion, descripcion } = product;
  const descriptionParagraphs = descripcion && descripcion.split("\n");
  return (
    <MaxWidthContainer $bgcolor="#fff">
      <ProductDescriptionContainer>
        {tituloDescripcion && <h3>{tituloDescripcion}</h3>}

        <ParagraphsContainer>
          {descripcion &&
            descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </ParagraphsContainer>
      </ProductDescriptionContainer>
    </MaxWidthContainer>
  );
}
