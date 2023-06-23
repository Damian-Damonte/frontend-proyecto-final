import React from "react";
import DatepickerBooking from "./datePicker/DatePickerBooking";
import { FormDatePickerContainer } from "./StyledFormDatePicker";

export default function FormDatePicker({
  bookings,
  formData,
  setFormData,
  formErrors
}) {
  return (
    <FormDatePickerContainer>
      <h3>Seleccioná tu fecha de reserva</h3>
      <DatepickerBooking
        bookings={bookings}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
      />
    </FormDatePickerContainer>
  );
}
