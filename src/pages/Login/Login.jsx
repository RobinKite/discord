import LoginForm from "@/forms/LoginForm/LoginForm";
import RegistrationForm from "@/forms/RegistrationForm/RegistrationForm";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { pathname } = useLocation();
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url('src/assets/registration_image.jpg')",
        backgroundSize: "cover",
      }}>
      {pathname === "/register" ? <RegistrationForm /> : <LoginForm />}
    </div>
  );
};

export default Login;
