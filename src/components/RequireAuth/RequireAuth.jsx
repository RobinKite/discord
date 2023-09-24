import { Navigate, useLocation } from "react-router-dom";
import ProtectedLayout from "../Layout/ProtectedLayout";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
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
