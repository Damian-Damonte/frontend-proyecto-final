import { get } from "./api";

export const getUserFavs = async (userId, token) => {
  return await get(`/usuarios/${userId}`, token);
};
