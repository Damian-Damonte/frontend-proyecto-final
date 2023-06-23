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
    title,
    description,
    images,
    category: { name: categoryName },
    amenities,
    averageRating,
    address,
    latitude, 
    longitude,
    pricePerNight,
  } = product;

  const navigateProduct = () => {
    navigate(`/producto/${id}`);
  };

  const getCaracteristics = () => {
    const caracteristics = amenities.slice(0, 9);
    return caracteristics.map((caract) => (
      <div key={caract.id}>{caracteristicIconMapper(caract.nombre)}</div>
    ));
  };

  const urlMap = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <ProductCardStyled>
      <ProductImgContainer
        $imgUrl={images[0].url}
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
              <p>{categoryName}</p>
            </CategoryStarsContainer>
            <RatingContainer>
              <p>{averageRating ? averageRating : "-"} </p>
              <p>{getRaitingScale(averageRating)}</p>
            </RatingContainer>
          </CategoryRatingContainer>

          <TitleContainer>
            <h3>{title}</h3>
          </TitleContainer>

          <ProductCardLocationContainer>
            <IconContainer>
              <Location />
            </IconContainer>
            <DirectionContainer>
              <p>{address}</p>
              <a target="_blank" href={urlMap} rel="noopener noreferrer">
                MOSTRAR EN EL MAPA
              </a>
            </DirectionContainer>
          </ProductCardLocationContainer>

          <ProductCardCaracteristics>
            {getCaracteristics()}
          </ProductCardCaracteristics>

          <ProductCardDescription>
            <p>{description}</p>
          </ProductCardDescription>
        </div>

        <PriceContainer>
          <p>Precio base por noche</p>
          <h3>$ {pricePerNight.toLocaleString()}</h3>
        </PriceContainer>

        <BtnDetails onClick={navigateProduct}>Ver detalles</BtnDetails>
      </ProductCardDescriptionContainer>
    </ProductCardStyled>
  );
}
