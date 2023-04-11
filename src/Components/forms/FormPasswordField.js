import React from "react";
import { FormFieldStyled, InputPasswordContainer } from "./styledForms";
import { BsEye as  Show} from "react-icons/bs";

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
          <Show />
        </button>}
      </InputPasswordContainer>
    </FormFieldStyled>
  );
}
