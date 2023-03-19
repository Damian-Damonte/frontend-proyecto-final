import React from "react";
import FormArribalTime from "./formArrivalTime/FormArribalTime";
import FormDatePicker from "./formDatePicker/FormDatePicker";
import FormUserData from "./formUserData/FormUserData";
import { FormSectionStyled } from "./styledFormSection";

export default function FormSection({ reservas, dates, setDates }) {
  return (
    <FormSectionStyled>
      <FormUserData />
      <FormDatePicker reservas={reservas} dates={dates} setDates={setDates}/>
      <FormArribalTime />
    </FormSectionStyled>
  );
}
