import { Navigate } from "react-router-dom";
import { getIsAdmin } from "../../utils/localStorage";
const AuthenticateAdmin = ({ children }) => {
  const isAdmin = getIsAdmin();
  return isAdmin ? children : <Navigate to="/" />;
};

export default AuthenticateAdmin;
