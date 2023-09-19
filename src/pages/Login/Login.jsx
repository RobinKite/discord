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
			<div
				style={{
					height: "100vh",
					backgroundImage: "url(\"src/assets/registration_image.jpg\")",
					backgroundSize: "cover",
				}}
			>
				<LoginForm />
				{/* <button
					onClick={handleSubmit}
					className="text-white mx-auto mt-7 text-xl block hover:text-[red]"
				>
					Log in
				</button> */}
			</div>
		</>
	);
};

export default Login;
