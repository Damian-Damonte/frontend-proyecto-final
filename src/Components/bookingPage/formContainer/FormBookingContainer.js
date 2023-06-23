import React from "react";
import FormSection from "./formSection/FormSection";
import ProductDetailsSection from "./productDetailsSection/ProductDetailsSection";
import { FormBookingContainerStyled } from "./styledFormContainer";
import { MaxWidthContainer } from "../../common/maxWidthContainer/styledMaxWidthContainer";

export default function FormBookingContainer({
  product,
  formData,
  setFormData,
  handleSubmit,
  formErrors,
  bookingState,
  user,
}) {
  return (
    <MaxWidthContainer>
      <FormBookingContainerStyled>
        <FormSection
          bookings={product.bookings}
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          user={user}
        />
        <ProductDetailsSection
          product={product}
          formData={formData}
          handleSubmit={handleSubmit}
          formErrors={formErrors}
          bookingState={bookingState}
        />
      </FormBookingContainerStyled>
    </MaxWidthContainer>
  );
}
