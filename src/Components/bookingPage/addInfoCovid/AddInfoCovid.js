import React from "react";
import AddInfo from "./addInfo/AddInfo";
import CovidCheckBox from "./covidCheckBox/CovidCheckBox";
import { AddInfoCovidContainer } from "./styledAddInfoCovid";

export default function AddInfoCovid({ formData, setFormData }) {
  return (
    <AddInfoCovidContainer>
      <AddInfo formData={formData} setFormData={setFormData} />
      <CovidCheckBox formData={formData} setFormData={setFormData} />
    </AddInfoCovidContainer>
  );
}
