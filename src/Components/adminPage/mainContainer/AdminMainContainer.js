import React from 'react'
import { AdminMainContainerStyled } from './styledAdminMainContainer'

export default function AdminMainContainer({ children }) {
  return (
    <AdminMainContainerStyled>
      <h3>Crear propiedad</h3>
      {children}
    </AdminMainContainerStyled>
  )
}
