import DatepickerBooking from "./datePicker/DatePickerBooking";
import {
  BookingSection,
  BtnBookingContainer,
  ProductBookingContainer,
} from "./styledProductBooking";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../../context/user.context";
import { routes } from "../../../Routes";
import { useContext } from "react"

export default function ProductBooking({ reservas }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const toBookingPage = () => {
    if (!user.token) {
      setUser({ ...user, toBooking: `/producto/${id}/reserva` });
      navigate(routes.login, { replace: true });
    } else {
      navigate(`/producto/${id}/reserva`);
    }
  };

  return (
    <ProductBookingContainer>
      <h3>Fechas disponibles</h3>
      <BookingSection>
        <DatepickerBooking reservas={reservas} />
        <BtnBookingContainer>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <button onClick={toBookingPage}>Iniciar reserva</button>
        </BtnBookingContainer>
      </BookingSection>
    </ProductBookingContainer>
  );
}
