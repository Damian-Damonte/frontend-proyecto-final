import React, { useState } from "react";
import FormField from "../Components/forms/FormField";
import FormPasswordField from "../Components/forms/FormPasswordField";
import { singinValidations } from "../utils/singinValidations";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = singinValidations(form);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      setErrors(initialErrors);
      console.log("LOGIN CORRECTO");
    } else {
      setErrors(errors);
    }
  };

  const handleChangeForm = () => {
    navigate(routes.login);
  };

  return (
    <div className="form-container">
      <form className="form-user form-singin" onSubmit={handleSubmit}>
        <h1 className="form-user-title form-singin-title">Crear cuenta</h1>

        <div className="form-singin-names-field">
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
        </div>

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

        <div className="form-user-submit-section">
          <button type="submit" className="form-user-btn-login form-singin-btn-submit">
            Crear cuenta
          </button>
          <p className="form-user-change-form ">
            ¿Ya tiene una cuenta?
            <span onClick={handleChangeForm} className="form-user-change-form-link"> Iniciar sesión</span>
          </p>
        </div>
      </form>
    </div>
  );
}
