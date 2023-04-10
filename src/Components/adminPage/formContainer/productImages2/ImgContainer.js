import React, { useState } from "react";
import {
  AddImage,
  AddImgContainer,
  AddedImgContainer,
  ImgContainerStyled,
  InputBtnContainer,
} from "./styledProductImg";
import { ReactComponent as AddImageIcon } from "../../../../img/icon-add-caracteristic.svg";
import ImgItem from "./ImgItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialImgs = [
  {
    id: "1",
    text: "React.js",
    url: "https://grupo1-digitalbooking-s3-images.s3.amazonaws.com/hoteles/ApaTokio/267561410.jpg",
  },
  {
    id: "2",
    text: "HTML/CSS",
    url: "https://grupo1-digitalbooking-s3-images.s3.amazonaws.com/hoteles/ApaTokio/267562611.jpg",
  },
  {
    id: "3",
    text: "AWS",
    url: "https://grupo1-digitalbooking-s3-images.s3.amazonaws.com/hoteles/ApaTokio/267562762.jpg",
  },
  {
    id: "4",
    text: "JavaScript",
    url: "https://grupo1-digitalbooking-s3-images.s3.amazonaws.com/hoteles/ApaTokio/267562958.jpg",
  },
  {
    id: "5",
    text: "AWS",
    url: "https://grupo1-digitalbooking-s3-images.s3.amazonaws.com/hoteles/ApaTokio/267562762.jpg",
  },
  {
    id: "6",
    text: "JavaScript",
    url: "https://grupo1-digitalbooking-s3-images.s3.amazonaws.com/hoteles/ApaTokio/267562958.jpg",
  },
  {
    id: "7",
    text: "JavaScript",
    url: "https://grupo1-digitalbooking-s3-images.s3.amazonaws.com/hoteles/ApaTokio/267562958.jpg",
  },
];

export default function ImgContainer() {
  const [imgs, setImgs] = useState(initialImgs);

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
    setImgs(reorder(imgs, source.index, destination.index));
  };

  const removeImg = (id) => {
    setImgs(imgs.filter((img) => img.id !== id));
  };

  return (
    <ImgContainerStyled>
      <h3>Cargar imágenes</h3>

      <AddImgContainer>
        <InputBtnContainer>
          <input placeholder="Agregue imágenes" />
          <AddImage $static={true}>
            <AddImageIcon />
          </AddImage>
        </InputBtnContainer>
        <p></p>
      </AddImgContainer>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="imgs" direction="horizontal">
          {(droppableProvided) => (
            <AddedImgContainer
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {imgs.map((img, index) => (
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
