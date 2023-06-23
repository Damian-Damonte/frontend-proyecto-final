import { useContext } from "react";
import UserContext from "../context/user.context";
import dataFromJwt from "../utils/dataFromJwt";
import { getUserData } from "../service/user";
import { renderToast } from "../utils/renderToast";

export const useUserDataStorage = () => {
  const { setUser, setFavs } = useContext(UserContext);

  const saveUserData = (token) => {
    const userData = dataFromJwt(token);
    localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);

    getUserData(userData.id, userData.token).then((res) => {
      res.error 
        ? renderToast("error", "Error al cargar los favoritos. Por favor, intente más tarde")
        : setFavs(res.data.favorites);
    });
  };

  return saveUserData;
};
