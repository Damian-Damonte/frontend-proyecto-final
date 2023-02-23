import React from "react";
import { ReactComponent as ShowPassword } from "../../img/show-password.svg";

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
    <div className="form-user-field">
      <label className="form-user-label" htmlFor={id}>
        {fieldName}
      </label>

      <div className="input-user-password-container">
        <input
          className={
            errors[id]
              ? "form-user-input input-user-error"
              : "form-user-input"

          }
          id={id}
          type={showPassword ? "text" : "password"}
          value={form[id]}
          name={id}
          onChange={handleChange}
        />
        <p className="form-user-validation">{errors[id]}</p>
        {id === "password" &&
        <button
          type="button"
          className="btn-show-password"
          onClick={handleShowPassword}
        >
          <ShowPassword />
        </button>}
      </div>
    </div>
  );
}
