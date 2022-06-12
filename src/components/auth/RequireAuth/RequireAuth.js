import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AuthContext from "../context";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLogged } = useContext(AuthContext);
  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
