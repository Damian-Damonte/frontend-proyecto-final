import React from "react";
import FormSection from "./formSection/FormSection";
import ProductDetailsSection from "./productDetailsSection/ProductDetailsSection";
import { FormBookingContainerStyled } from "./styledFormContainer";

export default function FormBookingContainer({
  product,
  formData,
  setFormData,
  handleSubmit
}) {
  return (
    <FormBookingContainerStyled>
      <FormSection
        reservas={product.reservas}
        formData={formData}
        setFormData={setFormData}
      />
      <ProductDetailsSection
        product={product}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </FormBookingContainerStyled>
  );
}
