import RegistrationForm from "@/forms/RegistrationForm/RegistrationForm";

export default function Register() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(\"../src/assets/registration_image.jpg\")",
        backraundSize: "cover",
      }}
    >
      <RegistrationForm />
    </div>
  );
}
