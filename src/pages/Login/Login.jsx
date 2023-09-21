import LoginForm from "@/forms/LoginForm/LoginForm";

const Login = () => {	
	return (
			<div
				style={{
					height: "100vh",
					backgroundImage: "url(\"src/assets/registration_image.jpg\")",
					backgroundSize: "cover",
				}}
			>
				<LoginForm />				
			</div>
		);
};

export default Login;
