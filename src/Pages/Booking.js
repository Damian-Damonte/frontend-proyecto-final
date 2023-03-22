import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddInfoCovid from "../Components/bookingPage/addInfoCovid/AddInfoCovid";
import BookingHeader from "../Components/bookingPage/bookingHeader/BookingHeader";
import BookingProductPolicies from "../Components/bookingPage/bookingProductPolicies/ProductPolicies";
import FormBookingContainer from "../Components/bookingPage/formContainer/FormBookingContainer";
import { useFetch2 } from "../hooks/useFetch";
import { bookingValidations } from "./validations/bookingValidations";
import { postReserva } from "../service/reservas";
import { dateToApiDate } from "../utils/dateFormater";
import SuccessBooking from "../Components/bookingPage/successBoking/SuccessBooking";
import Loader from "../Components/common/loader/Loader";
import { ErrorMessageContainer } from "../Components/bookingPage/formContainer/styledFormContainer";
import UserContext from "../context/user.context";
import { routes } from "../Routes";

const initialProductState = {
  product: null,
  loading: false,
  error: null,
};

const initialFormData = {
  city: "",
  checkIn: null,
  checkOut: null,
  arribalTime: "",
  addInfo: "",
  covidVaccine: false,
};

export default function Booking() {
  const [productState, setProductState] = useState(initialProductState);
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [bookingState, setBookingState] = useState({});
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const userIdHardocoded = 2;
  const tokenHardcoded =
    "eyJhbGciOiJIUzI1NiJ9.eyJhcGVsbGlkbyI6ImRhbW9udGUiLCJub21icmUiOiJkYW1pYW4iLCJzdWIiOiJkYW1pYW5AZ21haWwuY29tIiwiaWF0IjoxNjc5NDUwOTc4LCJleHAiOjE2Nzk1MzczNzh9.zSAXczyufGrBjfSjx3kU11kXQoUUjMVfZHm4QqTELLI";
  useFetch2(`/productos/${id}`, setProductState);

  useEffect(() => {
    if (!user.token) {
      setUser({ ...user, toBooking: `/producto/${id}/reserva` });
      navigate(routes.login, {replace: true});
    }
  }, [id, user]);

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
    if (!bookingState.loading) {
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
      {bookingState.booking && <SuccessBooking />}
      <div>
        {productState.loading && <Loader height="400px" />}
        {productState.product && !bookingState.booking && (
          <>
            <BookingHeader product={productState.product} />
            <FormBookingContainer
              product={productState.product}
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              formErrors={formErrors}
              bookingState={bookingState}
              user={user}
            />
            <AddInfoCovid formData={formData} setFormData={setFormData} />
            <BookingProductPolicies policies={productState.product.politicas} />
          </>
        )}
        {productState.error && (
          <ErrorMessageContainer>
            <img src="/assets/icon-warning.svg" alt="question icon" />
            <p>Ha ocurrido un error. Por favor, vuelva a intetar más tarde</p>
          </ErrorMessageContainer>
        )}
      </div>
    </>
  );
}
