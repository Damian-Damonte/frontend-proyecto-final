import React from "react";
import CategorySelect from "./categorySelect/CategorySelect";
import CitySelectContainer from "./citySelect/CitySelectContainer";
import {
  DescriptionContainer,
  GeneralInfoContainer,
  GeneralInfoStyled,
  InputContainer,
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
          />
          <p>{errors.direccion}</p>
        </InputContainer>

        <InputContainer>
          <label>Ciudad</label>
          <CitySelectContainer productForm={productForm} setProductForm={setProductForm}/>
          <p>{errors.ciudad}</p>
        </InputContainer>
      </GeneralInfoContainer>

      <DescriptionContainer>
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          onChange={handleChange}
          value={productForm.descripcion}
        />
        <p>{errors.descripcion}</p>
      </DescriptionContainer>

    </GeneralInfoStyled>
  );
}
