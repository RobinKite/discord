import LoginForm from "@/forms/LoginForm/LoginForm";
import RegistrationForm from "@/forms/RegistrationForm/RegistrationForm";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full bg-cover bg-[url('src/assets/bg_img.svg')]"></div>
      <div className="w-full h-full flex items-center justify-center absolute min-h-[540px] top-0 left-0">
        {pathname === "/register" ? <RegistrationForm /> : <LoginForm />}
      </div>
    </>
  );
};

export default Login;
