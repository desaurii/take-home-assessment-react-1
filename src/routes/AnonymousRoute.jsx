import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AnonymousRoute = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/users" replace />;
  }
  return <Outlet />;
};
export default AnonymousRoute;
