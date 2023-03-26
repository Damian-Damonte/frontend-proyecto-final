import { createContext, useState } from "react";

const FavsContext = createContext();

export function FavsProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const handleFav = (product) => {
    console.log("CLIC FAV");
    const isFav = favs.some((fav) => fav.id === product.id);

    if (isFav) {
      setFavs(favs.filter((fav) => fav.id !== product.id));
    } else {
      setFavs([...favs, product]);
    }
  };

  const data = { favs, handleFav };

  return <FavsContext.Provider value={data}>{children}</FavsContext.Provider>;
}

export default FavsContext;
