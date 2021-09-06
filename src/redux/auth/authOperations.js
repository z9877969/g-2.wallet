import {
    getCurUserApi,
  userLoginApi,
  userRegisterApi,
} from "../../utils/services/fireBaseApi";
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterError,
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  getCurUserRequest,
  getCurUserSuccess,
  getCurUserError,
} from "./authActions";

export const userRegister = (userData) => (dispatch) => {
  dispatch(userRegisterRequest());

  userRegisterApi(userData)
    .then((data) => dispatch(userRegisterSuccess(data)))
    .catch((err) => dispatch(userRegisterError(err.message)));
};

export const userLogin = (userData) => (dispatch) => {
  dispatch(userLoginRequest());

  userLoginApi(userData)
    .then((data) => dispatch(userLoginSuccess(data)))
    .catch((err) => dispatch(userLoginError(err.message)));
};

export const getCurUser = (idToken) => (dispatch) => {
    dispatch(getCurUserRequest());
  
    getCurUserApi(idToken)
      .then((data) => dispatch(getCurUserSuccess(data)))
      .catch((err) => dispatch(getCurUserError(err.message)));
  };
