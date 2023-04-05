import React from "react";
import AddInfo from "./addInfo/AddInfo";
import CovidCheckBox from "./covidCheckBox/CovidCheckBox";
import { AddInfoCovidContainer } from "./styledAddInfoCovid";
import { MaxWidthContainer } from "../../common/maxWidthContainer/styledMaxWidthContainer";

export default function AddInfoCovid({ formData, setFormData }) {
  return (
    <MaxWidthContainer>
      <AddInfoCovidContainer>
        <AddInfo formData={formData} setFormData={setFormData} />
        <CovidCheckBox formData={formData} setFormData={setFormData} />
      </AddInfoCovidContainer>
    </MaxWidthContainer>
  );
}
