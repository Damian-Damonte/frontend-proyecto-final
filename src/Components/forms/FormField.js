import React from "react";

export default function FormField({fieldName, id, handleChange, errors, form, inputType}) {
  return (
    <div className="form-user-field">
      <label className="form-user-label" htmlFor={id}>
        {fieldName}
      </label>
      <input
        className={errors[id] ? "form-user-input input-user-error" : "form-user-input"}
        type= {inputType}
        id= {id}
        value={form[id]}
        name={id}
        onChange={handleChange}
      />
      <p className="form-user-validation">{errors[id]}</p>
    </div>
  );
}
