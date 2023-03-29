import React from "react";
import CategorySelect from "./categorySelect/CategorySelect";
import CitySelectContainer from "./citySelect/CitySelectContainer";
import {
  DescriptionContainer,
  GeneralInfoContainer,
  GeneralInfoStyled,
  InputContainer,
  InputContainerPrice,
} from "./styledGeneralInfo";

export default function GeneralInfo({ productForm, setProductForm, errors }) {
  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  return (
    <GeneralInfoStyled>
      <GeneralInfoContainer>
        <InputContainer>
          <label htmlFor="nombre">Nombre de la propiedad</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={handleChange}
            value={productForm.nombre}
            placeholder="Nombre"
          />
          <p>{errors.nombre}</p>
        </InputContainer>

        <InputContainer>
          <label>Categoría</label>
          <CategorySelect
            productForm={productForm}
            setProductForm={setProductForm}
          />
          <p>{errors.categoria}</p>
        </InputContainer>

        <InputContainer>
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            onChange={handleChange}
            value={productForm.direccion}
            placeholder="Dirección"

          />
          <p>{errors.direccion}</p>
        </InputContainer>

        <InputContainer>
          <label>Ciudad</label>
          <CitySelectContainer
            productForm={productForm}
            setProductForm={setProductForm}
          />
          <p>{errors.ciudad}</p>
        </InputContainer>

        <InputContainer>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            onChange={handleChange}
            value={productForm.titulo}
            placeholder="Título"
          />
          <p>{errors.titulo}</p>
        </InputContainer>

        <InputContainerPrice>
          <label htmlFor="precioPorNoche">Precio por noche</label>
          <input
            type="number"
            id="precioPorNoche"
            name="precioPorNoche"
            onChange={handleChange}
            value={productForm.precioPorNoche}
            placeholder="Precio por noche"
          />
          <p>$</p>
          <p>{errors.precioPorNoche}</p>
        </InputContainerPrice>
      </GeneralInfoContainer>

      <DescriptionContainer>
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          onChange={handleChange}
          value={productForm.descripcion}
          placeholder="Descripción del producto"
        />
        <p>{errors.descripcion}</p>
      </DescriptionContainer>
    </GeneralInfoStyled>
  );
}
