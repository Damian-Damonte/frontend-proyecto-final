import React from "react";
import {
  ParagraphsContainer,
  ProductDescriptionContainer,
} from "./styledProductDescription";

export default function ProductDescription({ titleDescription, description }) {
  const descriptionParagraphs = description && description.split("\n");
  return (
    <ProductDescriptionContainer>
      {titleDescription && <h3>{titleDescription}</h3>}

      <ParagraphsContainer>
        {description &&
          descriptionParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </ParagraphsContainer>
    </ProductDescriptionContainer>
  );
}
