import React from "react";
import FormArribalTime from "./formArrivalTime/FormArribalTime";
import FormDatePicker from "./formDatePicker/FormDatePicker";
import FormUserData from "./formUserData/FormUserData";
import { FormSectionStyled } from "./styledFormSection";

export default function FormSection({
  bookings,
  formData,
  setFormData,
  formErrors,
  user
}) {
  return (
    <FormSectionStyled>
      <FormUserData
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        user={user}
      />
      <FormDatePicker
        bookings={bookings}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
      />
      <FormArribalTime formData={formData} setFormData={setFormData} formErrors={formErrors}/>
    </FormSectionStyled>
  );
}
