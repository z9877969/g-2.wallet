import axios from "axios";

const API_KEY = "AIzaSyDc8MYd3sZcwYx1_D9_7ur7YeFN5WxBZ5Y";
const endPoint = {
  LOGIN: "/accounts:signInWithPassword",
  REGISTER: "/accounts:signUp",
  GET_USER: "/accounts:lookup",
};

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
axios.defaults.params = {
  key: API_KEY,
};

export const userRegisterApi = (userData) => {
  return axios
    .post(endPoint.REGISTER, { ...userData, returnSecureToken: true })
    .then(({ data: { localId, email, idToken, refreshToken } }) => ({
      localId,
      email,
      idToken,
      refreshToken,
    }))
    .catch((err) => {
      throw err;
    });
};

export const userLoginApi = (userData) => {
  return axios
    .post(endPoint.LOGIN, { ...userData, returnSecureToken: true })
    .then(({ data: { localId, email, idToken, refreshToken } }) => ({
      localId,
      email,
      idToken,
      refreshToken,
    }))
    .catch((err) => {
      throw err;
    });
};

export const getCurUserApi = (idToken) => {
  return axios
    .post(endPoint.GET_USER, { idToken: idToken })
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    })
    .catch((err) => {
      throw err;
    });
};
