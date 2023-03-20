import React from 'react'
import AddInfo from './addInfo/AddInfo'
import CovidCheckBox from './covidCheckBox/CovidCheckBox'
import { AddInfoCovidContainer } from './styledAddInfoCovid'

export default function AddInfoCovid() {
  return (
    <AddInfoCovidContainer>
      <AddInfo />
      <CovidCheckBox />
    </AddInfoCovidContainer>
  )
}
