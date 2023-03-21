import React from "react";
import FormSection from "./formSection/FormSection";
import ProductDetailsSection from "./productDetailsSection/ProductDetailsSection";
import { FormBookingContainerStyled } from "./styledFormContainer";

export default function FormBookingContainer({
  product,
  formData,
  setFormData,
  handleSubmit,
  formErrors,
  bookingState
}) {
  return (
    <FormBookingContainerStyled>
      <FormSection
        reservas={product.reservas}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
      />
      <ProductDetailsSection
        product={product}
        formData={formData}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        bookingState={bookingState}
      />
    </FormBookingContainerStyled>
  );
}
