import React from "react";
import {
  FormUserDataContainer,
  InputLabelContainer,
  InputsContainer,
  UserDataInput,
  UserDataLabel,
} from "./styledFormUserData";

export default function FormUserData() {
  return (
    <FormUserDataContainer>
      <h3>Completá tus datos</h3>
      <InputsContainer>
        <InputLabelContainer>
          <UserDataLabel>Nombre</UserDataLabel>
          <UserDataInput />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel>Apellido</UserDataLabel>
          <UserDataInput />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel>Correo electrónico</UserDataLabel>
          <UserDataInput />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel>Ciudad</UserDataLabel>
          <UserDataInput />
        </InputLabelContainer>
      </InputsContainer>
    </FormUserDataContainer>
  );
}
