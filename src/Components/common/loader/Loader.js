import React from "react";
import { LoaderContainer, LoaderStyled } from "./styledLoader";

export default function Loader({ height }) {
  return (
    <LoaderContainer $containerheight={height}>
      <LoaderStyled></LoaderStyled>
    </LoaderContainer>
  );
};

Loader.defaultProps = {
  height: "auto"
}
