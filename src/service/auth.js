import { post } from "./api";

const authLogin = async (payload) => {
  return await post("/auth/authentication", payload);
};

const authSingUp = async (payload) => {
  return await post("/auth/register", payload);
};

export { authLogin, authSingUp };
