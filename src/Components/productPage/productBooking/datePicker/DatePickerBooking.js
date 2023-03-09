import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { DatePickerBookingContainer } from "./styledDatePickerBooking";
import { useWindowSize } from "../../../../hooks/useWindowSize";

registerLocale("es", es);

export default function DatepickerBooking() {
  const { width } = useWindowSize(300);

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
        excludeDateIntervals={[
          { start: new Date(2023, 2, 14), end: new Date(2023, 2, 19) },
        ]}
      >
        <div className="linea-divisoria"></div>
      </ReactDatePicker>
    </DatePickerBookingContainer>
  );
}
