import { get } from "./api";

export const getUserFavs = async (userId, token) => {
  const response = await get(`/usuarios/${userId}`, token);
  // debe retorna el response con el posible error
  return response.data.favoritos;
};
