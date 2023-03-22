import React from "react";
import { LoaderContainer, LoaderStyled } from "./styledLoaderCircles";

export default function LoaderCircles({ height }) {
  return (
    <LoaderContainer $containerheight={height}>
      <LoaderStyled></LoaderStyled>
    </LoaderContainer>
  );
};

LoaderCircles.defaultProps = {
  height: "auto"
}
