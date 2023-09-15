import useAuth from "@/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
	const { setAuth } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = () => {
		try {
			setAuth({ user: "Alex" });
			navigate(from, { replace: true });
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<p>Login Page</p>
			<button onClick={handleSubmit}>Log in</button>
		</>
	);
};

export default Login;
