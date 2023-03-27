import { createContext, useState, useEffect } from "react";
import { getUserFavs } from "../service/user";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let userData = localStorage.userData;

    const fetchFavs = async () => {
      const favs = await getUserFavs(userData.id, userData.token);
      setFavs(favs);
    }

    if (userData && !user.token) {
      userData = JSON.parse(userData);
      const expritationDate = new Date(userData.exp * 1000);
      expritationDate < Date.now()
        ? localStorage.removeItem("userData")
        : setUser(userData);
      fetchFavs();
    } else if (user.token) {
      userData = JSON.parse(userData);
      fetchFavs();
    }
  }, [user]);



  const handleFav = (product) => {
    const isFav = favs.some((fav) => fav.id === product.id);

    if (isFav) {
      setFavs(favs.filter((fav) => fav.id !== product.id));
    } else {
      setFavs([...favs, product]);
    }
  };

  const data = { user, setUser, favs, setFavs, handleFav, loading, setLoading };


  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
