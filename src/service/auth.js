import { post } from "./api";

const authLogin = async (payload) => {
  return await post("/auth/autenticacion", payload);
};

const authSingUp = async (payload) => {
  return await post("/auth/registro", payload);
};

export { authLogin, authSingUp };
