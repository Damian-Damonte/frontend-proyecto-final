import React, { useContext } from "react";
import { MyFavoritesStyled } from "../Components/myFavorites/styledMyFavorites";
import { ProductCardContainer } from "../Components/homePage/productSection/styledProductSection";
import UserContext from "../context/user.context";
import ProductCard from "../Components/homePage/productSection/ProductCard";

export default function MyFavorites() {
  const { favs } = useContext(UserContext);

  return (
    <MyFavoritesStyled>
      <h3>Mis favoritos</h3>
      <ProductCardContainer>
      {favs?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFav={true}
                />
              ))}
      </ProductCardContainer>
    </MyFavoritesStyled>
  );
}
