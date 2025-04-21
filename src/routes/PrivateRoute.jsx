import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const password = localStorage.getItem("email");

  return password ? <Outlet /> : <Navigate to="/login" replace />;
};
