import React from 'react'
import CategorySelect from './CategorySelect/CategorySelect'
import { DescriptionContainer, GeneralInfoContainer, GeneralInfoStyled, InputContainer } from './styledGeneralInfo'

export default function GeneralInfo() {
  return (
    <GeneralInfoStyled>
      <GeneralInfoContainer>

        <InputContainer>
          <label>Nombre de la propiedad</label>
          <input />
        </InputContainer>
        <InputContainer>
          <label>Categoria</label>
          <CategorySelect />
        </InputContainer>
        <InputContainer>
          <label>Dirección</label>
          <input />
        </InputContainer>
        <InputContainer>
          <label>Ciudad</label>
          <input />
        </InputContainer>

      </GeneralInfoContainer>
      <DescriptionContainer>
        <label>Descripción</label>
        <textarea></textarea>
      </DescriptionContainer>
    </GeneralInfoStyled>
  )
}
