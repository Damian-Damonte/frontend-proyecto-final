import { useNavigate } from "react-router-dom";
import {
  BtnShareFavContainer,
  BtnsPriceContainer,
  IconContainer,
  LocationContainer,
  OpinionStarsContainer,
  PriceContainer,
  ProductLocationRatingHeader,
  ProductNameHeader,
  RatingContainer,
  TextLocationContainer,
} from "./styledProduct";
import { ReactComponent as Back } from "../../../img/icon-product-back.svg";
import { ReactComponent as Location } from "../../../img/icon-location.svg";
import { ReactComponent as StarFull } from "../../../img/icon-star-full.svg";
import { ReactComponent as Share } from "../../../img/icon-share.svg";
import { ReactComponent as Fav } from "../../../img/icon-fav-empty.svg";
import { ReactComponent as FavFull } from "../../../img/icon-fav-full.svg";
import { getRaitingScale } from "../../../utils/raitingScaleMapper";
import { LoaderClassicStyled } from "../../common/loaderClassic/styledLoaderClassic";
import { MaxWidthContainer } from "../../common/maxWidthContainer/styledMaxWidthContainer";

export default function ProductHeader({
  handleFav,
  handleShare,
  product,
  isFav,
  loadingCard,
}) {
  const navigate = useNavigate();
  const { categoria, ciudad, titulo, direccion, promedioPuntuacion, precioPorNoche } = product;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <MaxWidthContainer $bgcolor="#545776">
        <ProductNameHeader>
          <div>
            <p>{categoria.titulo.toUpperCase()}</p>
            <h3>{titulo}</h3>
          </div>
          <Back onClick={goBack} />
        </ProductNameHeader>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <ProductLocationRatingHeader>
          <LocationContainer>
            <IconContainer>
              <Location />
            </IconContainer>
            <TextLocationContainer>
              <p>{`${ciudad.nombre}, ${ciudad.pais.nombre}`}</p>
              <p>{direccion}</p>
            </TextLocationContainer>
          </LocationContainer>
          <RatingContainer>
            <OpinionStarsContainer>
              <p>{getRaitingScale(promedioPuntuacion)}</p>
              <div>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
              </div>
            </OpinionStarsContainer>
            <p>{promedioPuntuacion ? promedioPuntuacion : "-"}</p>
          </RatingContainer>
        </ProductLocationRatingHeader>
      </MaxWidthContainer>

      <MaxWidthContainer $bgcolor="#fff">
        <BtnsPriceContainer>
          <BtnShareFavContainer>
            <Share onClick={handleShare} />
            {loadingCard ? (
              <LoaderClassicStyled
                $size="23px"
                $loaderColor="#fff"
                $bgcColor="#383B58"
                $borderWidth="2px"
              />
            ) : isFav ? (
              <FavFull onClick={() => handleFav(product)} />
            ) : (
              <Fav onClick={() => handleFav(product)} />
            )}
          </BtnShareFavContainer>
          <PriceContainer>
            <p>Precio base por noche</p>
            <h4>{`$ ${precioPorNoche}`}</h4>
          </PriceContainer>
        </BtnsPriceContainer>
      </MaxWidthContainer>
    </div>
  );
}
