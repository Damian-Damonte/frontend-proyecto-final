import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { DatePickerBookingContainer } from "./styledDatePickerBooking";
import { useWindowSize } from "../../../../../../hooks/useWindowSize";
import { apiDateToDate } from "../../../../../../utils/dateFormater";

registerLocale("es", es);

export default function DatepickerBooking({ reservas, formData, setFormData }) {
  const { width } = useWindowSize(300);
  const { checkIn, checkOut } = formData;

  const today = new Date();

  const excludeDates = reservas.map((rev) => {
    return {
      start: apiDateToDate(rev.checkIn),
      end: apiDateToDate(rev.checkOut),
    };
  });

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    if (!start || !end) {
      setFormData({ ...formData, checkIn: start, checkOut: end });
      return;
    }

    const excludedDateIntervals = excludeDates || [];
    const isExcluded = excludedDateIntervals.some((interval) => {
      return (
        (start >= interval.start && start <= interval.end) ||
        (end >= interval.start && end <= interval.end) ||
        (start < interval.start && end > interval.end)
      );
    });

    isExcluded
      ? setFormData({ ...formData, checkIn: null, checkOut: null })
      : setFormData({ ...formData, checkIn: start, checkOut: end });
  };

  return (
    <DatePickerBookingContainer>
      <ReactDatePicker
        wrapperClassName="customDate"
        inline
        monthsShown={width > 768 ? 2 : 1}
        locale="es"
        minDate={today}
        excludeDateIntervals={excludeDates}
        selectsRange
        startDate={checkIn}
        endDate={checkOut}
        onChange={onChangeDate}
      >
        <div className="linea-divisoria"></div>
      </ReactDatePicker>
    </DatePickerBookingContainer>
  );
}
