import React, { useState } from "react";
import FormField from "../Components/forms/FormField";
import FormPasswordField from "../Components/forms/FormPasswordField";
import { singinValidations } from "../utils/singinValidations";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes";
import {
  FormContainer,
  FormSinginNamesFileds,
  FormUser,
  SubmitSection,
} from "../Components/forms/styledForms";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const initialErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export default function FormSingIn() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toLogin = () => {
    navigate(routes.login);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = singinValidations(form);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      setErrors(initialErrors);
      console.log("LOGIN CORRECTO");
      toLogin();
    } else {
      setErrors(errors);
    }
  };

  return (
    <FormContainer>
      <FormUser singin onSubmit={handleSubmit}>
        <h1>Crear cuenta</h1>

        <FormSinginNamesFileds>
          <FormField
            fieldName="Nombre"
            id="firstName"
            handleChange={handleChange}
            errors={errors}
            form={form}
            inputType="text"
          />
          <FormField
            fieldName="Apellido"
            id="lastName"
            handleChange={handleChange}
            errors={errors}
            form={form}
            inputType="text"
          />
        </FormSinginNamesFileds>

        <FormField
          fieldName="Correo electrónico"
          id="email"
          handleChange={handleChange}
          errors={errors}
          form={form}
          inputType="email"
        />
        <FormPasswordField
          fieldName="Contraseña"
          id="password"
          handleChange={handleChange}
          errors={errors}
          form={form}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />
        <FormPasswordField
          fieldName="Confirmar contraseña"
          id="passwordConfirm"
          handleChange={handleChange}
          errors={errors}
          form={form}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />

        <SubmitSection singin>
          <button type="submit">Crear cuenta</button>
          <p>
            ¿Ya tiene una cuenta?
            <span onClick={toLogin}> Iniciar sesión</span>
          </p>
        </SubmitSection>
      </FormUser>
    </FormContainer>
  );
}
