import { Navigate, useLocation } from "react-router-dom";
import ProtectedLayout from "../Layout/ProtectedLayout";
import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";

const RequireAuth = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  console.log(isLoggedIn);

  return isLoggedIn ? (
    <ProtectedLayout />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
