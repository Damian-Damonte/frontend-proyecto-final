import jwt_decode from "jwt-decode";

export default function userDataFromJwt(token) {
  const tokenDecode = jwt_decode(token);
  const userData = {
    id:tokenDecode.id,
    firstName: tokenDecode.nombre,
    lastName: tokenDecode.apellido,
    email: tokenDecode.sub,
    token,
  };
  return userData;
}
