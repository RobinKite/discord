import RegistrationForm from "@/forms/RegistrationForm/RegistrationForm";

const Register = () => {
	return (
		<div
			style={{
				height: "100vh",
				backgroundImage: "url(\"src/assets/registration_image.jpg\")",
				backraundSize: "cover",
			}}
		>
			<RegistrationForm />
		</div>
	);
};

export default Register;
