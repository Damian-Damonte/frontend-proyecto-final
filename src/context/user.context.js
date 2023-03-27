import { createContext, useState, useEffect } from "react";
import { getUserFavs } from "../service/user";

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
      expritationDate < Date.now()
        ? localStorage.removeItem("userData")
        : setUser(userData);

      getUserFavs(userData.id, userData.token).then((res) => {
        if (!res.error) {
          console.log("cargando favs desde context");
          setFavs(res);
        } else {
          console.log("ERROR AL CARGAR LOS FAVORITOS");
          //TODO lanzar toast
        }
      });
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
