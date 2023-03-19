import React from 'react'
import FormSection from './formSection/FormSection'
import ProductDetailsSection from './productDetailsSection/ProductDetailsSection'
import { FormBookingContainerStyled } from './styledFormContainer'

export default function FormBookingContainer({ product, dates, setDates }) {
  return (
    <FormBookingContainerStyled>
      <FormSection reservas={product.reservas} dates={dates} setDates={setDates}/>
      <ProductDetailsSection product={product} dates={dates} />
    </FormBookingContainerStyled>
  )
}
