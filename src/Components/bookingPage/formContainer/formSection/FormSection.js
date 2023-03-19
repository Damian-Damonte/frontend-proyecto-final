import React from "react";
import FormUserData from "./formUserData/FormUserData";
import { FormSectionStyled } from "./styledFormSection";

export default function FormSection() {
  return (
    <FormSectionStyled>
      <FormUserData />
    </FormSectionStyled>
  );
}
