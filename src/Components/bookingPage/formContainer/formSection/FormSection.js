import React from "react";
import FormArribalTime from "./formArrivalTime/FormArribalTime";
import FormDatePicker from "./formDatePicker/FormDatePicker";
import FormUserData from "./formUserData/FormUserData";
import { FormSectionStyled } from "./styledFormSection";

export default function FormSection({ reservas, formData, setFormData }) {
  return (
    <FormSectionStyled>
      <FormUserData formData={formData} setFormData={setFormData} />
      <FormDatePicker
        reservas={reservas}
        formData={formData}
        setFormData={setFormData}
      />
      <FormArribalTime formData={formData} setFormData={setFormData}/>
    </FormSectionStyled>
  );
}
