import React, { useState, useContext } from "react";
import UserContext from "../context/user.context";
import FormField from "../Components/forms/FormField";
import FormPasswordField from "../Components/forms/FormPasswordField";
import { singUpValidations } from "./validations/singUpValidations";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes";
import { authSingUp } from "../service/auth";
import {
  FormContainer,
  FormSinginNamesFileds,
  FormUser,
  SubmitSection,
} from "../Components/forms/styledForms";
import { LoaderClassicStyled } from "../Components/common/loaderClassic/styledLoaderClassic";
import { useAuthStorage } from "../hooks/useAuthStorage";


const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export default function FormSingIn() {
  const [formData, setFormData] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const saveUserData = useAuthStorage();
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toLogin = () => {
    navigate(routes.login);
  };

  const validateCredentials = async () => {
    setLoading(true);

    const payload = {
      nombre: formData.firstName,
      apellido: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    
    const response = await authSingUp(payload);

    if (response.data?.token) {
      setLoading(false);
      saveUserData(response.data.token);
      
      user.toBooking
        ? navigate(user.toBooking, { replace: true })
        : navigate(routes.home);
    } else {
      setLoading(false);
      const errorMessage =
        response.error.message === "400"
          ? "El email ingresado ya se encuentra registrado"
          : "Lamentablemente no ha podido registrarse. Por favor, intente más tarde";
      setErrors({ singUp: errorMessage });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = singUpValidations(formData);
    if (Object.keys(errors).length === 0) {
      setErrors({});
      validateCredentials();
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
            form={formData}
            inputType="text"
          />
          <FormField
            fieldName="Apellido"
            id="lastName"
            handleChange={handleChange}
            errors={errors}
            form={formData}
            inputType="text"
          />
        </FormSinginNamesFileds>

        <FormField
          fieldName="Correo electrónico"
          id="email"
          handleChange={handleChange}
          errors={errors}
          form={formData}
          inputType="email"
        />
        <FormPasswordField
          fieldName="Contraseña"
          id="password"
          handleChange={handleChange}
          errors={errors}
          form={formData}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />
        <FormPasswordField
          fieldName="Confirmar contraseña"
          id="passwordConfirm"
          handleChange={handleChange}
          errors={errors}
          form={formData}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />

        <SubmitSection singin>
          <p>{errors.singUp}</p>
          <button type="submit">
            {loading ? (
              <LoaderClassicStyled
                $size="25px"
                $loaderColor="#fff"
                $bgcColor="#383B58"
                $borderWidth="3px"
              />
            ) : (
              "Crear cuenta"
            )}
          </button>
          <p>
            ¿Ya tiene una cuenta?
            <span onClick={toLogin}> Iniciar sesión</span>
          </p>
        </SubmitSection>
      </FormUser>
    </FormContainer>
  );
}
