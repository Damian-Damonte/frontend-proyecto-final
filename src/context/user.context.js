import { createContext, useState, useEffect } from "react";
import { getUserData } from "../service/user";
import { renderToast } from "../utils/renderToast";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let userData = localStorage.userData;

    if (userData && !user.token) {
      userData = JSON.parse(userData);
      const expritationDate = new Date(userData.exp * 1000);

      if (expritationDate < Date.now()) {
        localStorage.removeItem("userData")
      } else {
        setUser(userData);
        getUserData(userData.id, userData.token).then((res) => {
          res.error
            ? renderToast("error", "Error al cargar los favoritos. Por favor, intente más tarde")
            : setFavs(res.data.favoritos);
        });
      }
    }
  }, []);

  const handleFav = (product) => {
    const isFav = favs.some((fav) => fav.id === product.id);
    isFav
      ? setFavs(favs.filter((fav) => fav.id !== product.id))
      : setFavs([...favs, product]);
  };

  const data = { user, setUser, favs, setFavs, handleFav, loading, setLoading };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
