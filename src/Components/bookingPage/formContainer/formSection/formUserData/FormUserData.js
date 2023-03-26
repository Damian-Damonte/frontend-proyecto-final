import React from "react";
import {
  FormUserDataContainer,
  InputLabelContainer,
  InputsContainer,
  UserDataInput,
  UserDataLabel,
} from "./styledFormUserData";

export default function FormUserData({
  formData,
  setFormData,
  formErrors,
  user,
}) {
  const { firstName, lastName, email } = user;

  const handleChangeCity = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };

  return (
    <FormUserDataContainer>
      <h3>Completá tus datos</h3>
      <InputsContainer>
        <InputLabelContainer>
          <UserDataLabel>Nombre</UserDataLabel>
          <UserDataInput value={firstName || ""} disabled />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel>Apellido</UserDataLabel>
          <UserDataInput value={lastName || ""} disabled />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel>Correo electrónico</UserDataLabel>
          <UserDataInput value={email || ""} disabled />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel htmlFor="city">Ciudad</UserDataLabel>
          <UserDataInput
            id="city"
            type="text"
            value={formData.city}
            onChange={handleChangeCity}
            $error={formErrors.city}
            placeholder="Ingresá tu ciudad"
          />
        </InputLabelContainer>
      </InputsContainer>
    </FormUserDataContainer>
  );
}
