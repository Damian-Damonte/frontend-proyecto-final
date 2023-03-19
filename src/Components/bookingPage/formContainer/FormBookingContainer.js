import React from "react";
import FormSection from "./formSection/FormSection";
import ProductDetailsSection from "./productDetailsSection/ProductDetailsSection";
import { FormBookingContainerStyled } from "./styledFormContainer";

export default function FormBookingContainer({
  product,
  formData,
  setFormData
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
      />
    </FormBookingContainerStyled>
  );
}
