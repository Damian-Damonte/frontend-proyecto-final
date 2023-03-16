import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { DatePickerBookingContainer } from "./styledDatePickerBooking";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { apiDateToDate } from "../../../../utils/dateFormater";

registerLocale("es", es);

export default function DatepickerBooking({ reservas }) {
  const { width } = useWindowSize(300);

  const excludeDates = reservas.map((rev) => {
    return {
      start: apiDateToDate(rev.checkIn),
      end: apiDateToDate(rev.checkOut),
    };
  });

  const today = new Date();
  return (
    <DatePickerBookingContainer>
      <ReactDatePicker
        wrapperClassName="customDate"
        inline
        monthsShown={width > 768 ? 2 : 1}
        locale="es"
        minDate={today}
        readOnly={true}
        onChange={() => null}
        selected={today}
        excludeDateIntervals={excludeDates}
      >
        <div className="linea-divisoria"></div>
      </ReactDatePicker>
    </DatePickerBookingContainer>
  );
}
