import { get } from "./api";

export const getUserFavs = async (userId, token) => {
  const response = await get(`/usuarios/${userId}`, token);
  return response.data.favoritos;
};
