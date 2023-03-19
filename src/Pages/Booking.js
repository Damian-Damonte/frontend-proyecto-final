import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingHeader from "../Components/bookingPage/bookingHeader/BookingHeader";
import FormBookingContainer from "../Components/bookingPage/formContainer/FormBookingContainer";
import { useFetch2 } from "../hooks/useFetch";
import { dateToUserDate } from "../utils/dateFormater";

const initialProductState = {
  product: null,
  loading: false,
  error: null,
};

const initialDates = {
  checkIn: null,
  checkOut: null,
};

const initialFormData = {
  city:"",
  checkIn: null,
  checkOut: null,
  
}

export default function Booking() {
  const [productState, setProductState] = useState(initialProductState);
  const [dates, setDates] = useState(initialDates);
  const [formData, setFormData] = useState({});

  const { id } = useParams();

  useFetch2(`/productos/${id}`, setProductState);

  return (
    <div>
      {productState.product && (
        <>
          <BookingHeader product={productState.product} />
          <FormBookingContainer product={productState.product} dates={dates} setDates={setDates}/>
        </>
      )}
    </div>
  );
}
