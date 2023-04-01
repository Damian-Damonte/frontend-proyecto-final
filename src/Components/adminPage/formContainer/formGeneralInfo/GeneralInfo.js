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

  const handleChandeNumber = (e) => {
    const pattern = /^[0-9]*\.?[0-9]*$/;
    pattern.test(e.target.value) && handleChange(e);
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
            type="text"
            id="precioPorNoche"
            name="precioPorNoche"
            onChange={handleChandeNumber}
            value={productForm.precioPorNoche}
            placeholder="Precio por noche"
          />
          <p>$</p>
          <p>{errors.precioPorNoche}</p>
        </InputContainerPrice>
      </GeneralInfoContainer>

      <DescriptionContainer
        $error={productForm.descripcion.length > 0 ? "" : errors.descripcion}
      >
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          onChange={handleChange}
          value={productForm.descripcion}
          placeholder="Escribir aquí"
          maxLength={1200}
        />

        <p>
          {productForm.descripcion.length > 0
            ? 1200 - productForm.descripcion.length
            : errors.descripcion
            ? errors.descripcion
            : 1200 - productForm.descripcion.length}
        </p>
      </DescriptionContainer>
    </GeneralInfoStyled>
  );
}
