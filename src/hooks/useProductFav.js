import { useState, useContext } from "react";
import UserContext from "../context/user.context";
import { productFav } from "../service/productos";

export const useProductFav = () => {
  const [loadingCard, setLoadingCard] = useState(false);

  const {
    user,
    handleFav: handleFavContext,
    loading: loadingContext,
    setLoading: setLoadingContext,
  } = useContext(UserContext);

  const handleFav = (producto) => {
    const payload = {
      usuarioId: user.id,
      productoId: producto.id,
    };

    if (loadingContext) {
      console.log("CARGANDO... NO DE LIKES");
      //TODO cambiar tipo cursor
    } else if (user.token) {
      setLoadingCard(true);
      setLoadingContext(true);

      productFav(payload, user.token).then((res) => {
        !res.error
          ? handleFavContext(producto)
          : console.log("ERROR al agregar a favs"); //TODO lanzar toast

        setLoadingCard(false);
        setLoadingContext(false);
      });
    } else {
      console.log("DEBE ESTAR LOGUEADO PARA GUARDAR FAVORITOS");
      //TODO lanzar toast
    }
  };
  return { loadingCard, handleFav, loadingContext };
};
