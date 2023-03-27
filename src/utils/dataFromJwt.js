import jwt_decode from "jwt-decode";

export default function dataFromJwt(token) {
  const tokenDecode = jwt_decode(token);
  const userData = {
    id:tokenDecode.id,
    firstName: tokenDecode.nombre,
    lastName: tokenDecode.apellido,
    email: tokenDecode.sub,
    exp: tokenDecode.exp,
    rol: tokenDecode.rol,
    token,
  };
  return userData;
}
