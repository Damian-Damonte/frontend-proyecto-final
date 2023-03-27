import React, { useState, useContext } from "react";
import UserContext from "../context/user.context";
import FormField from "../Components/forms/FormField";
import FormPasswordField from "../Components/forms/FormPasswordField";
import { loginValidations } from "./validations/loginValidations";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes";
import {
  ErrorContainer,
  FormContainer,
  FormUser,
  SubmitSection,
} from "../Components/forms/styledForms";
import { ReactComponent as IconWarn } from "../img/warn-login.svg";
import { authLogin } from "../service/auth";
import { LoaderClassicStyled } from "../Components/common/loaderClassic/styledLoaderClassic";
import { useUserDataStorage } from "../hooks/useUserDataStorage";

const initialForm = {
  email: "",
  password: "",
};

export default function NewForm() {
  const [formData, setFormData] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const saveUserData = useUserDataStorage();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toSingUp = () => {
    navigate(routes.singin);
  };

  const validateCredentials = async () => {
    setLoading(true);

    const response = await authLogin(formData);

    if (response.data?.token) {
      setLoading(false);
      saveUserData(response.data.token)

      user.toBooking
        ? navigate(user.toBooking, { replace: true })
        : navigate(routes.home);
    } else {
      setLoading(false);
      const errorMessage =
        response.error.message === "403"
          ? "Credenciales incorrectas. Por favor, vuelva a intentar"
          : "Lamentablemente no ha podido iniciar sesión. Por favor, intente más tarde";
      setErrors({ login: errorMessage });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = loginValidations(formData);
    if (Object.keys(errors).length === 0) {
      setErrors({});
      validateCredentials();
    } else {
      setErrors(errors);
    }
  };

  return (
    <FormContainer>
      {user.toBooking && (
        <ErrorContainer>
          <IconWarn />
          <p>Para realizar una reserva necesitas estar logueado</p>
        </ErrorContainer>
      )}
      <FormUser className="form-user" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
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
        <SubmitSection>
          <p>{errors.credentials || errors.login}</p>
          <button type="submit">
            {loading ? (
              <LoaderClassicStyled
                $size="25px"
                $loaderColor="#fff"
                $bgcColor="#383B58"
                $borderWidth="3px"
              />
            ) : (
              "Ingresar"
            )}
          </button>
          <p>
            ¿Aún no tenes cuenta?
            <span onClick={toSingUp}> Registrate</span>
          </p>
        </SubmitSection>
      </FormUser>
    </FormContainer>
  );
}
