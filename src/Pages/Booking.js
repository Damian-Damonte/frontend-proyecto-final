import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddInfoCovid from "../Components/bookingPage/addInfoCovid/AddInfoCovid";
import BookingHeader from "../Components/bookingPage/bookingHeader/BookingHeader";
import BookingProductPolicies from "../Components/bookingPage/bookingProductPolicies/ProductPolicies";
import FormBookingContainer from "../Components/bookingPage/formContainer/FormBookingContainer";
import { useFetch2 } from "../hooks/useFetch";
import { bookingValidations } from "./validations/bookingValidations";

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

  const { id } = useParams();

  useFetch2(`/productos/${id}`, setProductState);

  const handleSubmit = () => {
    const errors = bookingValidations(formData);
    console.log(errors);
    setFormErrors(errors);
  };

  return (
    <div>
      {productState.product && (
        <>
          <BookingHeader product={productState.product} />
          <FormBookingContainer
            product={productState.product}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            formErrors={formErrors}
          />
          <AddInfoCovid formData={formData} setFormData={setFormData} />
          <BookingProductPolicies policies={productState.product.politicas} />
        </>
      )}
    </div>
  );
}
