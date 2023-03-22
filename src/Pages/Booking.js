import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddInfoCovid from "../Components/bookingPage/addInfoCovid/AddInfoCovid";
import BookingHeader from "../Components/bookingPage/bookingHeader/BookingHeader";
import BookingProductPolicies from "../Components/bookingPage/bookingProductPolicies/ProductPolicies";
import FormBookingContainer from "../Components/bookingPage/formContainer/FormBookingContainer";
import { useFetch2 } from "../hooks/useFetch";
import { bookingValidations } from "./validations/bookingValidations";
import { postReserva } from "../service/reservas";
import { dateToApiDate } from "../utils/dateFormater";
import SuccessBooking from "../Components/bookingPage/successBoking/SuccessBooking";

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

  const { id } = useParams();

  const userIdHardocoded = 2;
  const tokenHardcoded =
    "eyJhbGciOiJIUzI1NiJ9.eyJhcGVsbGlkbyI6ImRhbW9udGUiLCJub21icmUiOiJkYW1pYW4iLCJzdWIiOiJkYW1pYW5AZ21haWwuY29tIiwiaWF0IjoxNjc5NDUwOTc4LCJleHAiOjE2Nzk1MzczNzh9.zSAXczyufGrBjfSjx3kU11kXQoUUjMVfZHm4QqTELLI";
  useFetch2(`/productos/${id}`, setProductState);

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
        id: userIdHardocoded,
      },
    };
  };

  const handleSubmit = () => {
    if (!bookingState.loading) {
      const errors = bookingValidations(formData);
      if (Object.keys(errors).length === 0) {
        setFormErrors({});
        postReserva(getRequestPayload(), tokenHardcoded, setBookingState);
      } else {
        setFormErrors(errors);
      }
    }
  };

  return (
    <>
      {bookingState.booking && <SuccessBooking />}
      <div>
        {(productState.product && !bookingState.booking) && (
          <>
            <BookingHeader product={productState.product} />
            <FormBookingContainer
              product={productState.product}
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              formErrors={formErrors}
              bookingState={bookingState}
            />
            <AddInfoCovid formData={formData} setFormData={setFormData} />
            <BookingProductPolicies policies={productState.product.politicas} />
          </>
        )}
      </div>
    </>
  );
}
