import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BtnDetails,
  CardRating,
  CardTitleStars,
  CategoryStarsContainer,
  ProductCardCaracteristics,
  ProductCardDescription,
  ProductCardDescriptionContainer,
  ProductCardLocationContainer,
  ProductCardStyled,
  ProductCardTitleRatingContainer,
  ProductImgContainer,
  StarsContainer,
} from "./styledProductSection";
import { ReactComponent as Fav } from "../../../img/icon-fav-empty.svg";
import { ReactComponent as StarFull } from "../../../img/icon-star-full.svg";
import { ReactComponent as Location } from "../../../img/icon-location.svg";
import { caracteristicIconMapper } from "../../../utils/catacteristicsIconMapper";
import { getRaitingScale } from "../../../utils/raitingScaleMapper";

export default function ProductCard({ product }) {
  const [descriptionReduced, setDescriptionReduced] = useState("");

  const navigate = useNavigate();

  const {
    id,
    titulo,
    descripcion,
    imagenes,
    categoria: { titulo: tituloCat },
    caracteristicas,
    promedioPuntuacion,
    direccion,
    coordenadas: { latitud, longitud },
  } = product;

  const navigateProduct = () => {
    navigate(`/producto/${id}`);
  };

  const descriptionReducer = () => {
    if (window.innerWidth < 768) {
      descripcion?.length > 200
        ? setDescriptionReduced(
            <p>
              {" "}
              {descripcion.substring(0, 200)}...{" "}
              <span onClick={navigateProduct}>más...</span>{" "}
            </p>
          )
        : setDescriptionReduced(<p>{descripcion}</p>);
    } else {
      descripcion?.length > 120
        ? setDescriptionReduced(
            <p>
              {" "}
              {descripcion.substring(0, 120)}...{" "}
              <span onClick={navigateProduct}>más...</span>{" "}
            </p>
          )
        : setDescriptionReduced(<p>{descripcion}</p>);
    }
  };

  useEffect(() => {
    descriptionReducer();
    window.addEventListener("resize", descriptionReducer);
    return () => {
      window.removeEventListener("resize", descriptionReducer);
    };
  }, [descripcion]);

  const urlMap = `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`;

  return (
    <ProductCardStyled>
      <ProductImgContainer $imgUrl={imagenes[0].url}>
        <Fav />
      </ProductImgContainer>

      <ProductCardDescriptionContainer>
        <ProductCardTitleRatingContainer>
          <CardTitleStars>
            <CategoryStarsContainer>
              <p>{tituloCat}</p>
              <StarsContainer>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
              </StarsContainer>
            </CategoryStarsContainer>
            <h3>{titulo}</h3>
          </CardTitleStars>

          <CardRating>
            <p>{promedioPuntuacion ? promedioPuntuacion : "-"} </p>
            <p>{getRaitingScale(promedioPuntuacion)}</p>
          </CardRating>
        </ProductCardTitleRatingContainer>

        <ProductCardLocationContainer>
          <p>
            <Location /> {direccion} -
          </p>
          <a target="_blank" href={urlMap} rel="noopener noreferrer">
            &nbsp; MOSTRAR EN EL MAPA
          </a>
        </ProductCardLocationContainer>

        <ProductCardCaracteristics>
          {caracteristicas.map((caract) => (
            <div key={caract.id}>{caracteristicIconMapper(caract.nombre)}</div>
          ))}
        </ProductCardCaracteristics>

        <ProductCardDescription>{descriptionReduced}</ProductCardDescription>

        <BtnDetails onClick={navigateProduct}>Ver detalles</BtnDetails>
      </ProductCardDescriptionContainer>
    </ProductCardStyled>
  );
}
