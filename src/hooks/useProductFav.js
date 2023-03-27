import { useState, useContext } from "react";
import UserContext from "../context/user.context";
import { productFav } from "../service/productos";
import { renderToast } from "../utils/renderToast";

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

    if (!loadingContext && user.token) {
      setLoadingCard(true);
      setLoadingContext(true);

      productFav(payload, user.token).then((res) => {
        !res.error
          ? handleFavContext(producto)
          : renderToast("error", "Se ha producido un error al guardar el producto en favoritos. Por favor, intente de nuevo más tarde")

        setLoadingCard(false);
        setLoadingContext(false);
      });
    } else if (!user.token) {
      renderToast("info", "Inicia sesión para guardar este producto en favoritos");
    }
  };
  return { loadingCard, handleFav, loadingContext };
};
