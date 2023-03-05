import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { DatePickerBookingContainer } from "./styledDatePickerBooking";

registerLocale("es", es);

export default function DatepickerBooking({
  showCalendar,
  startDate,
  endDate,
  onChangeDate,
  handleShowCalendar,
}) {
  return (
      <DatePickerBookingContainer>
        <ReactDatePicker
          wrapperClassName="customDate"
          inline
          monthsShown={window.innerWidth > 768 ? 2 : 1}
          locale="es"
          minDate={new Date()}
        >
          <div className="linea-divisoria"></div>
        </ReactDatePicker>
      </DatePickerBookingContainer>
  );
}
