import { Navigate, useLocation } from "react-router-dom";
import ProtectedLayout from "../Layout/ProtectedLayout";
import useAuth from "@/hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user ? (
    <ProtectedLayout />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default RequireAuth;
