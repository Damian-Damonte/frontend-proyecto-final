import React from "react";
import {
  CheckBoxContainer,
  CovidCheckBoxContainer,
  CovidDescription,
} from "./styledCovidCheckBox";

export default function CovidCheckBox() {
  return (
    <CovidCheckBoxContainer>
      <h3>Covid-19</h3>
      <CheckBoxContainer>
        <input type="checkbox" />
        <p>¿Estás vacunado contra el covid-19?</p>
      </CheckBoxContainer>
      <CovidDescription>
        <p>
          Las regulaciones para la prevención y control del COVID-19 varían
          según el país del alojamiento. Es importante informarse sobre las
          regulaciones y políticas aplicables.
        </p>
      </CovidDescription>
    </CovidCheckBoxContainer>
  );
}
