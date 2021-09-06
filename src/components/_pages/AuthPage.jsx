import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../../redux/auth/authOperations";
import { userRegisterApi } from "../../utils/services/fireBaseApi";
import AuthForm from "../AuthForm/AuthForm";

const AuthPage = ({ match }) => {
  const dispatch = useDispatch();
  const {
    params: { authType },
  } = match;

  const btnTitle = authType === "register" ? "SignUp" : "LogIn";
  const linkTitle = authType === "register" ? "LogIn" : "SignUp";
  const authPath = authType === "register" ? "/auth/login" : "/auth/register";

  const handleSubmit = (userData) =>
    authType === "register"
      ? dispatch(userRegister(userData))
      : dispatch(userLogin(userData));

  return (
    <AuthForm
      btnTitle={btnTitle}
      linkTitle={linkTitle}
      authPath={authPath}
      handleSubmit={handleSubmit}
    />
  );
};

export default AuthPage;
