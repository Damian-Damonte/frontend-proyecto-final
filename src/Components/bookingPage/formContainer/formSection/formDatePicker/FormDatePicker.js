import React from 'react'
import DatepickerBooking from './datePicker/DatePickerBooking'
import { FormDatePickerContainer } from './StyledFormDatePicker'

export default function FormDatePicker({ reservas, dates, setDates }) {
  return (
    <FormDatePickerContainer>
      <h3>Seleccioná tu fecha de reserva</h3>
      <DatepickerBooking reservas={reservas} dates={dates} setDates={setDates}/>
    </FormDatePickerContainer>
  )
}
