import React, { useState, useContext } from "react";
import UserContext from "../context/user.context";
import FormField from "../Components/forms/FormField";
import FormPasswordField from "../Components/forms/FormPasswordField";
import { loginValidations } from "../utils/loginValidations";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes";
import {
  FormContainer,
  FormUser,
  SubmitSection,
} from "../Components/forms/styledForms";

const userHardcoded = {
  firstName: "Bruno",
  lastName: "Rodríguez",
  email: "mateofernandez@gmail.com",
};

const initialForm = {
  email: "",
  password: "",
};

const initialErrors = {
  email: null,
  password: null,
  credentials: null,
};

export default function NewForm() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toSingin = () => {
    navigate(routes.singin);
  };

  const successfulLogin = () => {
    setErrors(initialErrors);
    console.log("LOGIN CORRECTO");
    setUser(userHardcoded);
    navigate(routes.home);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = loginValidations(form);
    if (Object.keys(errors).length === 0) {
      successfulLogin();
    } else {
      setErrors(errors);
    }
  };

  return (
    <FormContainer>
      <FormUser className="form-user" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
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

        <SubmitSection>
          <p>{errors.credentials}</p>
          <button type="submit">Ingresar</button>
          <p>
            ¿Aún no tenes cuenta?
            <span onClick={toSingin}> Registrate</span>
          </p>
        </SubmitSection>
      </FormUser>
    </FormContainer>
  );
}
