import React from "react";
import { ReactComponent as ShowPassword } from "../../img/show-password.svg";
import { FormFieldStyled, InputPasswordContainer } from "./styledForms";

export default function FormPasswordField({
  fieldName,
  id,
  handleChange,
  errors,
  form,
  showPassword,
  handleShowPassword,
}) {
  return (
    <FormFieldStyled $error={errors[id]}>
      <label htmlFor={id}>
        {fieldName}
      </label>

      <InputPasswordContainer $showPassword={showPassword}>
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          value={form[id]}
          name={id}
          onChange={handleChange}
        />
        <p>{errors[id]}</p>
        {id === "password" &&
        <button
          type="button"
          onClick={handleShowPassword}
        >
          <ShowPassword />
        </button>}
      </InputPasswordContainer>
    </FormFieldStyled>
  );
}
