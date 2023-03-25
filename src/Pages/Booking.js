import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddInfoCovid from "../Components/bookingPage/addInfoCovid/AddInfoCovid";
import BookingHeader from "../Components/bookingPage/bookingHeader/BookingHeader";
import BookingProductPolicies from "../Components/bookingPage/bookingProductPolicies/ProductPolicies";
import FormBookingContainer from "../Components/bookingPage/formContainer/FormBookingContainer";
import useFetch from "../hooks/useFetch";
import { bookingValidations } from "./validations/bookingValidations";
import { postReserva } from "../service/reservas";
import { dateToApiDate } from "../utils/dateFormater";
import SuccessBooking from "../Components/bookingPage/successBoking/SuccessBooking";
import LoaderCircles from "../Components/common/loaderCircles/LoaderCircles";
import { ErrorMessageContainer } from "../Components/bookingPage/formContainer/styledFormContainer";
import UserContext from "../context/user.context";
import { routes } from "../Routes";

const initialFormData = {
  city: "",
  checkIn: null,
  checkOut: null,
  arribalTime: "",
  addInfo: "",
  covidVaccine: false,
};

export default function Booking() {
  const [bookingState, setBookingState] = useState({});
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    loading: loadingProducto,
    error: errorProducto,
  } = useFetch(`/productos/${id}`);
  const { booking, loading: loadingBooking } = bookingState;

  const getRequestPayload = () => {
    return {
      checkIn: dateToApiDate(formData.checkIn),
      checkOut: dateToApiDate(formData.checkOut),
      horaLlegada: formData.arribalTime,
      ciudadUsuario: formData.city,
      datosExtra: formData.addInfo,
      vacunaCovid: formData.covidVaccine,
      producto: {
        id: id,
      },
      usuario: {
        id: user.id,
      },
    };
  };

  const handleSubmit = () => {
    if (!loadingBooking) {
      if (!user.token) {
        setUser({ ...user, toBooking: `/producto/${id}/reserva` });
        navigate(routes.login, { replace: true });
      }
      const errors = bookingValidations(formData);
      if (Object.keys(errors).length === 0) {
        setFormErrors({});

        postReserva(getRequestPayload(), user.token, setBookingState);
      } else {
        setFormErrors(errors);
      }
    }
  };

  return (
    <>
      {booking && <SuccessBooking />}
      <div>
        {loadingProducto && <LoaderCircles height="400px" />}
        {product && !booking && (
          <>
            <BookingHeader product={product} />
            <FormBookingContainer
              product={product}
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              formErrors={formErrors}
              bookingState={bookingState}
              user={user}
            />
            <AddInfoCovid formData={formData} setFormData={setFormData} />
            <BookingProductPolicies policies={product.politicas} />
          </>
        )}
        {errorProducto && (
          <ErrorMessageContainer>
            <img src="/assets/icon-warning.svg" alt="question icon" />
            <p>Ha ocurrido un error. Por favor, vuelva a intetar más tarde</p>
          </ErrorMessageContainer>
        )}
      </div>
    </>
  );
}
