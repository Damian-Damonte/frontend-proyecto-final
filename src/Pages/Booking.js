import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddInfoCovid from "../Components/bookingPage/addInfoCovid/AddInfoCovid";
import BookingHeader from "../Components/bookingPage/bookingHeader/BookingHeader";
import FormBookingContainer from "../Components/bookingPage/formContainer/FormBookingContainer";
import { useFetch2 } from "../hooks/useFetch";

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
  additionalInfo: "",
  covidVaccine: false,
};

export default function Booking() {
  const [productState, setProductState] = useState(initialProductState);
  const [formData, setFormData] = useState(initialFormData);

  const { id } = useParams();

  useFetch2(`/productos/${id}`, setProductState);

  return (
    <div>
      {productState.product && (
        <>
          <BookingHeader product={productState.product} />
          <FormBookingContainer
            product={productState.product}
            formData={formData}
            setFormData={setFormData}
          />
          <AddInfoCovid />
        </>
      )}
    </div>
  );
}
