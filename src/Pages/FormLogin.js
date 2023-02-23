import React, { useState, useContext } from "react";
import UserContext from "../context/user.context";
import FormField from "../Components/forms/FormField";
import FormPasswordField from "../Components/forms/FormPasswordField";
import { loginValidations } from "../utils/loginValidations";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes";

const userHardcodeado = {
  firstName:"Bruno",
  lastName: "Rodríguez",
  email:"mateofernandez@gmail.com",
}

const initialForm = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
  credentials: "",
};

export default function NewForm() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const successfulLogin = () => {
    setErrors(initialErrors);
    console.log("LOGIN CORRECTO");
    setUser(userHardcodeado);
    navigate(routes.home);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = loginValidations(form);
    if (Object.keys(errors).length === 0) {
      successfulLogin();
    } else {
      setErrors(errors);
    }
  };

  const handleChangeForm = () => {
    navigate(routes.singin);
  }

  return (
    <div className="form-container">
      <form className="form-user" onSubmit={handleSubmit}>
        <h1 className="form-user-title">Iniciar sesión</h1>
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

        <div className="form-user-submit-section">
          <p className="form-user-credential-validations">
            {errors.credentials}
          </p>
          <button type="submit" className="form-user-btn-login">
            Ingresar
          </button>
          <p className="form-user-change-form ">
            ¿Aún no tenes cuenta?
            <span onClick={handleChangeForm} className="form-user-change-form-link"> Registrate</span>
          </p>
        </div>
				
      </form>
    </div>
  );
}
