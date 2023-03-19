import React from "react";
import FormDatePicker from "./formDatePicker/FormDatePicker";
import FormUserData from "./formUserData/FormUserData";
import { FormSectionStyled } from "./styledFormSection";

export default function FormSection({ reservas, dates, setDates }) {
  return (
    <FormSectionStyled>
      <FormUserData />
      <FormDatePicker reservas={reservas} dates={dates} setDates={setDates}/>
    </FormSectionStyled>
  );
}
