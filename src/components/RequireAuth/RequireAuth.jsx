import { Navigate, useLocation } from "react-router-dom";
import { ProtectedLayout } from "@/components";
import { useSelector } from "react-redux";

export function RequireAuth() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <ProtectedLayout />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
