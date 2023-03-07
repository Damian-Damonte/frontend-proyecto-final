import React from 'react'
import ProductCard from './ProductCard'
import { ProductContainerStyled } from './styledProductSection'

export default function ProductContainer() {
  return (
    <ProductContainerStyled>
      <ProductCard />
    </ProductContainerStyled>
  )
}
