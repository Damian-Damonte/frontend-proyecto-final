import React from "react";
import { FormContainerStyled } from "./styledFormContainer";

export default function FormContainer({ children }) {
  return <FormContainerStyled>{children}</FormContainerStyled>;
}
