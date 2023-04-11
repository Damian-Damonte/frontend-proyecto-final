import React, { useState, useContext, useEffect } from "react";
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
import {
  BtnSubmit,
  SubmitContainer,
} from "../Components/adminPage/formContainer/styledFormContainer";
import CreatedSuccessfully from "../Components/adminPage/createdSuccessfully/CreatedSuccessfully";
import { MaxWidthContainer } from "../Components/common/maxWidthContainer/styledMaxWidthContainer";
import CaracteristicsContainer2 from "../Components/adminPage/formContainer/caracteristics2/CaracteristicsContainer2";
import ImgContainer from "../Components/adminPage/formContainer/productImages/ImgContainer";

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

export default function Administration() {
  const [productState, setProductState] = useState({});
  const [productForm, setProductForm] = useState(productInitialForm);
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    user: { token },
  } = useContext(UserContext);

  const getPayload = () => {
    let politicas = [];

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

    const imagenes = productForm.imagenes.map((img, index) => {
      return { titulo: `imagen ${index}`, url: img.url, orden: index };
    });

    const payload = {
      titulo: productForm.nombre,
      tituloDescripcion: productForm.titulo,
      descripcion: productForm.descripcion,
      direccion: productForm.direccion,
      precioPorNoche: productForm.precioPorNoche,
      categoria: productForm.categoria,
      ciudad: productForm.ciudad,
      caracteristicas: productForm.caracteristicas,
      imagenes: imagenes,
      politicas,
      coordenadas: {
        latitud: productForm.latitud,
        longitud: productForm.longitud,
      },
    };

    console.log(payload);

    return payload;
  };

  const handleSubmit = () => {
    if (!productState.loading) {
      const errors = createProductValidations(productForm);
      console.log(errors);
      if (Object.keys(errors).length === 0) {
        setErrors({});
        postProduct(getPayload(), token, setProductState);
      } else {
        setErrors(errors);
      }
    }
  };

  const childProps = {
    productForm,
    setProductForm,
    errors,
  };

  return (
    <>
      {productState.product && <CreatedSuccessfully />}
      {!productState.product && (
        <div>
          <AdminHeader />
          <MaxWidthContainer>
            <AdminMainContainer>
              <FormContainer>
                <GeneralInfo {...childProps} />
                <Coordinates {...childProps} />
                {/* <CaracteristicsContainer {...childProps} /> */}
                <CaracteristicsContainer2 {...childProps} />
                <Policies {...childProps} />
                <ImgContainer images={images} setImages={setImages} {...childProps} />

                <SubmitContainer
                  $error={Object.keys(errors).length || productState.error}
                >
                  <p>
                    {Object.keys(errors).length
                      ? "Complete los campos obligatorios"
                      : "Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde"}
                  </p>
                  <BtnSubmit onClick={handleSubmit}>
                    {productState.loading ? (
                      <LoaderClassicStyled
                        $size="25px"
                        $loaderColor="#fff"
                        $bgcColor="#383B58"
                        $borderWidth="3px"
                      />
                    ) : (
                      "Crear"
                    )}
                  </BtnSubmit>
                </SubmitContainer>
              </FormContainer>
            </AdminMainContainer>
          </MaxWidthContainer>
        </div>
      )}
    </>
  );
}
