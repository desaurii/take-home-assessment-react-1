import { Navigate, Outlet } from "react-router-dom";
const AnonymousRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/users" />;
  }
  return <Outlet />;
};
export default AnonymousRoute;