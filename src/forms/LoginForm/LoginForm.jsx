
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "@/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

function LoginForm() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);

    try {
      setAuth({ token: "AAA" });
      navigate(from, { replace: true });
      actions.resetForm();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {(form) => (
        <Form>
          <div className="w-[480px] grid grid-cols-1 bg-[#2c2f33] p-8 rounded">
            <h2 className="text-center text-white font-medium text-2xl mb-1">
              Welcome back!
            </h2>
            <p className="text-center text-[#ffffffa9] mb-5">
              We&apos;re so exited to see you again!
            </p>
            <CustomInput
              id="email"
              label="E-mail"
              type="email"
              name="email"
              required
            />
            <CustomInput
              id="password"
              label="Password"
              type="password"
              name="password"
              required
            />
            <a
              href="#"
              className="text-[#00a8fc] mb-[18px] font-medium text-sm">
              Forgot your password?
            </a>
            <button
              disabled={!form.isValid}
              type="submit"
              className="bg-[#5865f2] hover:bg-[#4752c4] disabled:bg-[#4752c4] text-white mb-2 py-[10px] leading-6 rounded">
              Log In
            </button>
            <p className="text-[#949ba4] text-sm">
              Need an account? &#32;
              <NavLink
                to="/register"
                className="text-[#00a8fc] text-sm font-medium">
                Register
              </NavLink>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
