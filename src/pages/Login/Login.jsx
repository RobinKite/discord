import LoginForm from "@/forms/LoginForm/LoginForm";
import RegistrationForm from "@/forms/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <>
      <div className="fixed left-0 top-0 h-full w-full bg-[url('@/assets/bg_img.svg')] bg-cover"></div>
      <div className="absolute left-0 top-0 flex h-full min-h-[540px] w-full items-center justify-center">
        {pathname === "/register" ? <RegistrationForm /> : <LoginForm />}
      </div>
    </>
  );
};

export default Login;
