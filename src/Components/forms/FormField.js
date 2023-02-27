import React from "react";
import { FormFieldStyled } from "./styledForms";

export default function FormField({fieldName, id, handleChange, errors, form, inputType}) {
  return (
    <FormFieldStyled $error={errors[id]}>
      <label  htmlFor={id}>
        {fieldName}
      </label>
      <input
        type= {inputType}
        id= {id}
        value={form[id]}
        name={id}
        onChange={handleChange}
      />
      <p>{errors[id]}</p>
    </FormFieldStyled>
  );
}
