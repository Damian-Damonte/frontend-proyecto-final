import React, { useState } from "react";
import {
  AddImage,
  AddImgContainer,
  AddedImgContainer,
  EmptyImages,
  ImgContainerStyled,
  InputBtnContainer,
} from "./styledProductImg";
import ImgItem from "./ImgItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { v4 as uuid } from "uuid";
import { LoaderClassicStyled } from "../../../common/loaderClassic/styledLoaderClassic";
import { HiPlus as Wifi } from "react-icons/hi";

export default function ImgContainer({ productForm, setProductForm, errors  }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const { imagenes } = productForm;

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    setProductForm({...productForm, imagenes: reorder(imagenes, source.index, destination.index)})
  };

  const removeImg = (id) => {
    setProductForm({...productForm, imagenes: imagenes.filter((img) => img.id !== id)})
  };

  const handleChange = (e) => {
    error && setError("");
    setCurrentUrl(e.target.value);
  };

  const isValidImageUrl = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const addImage = () => {
    if (!loading && currentUrl) {
      setloading(true);
      isValidImageUrl(currentUrl).then((isValid) => {
        if (isValid) {
          setError("");
          setProductForm({...productForm, imagenes:[...imagenes, { id: uuid(), url: currentUrl }]})
          setCurrentUrl("");
        } else {
          setError("La url ingresada no corresponde a una imagen accesible");
        }
        setloading(false);
      });
    } else if (!loading) {
      setError("Ingrese la url de la imagen");
    }
  };

  return (
    <ImgContainerStyled>
      <h3>Cargar imágenes</h3>

      <AddImgContainer>
        <InputBtnContainer>
          <input
            placeholder="Agregue imágenes"
            onChange={handleChange}
            value={currentUrl}
            type="text"
          />
          <AddImage onClick={addImage} $loading={loading}>
            {loading ? (
              <LoaderClassicStyled
                $size="25px"
                $loaderColor="#fff"
                $bgcColor="#383B58"
                $borderWidth="3px"
              />
            ) : (
              <Wifi />
            )}
          </AddImage>
        </InputBtnContainer>
        <p>{ error || (imagenes.length === 0 && errors.imagenes) }</p>
      </AddImgContainer>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="imagenes" direction="horizontal">
          {(droppableProvided) => (
            <AddedImgContainer
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              $empty={imagenes.length === 0}
            >

              {imagenes.length === 0 && (
                <EmptyImages>
                  <p>Agrega imágenes haciendo clic en el botón +</p>
                </EmptyImages>
              )}

              {imagenes.map((img, index) => (
                <Draggable key={img.id} draggableId={img.id} index={index}>
                  {(draggableProvider) => (
                    <ImgItem
                      img={img}
                      removeImg={removeImg}
                      isPrincipal={index === 0}
                      {...draggableProvider.draggableProps}
                      ref={draggableProvider.innerRef}
                      {...draggableProvider.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}

              {droppableProvided.placeholder}
            </AddedImgContainer>
          )}
        </Droppable>
      </DragDropContext>
    </ImgContainerStyled>
  );
}
