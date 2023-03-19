import React from 'react'
import FormSection from './formSection/FormSection'
import ProductDetailsSection from './productDetailsSection/ProductDetailsSection'
import { FormBookingContainerStyled } from './styledFormContainer'

export default function FormBookingContainer({ product }) {
  return (
    <FormBookingContainerStyled>
      <FormSection />
      <ProductDetailsSection product={product} />
    </FormBookingContainerStyled>
  )
}
