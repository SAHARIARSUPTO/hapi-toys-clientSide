import { useContext } from "react";
import { AuthContext } from "./Providers/Provider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
