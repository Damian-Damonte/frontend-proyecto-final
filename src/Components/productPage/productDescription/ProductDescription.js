import React from "react";
import {
  ParagraphsContainer,
  ProductDescriptionContainer,
} from "./styledProductDescription";
import { MaxWidthContainer } from "../../common/maxWidthContainer/styledMaxWidthContainer";

export default function ProductDescription({ title, description }) {
  const descriptionParagraphs = description && description.split("\n");
  return (
    <MaxWidthContainer $bgcolor="#fff">
      <ProductDescriptionContainer>
        {title && <h3>{title}</h3>}

        <ParagraphsContainer>
          {description &&
            descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </ParagraphsContainer>
      </ProductDescriptionContainer>
    </MaxWidthContainer>
  );
}
