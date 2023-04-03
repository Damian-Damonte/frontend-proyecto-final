import React, { useContext } from "react";
import {
  MyFavoritesStyled,
  NoFavorites,
  NoFavoritesContainer,
} from "../Components/myFavorites/styledMyFavorites";
import { ProductCardContainer } from "../Components/homePage/productSection/styledProductSection";
import UserContext from "../context/user.context";
import ProductCard from "../Components/homePage/productSection/ProductCard";
import { BsHeartbreakFill as EmptyFavorites } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes";


export default function MyFavorites() {
  const { favs } = useContext(UserContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <MyFavoritesStyled>
        <h3>Mis favoritos</h3>

        {favs.length === 0 ? (
          <NoFavorites>
            <NoFavoritesContainer>
              <EmptyFavorites />
              <h4>
                Actualmente no hay alojamientos agregados a tu lista de
                favoritos
              </h4>
              <p>
                Para agregar alojamientos, navega a través de nuestro sitio y
                marcá tus alojamientos favoritos con el botón ❤
              </p>
              <button onClick={goBack}>Volver</button>
            </NoFavoritesContainer>
          </NoFavorites>
        ) : (
          <ProductCardContainer>
            {favs?.map((product) => (
              <ProductCard key={product.id} product={product} isFav={true} />
            ))}
          </ProductCardContainer>
        )}
      </MyFavoritesStyled>
    </>
  );
}
