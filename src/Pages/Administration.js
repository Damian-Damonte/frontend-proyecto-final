import React, { useState } from "react";
import AdminHeader from "../Components/adminPage/adminHeader/AdminHeader";
import Coordinates from "../Components/adminPage/formContainer/coordinates/Coordinates";
import FormContainer from "../Components/adminPage/formContainer/FormContainer";
import GeneralInfo from "../Components/adminPage/formContainer/formGeneralInfo/GeneralInfo";
import AdminMainContainer from "../Components/adminPage/mainContainer/AdminMainContainer";
import { createProductValidations } from "./validations/createProductValidations";

const productInitialForm = {
  nombre: "",
  categoria: null,
  direccion: "",
  ciudad: null,
  titulo: "",
  precioPorNoche: "",
  descripcion: "",
  latitud: "",
  longitud:"",
  atributos: [],
  politicas: [],
  imagenes: [],
};

export default function Administration() {
  const [productForm, setProductForm] = useState(productInitialForm);
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const errors = createProductValidations(productForm);
    if (Object.keys(errors).length === 0) {
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <AdminHeader />
      <AdminMainContainer>
        <FormContainer>
          <GeneralInfo
            productForm={productForm}
            setProductForm={setProductForm}
            errors={errors}
          />
          <Coordinates
            productForm={productForm}
            setProductForm={setProductForm}
            errors={errors}
          />
        </FormContainer>
      </AdminMainContainer>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
