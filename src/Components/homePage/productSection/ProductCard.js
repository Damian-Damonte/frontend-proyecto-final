import { useNavigate } from "react-router-dom";
import {
  BtnDetails,
  CategoryRatingContainer,
  CategoryStarsContainer,
  DirectionContainer,
  IconContainer,
  PriceContainer,
  ProductCardCaracteristics,
  ProductCardDescription,
  ProductCardDescriptionContainer,
  ProductCardLocationContainer,
  ProductCardStyled,
  ProductImgContainer,
  RatingContainer,
  TitleContainer,
} from "./styledProductSection";
import { ReactComponent as Fav } from "../../../img/icon-fav-empty.svg";
import { ReactComponent as FavFull } from "../../../img/icon-fav-full.svg";
import { ReactComponent as Location } from "../../../img/icon-location.svg";
import { caracteristicIconMapper } from "../../../utils/catacteristicsIconMapper";
import { getRaitingScale } from "../../../utils/raitingScaleMapper";
import { LoaderClassicStyled } from "../../common/loaderClassic/styledLoaderClassic";
import { useProductFav } from "../../../hooks/useProductFav";

export default function ProductCard({ product, isFav }) {
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
    precioPorNoche,
  } = product;

  const navigateProduct = () => {
    navigate(`/producto/${id}`);
  };

  const getCaracteristics = () => {
    const caracteristics = caracteristicas.slice(0, 9);
    return caracteristics.map((caract) => (
      <div key={caract.id}>{caracteristicIconMapper(caract.nombre)}</div>
    ));
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
            {getCaracteristics()}
          </ProductCardCaracteristics>

          <ProductCardDescription>
            <p>{descripcion}</p>
          </ProductCardDescription>
        </div>

        <PriceContainer>
          <p>Precio base por noche</p>
          <h3>$ {precioPorNoche.toLocaleString()}</h3>
        </PriceContainer>

        <BtnDetails onClick={navigateProduct}>Ver detalles</BtnDetails>
      </ProductCardDescriptionContainer>
    </ProductCardStyled>
  );
}
