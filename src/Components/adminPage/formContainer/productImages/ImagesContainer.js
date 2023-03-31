import {
  AddImage,
  AllImagesContainer,
  ImageCardStyled,
  InputBtnContainer,
  ProductImagesStyled,
} from "./styledProductImages";
import { ReactComponent as AddImageIcon } from "../../../../img/icon-add-caracteristic.svg";
import { v4 as uuid } from "uuid";
import { ReactComponent as RemoveImageIcon } from "../../../../img/icon-cross-caracteristic.svg";

export default function ImagesContainer({
  images: currentImages,
  setImages: setCurrentImages,
  errors,
}) {
  const addImg = () => {
    const id = uuid();
    setCurrentImages({ ...currentImages, [id]: { id, url: "" } });
  };

  const removeImg = (id) => {
    const newCurrentImages = { ...currentImages };
    delete newCurrentImages[id];
    setCurrentImages(newCurrentImages);
  };

  const changeImgUrl = (e) => {
    setCurrentImages({
      ...currentImages,
      [e.target.name]: { id: e.target.name, url: e.target.value },
    });
  };

  return (
    <ProductImagesStyled>
      <h3>Cargar imágenes</h3>
      <AllImagesContainer $countImg={Object.keys(currentImages).length}>
        {Object.values(currentImages).map((img) => (
          <ImageCardStyled key={img.id}>
            <InputBtnContainer>
              <input
                placeholder="Insertar https://"
                name={img.id}
                value={currentImages[img.id].url}
                onChange={changeImgUrl}
              />
              <AddImage>
                <RemoveImageIcon onClick={() => removeImg(img.id)} />
              </AddImage>
            </InputBtnContainer>
            <p>{errors.urlImagenes?.[img.id]}</p>
          </ImageCardStyled>
        ))}
      </AllImagesContainer>

      <ImageCardStyled
        $marginTop={Object.values(currentImages).length}
      >
        <InputBtnContainer $static={true}>
          <input placeholder="Agregue imágenes" disabled />
          <AddImage onClick={addImg} $static={true}>
            <AddImageIcon />
          </AddImage>
        </InputBtnContainer>
        <p></p>
      </ImageCardStyled>
      <p>{errors.imagenes}</p>
    </ProductImagesStyled>
  );
}
