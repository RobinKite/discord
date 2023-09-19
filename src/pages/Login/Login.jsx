import useAuth from "@/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = () => {
    try {
      setAuth({ user: "Alex" }); //replace with real username
      navigate(from, { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {/* Replace this with login page */}
      <p className="text-white text-center mt-7 text-xl">Login Page</p>
      <button
        onClick={handleSubmit}
        className="text-white mx-auto mt-7 text-xl block hover:text-[red]">
				Log in
      </button>
    </>
  );
};

export default Login;
