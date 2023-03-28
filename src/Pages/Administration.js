import React from "react";
import AdminHeader from "../Components/adminPage/adminHeader/AdminHeader";
import FormContainer from "../Components/adminPage/formContainer/FormContainer";
import GeneralInfo from "../Components/adminPage/formContainer/formGeneralInfo/GeneralInfo";
import AdminMainContainer from "../Components/adminPage/mainContainer/AdminMainContainer";

export default function Administration() {
  return (
    <div>
      <AdminHeader />
      <AdminMainContainer>
        <FormContainer>
          <GeneralInfo />
        </FormContainer>
      </AdminMainContainer>
    </div>
  );
}
