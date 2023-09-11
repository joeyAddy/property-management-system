/* eslint-disable react/prop-types */
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext.js";

const RequireAuth = ({ allowedRoles }) => {
  const { cookieUser } = useAuthContext();

  const location = useLocation();

  return allowedRoles?.includes(cookieUser?.role) ? (
    <Outlet />
  ) : cookieUser?.role ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
