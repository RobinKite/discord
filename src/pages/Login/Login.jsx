import LoginForm from "@/forms/LoginForm/LoginForm";
// import useAuth from "@/hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // const { setAuth } = useAuth();

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  // const handleSubmit = () => {
  // 	try {
  // 		setAuth({ user: "Alex" }); //replace with real username
  // 		navigate(from, { replace: true });
  // 	} catch (e) {
  // 		console.error(e);
  // 	}
  // };

  return (
    <>
      {/* Replace this with login page */}
      <div className="fixed top-0 left-0 h-full w-full bg-cover bg-[url('src/assets/bg_img.svg')]"></div>
      <div className="w-full h-full flex items-center justify-center absolute min-h-[540px] top-0 left-0">
        <LoginForm />
      </div>

      {/* <button
					onClick={handleSubmit}
					className="text-white mx-auto mt-7 text-xl block hover:text-[red]"
				>
					Log in
				</button> */}
    </>
  );
};

export default Login;
