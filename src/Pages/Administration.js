import React, { useState, useContext } from "react";
import AdminHeader from "../Components/adminPage/adminHeader/AdminHeader";
import CaracteristicsContainer from "../Components/adminPage/formContainer/caracteristics/CaracteristicsContainer";
import Coordinates from "../Components/adminPage/formContainer/coordinates/Coordinates";
import FormContainer from "../Components/adminPage/formContainer/FormContainer";
import GeneralInfo from "../Components/adminPage/formContainer/formGeneralInfo/GeneralInfo";
import AdminMainContainer from "../Components/adminPage/mainContainer/AdminMainContainer";
import { createProductValidations } from "./validations/createProductValidations";
import { postProduct } from "../service/productos";
import UserContext from "../context/user.context";
import { LoaderClassicStyled } from "../Components/common/loaderClassic/styledLoaderClassic";
import Policies from "../Components/adminPage/formContainer/policies/Policies";

const productInitialForm = {
  nombre: "",
  categoria: null,
  direccion: "",
  ciudad: null,
  titulo: "",
  precioPorNoche: "",
  descripcion: "",
  latitud: "",
  longitud: "",
  caracteristicas: [],
  politicas: {
    normasDeLaCasa: "",
    saludYSeguridad: "",
    politicaDeCancelacion: "",
  },
  imagenes: [],
};

const imgHardcoded = [
  {
    titulo: "imagen 1",
    url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80%27 ",
  },
  {
    titulo: "imagen 2",
    url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80%27",
  },
];

const politicasHardcoded = [
  {
    descripcion: "norma de la casa 1",
    tipoPolitica: {
      id: 3,
    },
  },
  {
    descripcion: "politica especial 1",
    tipoPolitica: {
      id: 2,
    },
  },
];

export default function Administration() {
  const [productState, setProductState] = useState({});
  const [productForm, setProductForm] = useState(productInitialForm);
  const [errors, setErrors] = useState({});
  const {
    user: { token },
  } = useContext(UserContext);

  const getPayload = () => {
    let caracteristicas = [];
    let politicas = [];

    if (productForm.caracteristicas.length) {
      caracteristicas = productForm.caracteristicas
        .filter((caract) => caract.caracteristicSelected !== null)
        .map((caract) => {
          return { id: caract.caracteristicSelected.id };
        });
    }

    politicas.push({
      descripcion: productForm.politicas.normasDeLaCasa,
      tipoPolitica: { id: 1 },
    });
    politicas.push({
      descripcion: productForm.politicas.politicaDeCancelacion,
      tipoPolitica: { id: 2 },
    });
    politicas.push({
      descripcion: productForm.politicas.saludYSeguridad,
      tipoPolitica: { id: 3 },
    });

    const payload = {
      titulo: productForm.nombre,
      tituloDescripcion: productForm.titulo,
      descripcion: productForm.descripcion,
      direccion: productForm.direccion,
      precioPorNoche: productForm.precioPorNoche,
      categoria: productForm.categoria,
      ciudad: productForm.ciudad,
      caracteristicas,
      imagenes: imgHardcoded,
      politicas,
      coordenadas: {
        latitud: productForm.latitud,
        longitud: productForm.longitud,
      },
    };

    return payload;
  };

  const handleSubmit = () => {
    if (!productState.loading) {
      const errors = createProductValidations(productForm);
      if (Object.keys(errors).length === 0) {
        setErrors({});
        postProduct(getPayload(), token, setProductState);
        console.log(getPayload());
      } else {
        setErrors(errors);
        console.log(Object.values(productForm.politicas));
      }
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
          <CaracteristicsContainer
            productForm={productForm}
            setProductForm={setProductForm}
            errors={errors}
          />
          <Policies
            productForm={productForm}
            setProductForm={setProductForm}
            errors={errors}
          />
        </FormContainer>
      </AdminMainContainer>
      <button onClick={handleSubmit}>submit</button>

      {productState.loading && (
        <LoaderClassicStyled
          $size="25px"
          $loaderColor="#fff"
          $bgcColor="#383B58"
          $borderWidth="3px"
        />
      )}
    </div>
  );
}
