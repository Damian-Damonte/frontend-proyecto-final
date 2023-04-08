import React from 'react'
import Caracteristic2 from './Caracteristic2'
import { CaracteristicsPageContainer } from './styledCaracteristics';

export default function CaracteristicsPage({ page, isChecked, handleCheck }) {
  return (
    <CaracteristicsPageContainer>
      {page.map((caract) => (
            <Caracteristic2
              key={caract.id}
              caracteristica={caract}
              isChecked={isChecked(caract)}
              handleCheck={() => handleCheck(caract)}
            />
          ))}
    </CaracteristicsPageContainer>
  )
}
