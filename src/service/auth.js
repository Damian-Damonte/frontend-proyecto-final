import { post } from "./api";

const authLogin = async (payload) => {
  const response = await post("/auth/autenticacion", payload);
  return response;
};

const authSingUp = async (payload) => {
  const response = await post("/auth/registro", payload);
  return response;
};

export { authLogin, authSingUp };
