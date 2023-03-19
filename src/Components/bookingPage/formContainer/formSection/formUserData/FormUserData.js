import React from "react";
import {
  FormUserDataContainer,
  InputLabelContainer,
  InputsContainer,
  UserDataInput,
  UserDataLabel,
} from "./styledFormUserData";

export default function FormUserData({ formData, setFormData }) {
  const user = {
    email: "damontedamian@gmail.com",
    nombre: "Damian",
    apellido: "Damonte",
  };

  const handleChangeCity = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };
  console.log("render");
  return (
    <FormUserDataContainer>
      <h3>Completá tus datos</h3>
      <InputsContainer>
        <InputLabelContainer>
          <UserDataLabel>Nombre</UserDataLabel>
          <UserDataInput value={user.nombre} disabled />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel>Apellido</UserDataLabel>
          <UserDataInput value={user.apellido} disabled />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel>Correo electrónico</UserDataLabel>
          <UserDataInput value={user.email} disabled />
        </InputLabelContainer>

        <InputLabelContainer>
          <UserDataLabel htmlFor="city">Ciudad</UserDataLabel>
          <UserDataInput
            id="city"
            type="text"
            value={formData.city}
            onChange={handleChangeCity}
          />
        </InputLabelContainer>
      </InputsContainer>
    </FormUserDataContainer>
  );
}
