import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";

function LoginForm() {
  const dispatch = useDispatch();
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
      // dispatch(
      //   setUser({
      //     userName: "",
      //     email: values.email,
      //     name: "",
      //     isLoggedIn: true,
      //   })
      // );
      dispatch(login(values));
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
          <div className="grid w-[480px] grid-cols-1 rounded bg-[#2c2f33] p-8">
            <h2 className="mb-1 text-center text-2xl font-medium text-white">
              Welcome back!
            </h2>
            <p className="mb-5 text-center text-[#ffffffa9]">
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
              className="mb-[18px] text-sm font-medium text-[#00a8fc]">
              Forgot your password?
            </a>
            <button
              disabled={!form.isValid}
              type="submit"
              className="mb-2 rounded bg-[#5865f2] py-[10px] leading-6 text-white hover:bg-[#4752c4] disabled:bg-[#4752c4]">
              Log In
            </button>
            <p className="text-sm text-[#949ba4]">
              Need an account? &#32;
              <NavLink
                to="/register"
                className="text-sm font-medium text-[#00a8fc]">
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
