import LoginForm from "@/forms/LoginForm/LoginForm";

export default function Login() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(\"../src/assets/registration_image.jpg\")",
        backraundSize: "cover",
      }}
    >
      <LoginForm />
    </div>
  );
}
