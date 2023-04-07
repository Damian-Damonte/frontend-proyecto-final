import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BtnDetails,
  CardRating,
  CardTitleStars,
  CategoryRatingContainer,
  CategoryStarsContainer,
  DirectionContainer,
  IconContainer,
  ProductCardCaracteristics,
  ProductCardDescription,
  ProductCardDescriptionContainer,
  ProductCardLocationContainer,
  ProductCardStyled,
  ProductCardTitleRatingContainer,
  ProductImgContainer,
  RatingContainer,
  StarsContainer,
  TitleContainer,
} from "./styledProductSection";
import { ReactComponent as Fav } from "../../../img/icon-fav-empty.svg";
import { ReactComponent as FavFull } from "../../../img/icon-fav-full.svg";
import { ReactComponent as StarFull } from "../../../img/icon-star-full.svg";
import { ReactComponent as Location } from "../../../img/icon-location.svg";
import { caracteristicIconMapper } from "../../../utils/catacteristicsIconMapper";
import { getRaitingScale } from "../../../utils/raitingScaleMapper";
import { LoaderClassicStyled } from "../../common/loaderClassic/styledLoaderClassic";
import { useProductFav } from "../../../hooks/useProductFav";
import { HiOutlineEllipsisHorizontal as  Ellipsis} from "react-icons/hi2";


export default function ProductCard({ product, isFav }) {
  // const [descriptionReduced, setDescriptionReduced] = useState("");
  const { loadingCard, handleFav, loadingContext } = useProductFav();
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

  // const descriptionReducer = () => {
  //   if (window.innerWidth < 768) {
  //     descripcion?.length > 200
  //       ? setDescriptionReduced(
  //           <p>
  //             {" "}
  //             {descripcion.substring(0, 200)}...{" "}
  //             <span onClick={navigateProduct}>más...</span>{" "}
  //           </p>
  //         )
  //       : setDescriptionReduced(<p>{descripcion}</p>);
  //   } else {
  //     descripcion?.length > 120
  //       ? setDescriptionReduced(
  //           <p>
  //             {" "}
  //             {descripcion.substring(0, 120)}...{" "}
  //             <span onClick={navigateProduct}>más...</span>{" "}
  //           </p>
  //         )
  //       : setDescriptionReduced(<p>{descripcion}</p>);
  //   }
  // };

  // useEffect(() => {
  //   descriptionReducer();
  //   window.addEventListener("resize", descriptionReducer);
  //   return () => {
  //     window.removeEventListener("resize", descriptionReducer);
  //   };
  // }, [descripcion]);

  const getCaracteristics = () => {
    const caracteristics = caracteristicas.map((caract) => (
      <div key={caract.id}>{caracteristicIconMapper(caract.nombre)}</div>
    ));

    if (caracteristics.length > 9) {
      caracteristics.pop();
      caracteristics.push(<div><Ellipsis /></div>);
    }

    return caracteristics;
  };

  const urlMap = `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`;

  return (
    <ProductCardStyled>
      <ProductImgContainer
        $imgUrl={imagenes[0].url}
        $isFav={isFav}
        $loadingContext={loadingContext}
      >
        <div>
          {loadingCard ? (
            <LoaderClassicStyled
              $size="20px"
              $loaderColor="#fff"
              $bgcColor="#383B58"
              $borderWidth="2px"
            />
          ) : isFav ? (
            <FavFull onClick={() => handleFav(product)} />
          ) : (
            <Fav onClick={() => handleFav(product)} />
          )}
        </div>
      </ProductImgContainer>

      <ProductCardDescriptionContainer>
        <div>
          <CategoryRatingContainer>
            <CategoryStarsContainer>
              <p>{tituloCat}</p>
            </CategoryStarsContainer>
            <RatingContainer>
              <p>{promedioPuntuacion ? promedioPuntuacion : "-"} </p>
              <p>{getRaitingScale(promedioPuntuacion)}</p>
            </RatingContainer>
          </CategoryRatingContainer>

          <TitleContainer>
            <h3>{titulo}</h3>
          </TitleContainer>

          <ProductCardLocationContainer>
            <IconContainer>
              <Location />
            </IconContainer>
            <DirectionContainer>
              <p>{direccion}</p>
              <a target="_blank" href={urlMap} rel="noopener noreferrer">
                MOSTRAR EN EL MAPA
              </a>
            </DirectionContainer>
          </ProductCardLocationContainer>

          <ProductCardCaracteristics>
            {/* {caracteristicas.map((caract) => (
              <div key={caract.id}>
                {caracteristicIconMapper(caract.nombre)}
              </div>
            ))} */}
            {getCaracteristics()}
          </ProductCardCaracteristics>

          <ProductCardDescription>
            <p>{descripcion}</p>
          </ProductCardDescription>
        </div>

        <BtnDetails onClick={navigateProduct}>Ver detalles</BtnDetails>
      </ProductCardDescriptionContainer>
    </ProductCardStyled>
  );
}
