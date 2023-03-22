import { post } from "./api";

const authLogin = async (payload, setUserState) => {
  // setUserState({ token: null, loading: true, error: null });

  const response = await post("/auth/autenticacion", payload);
  return response;

  // response.error
  //   ? setUserState({ token: null, loading: false, error: response.error })
  //   : setUserState({ token: response.data, loading: false, error: null });
};

const singUp = () => {};

export {
  authLogin
}