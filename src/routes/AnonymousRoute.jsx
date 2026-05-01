import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/Spinner/Spinner";


const AnonymousRoute = () => {
  const { isAuth, loading } = useContext(AuthContext);

  if (loading) return <Spinner/>;
  if (isAuth) {
    return <Navigate to="/users" />;
  }
  return <Outlet />;
};
export default AnonymousRoute;