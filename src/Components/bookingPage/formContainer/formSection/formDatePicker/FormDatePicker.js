import React from "react";
import DatepickerBooking from "./datePicker/DatePickerBooking";
import { FormDatePickerContainer } from "./StyledFormDatePicker";

export default function FormDatePicker({
  reservas,
  formData,
  setFormData,
}) {
  return (
    <FormDatePickerContainer>
      <h3>Seleccioná tu fecha de reserva</h3>
      <DatepickerBooking
        reservas={reservas}
        formData={formData}
        setFormData={setFormData}
      />
    </FormDatePickerContainer>
  );
}
