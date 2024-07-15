import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/localStorage";
const AuthenticateUser = ({ children }) => {
  const isRegisteredUser = getToken();
  return isRegisteredUser ? children : <Navigate to="/" />;
};

export default AuthenticateUser;
