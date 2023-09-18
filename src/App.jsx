import { NavLink } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export function App() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>;
      <AppRoutes />
    </>
  );
}
