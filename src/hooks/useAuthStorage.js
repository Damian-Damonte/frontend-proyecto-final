import { useContext } from "react";
import UserContext from "../context/user.context";
import dataFromJwt from "../utils/dataFromJwt";
import { getUserFavs } from "../service/user";

export const useAuthStorage = () => {
  const { setUser, setFavs } = useContext(UserContext);

  const saveUserData = (token) => {
    const userData = dataFromJwt(token);
    localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);

    getUserFavs(userData.id, userData.token).then((res) => {
      if (!res.error) {
        setFavs(res);
      } else {
        console.log("ERROR AL CARGAR LOS FAVORITOS"); //TODO lanzar toast
      }
    });
  };

  return saveUserData;
};
