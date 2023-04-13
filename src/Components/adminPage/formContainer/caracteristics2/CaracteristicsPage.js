import React from 'react'
import Caracteristic from './Caracteristic'
import { CaracteristicsPageContainer } from './styledCaracteristics';

export default function CaracteristicsPage({ page, isChecked, handleCheck }) {
  return (
    <CaracteristicsPageContainer>
      {page.map((caract) => (
            <Caracteristic
              key={caract.id}
              caracteristica={caract}
              isChecked={isChecked(caract)}
              handleCheck={() => handleCheck(caract)}
            />
          ))}
    </CaracteristicsPageContainer>
  )
}
