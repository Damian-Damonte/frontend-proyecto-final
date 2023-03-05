import styled from "styled-components";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

registerLocale("es", es);

export const DatePickerBookingStyled = styled(ReactDatePicker)`

`

export const DatePickerBookingContainer = styled.div`
  .react-datepicker__day--today {
    color: red;
  }
`

