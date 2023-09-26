import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import CustomInput from "@/components/CustomInput/CustomInput";
import CustomDateSelector from "@/components/CustomDateSelector/CustomDateSelector";
import { useDispatch, useSelector } from "react-redux";
import { register, setIsLoading } from "@/redux/slices/authSlice";
import { Oval } from "react-loader-spinner";

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const isLoading = useSelector((state) => state.auth.isLoading);

  const initialValues = {
    email: "",
    username: "",
    password: "",
    name: "",
    day: "",
    month: "",
    year: "",
  };

  const onSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values)).then(() => {
      navigate(from, { replace: true });
      actions.resetForm();
      dispatch(setIsLoading(false));
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ isValid }) => (
        <Form>
          <div className="grid w-[480px] grid-cols-1 rounded bg-[#2c2f33] p-8">
            <h1 className="mb-5 text-center text-2xl font-medium text-white">
              Create an account
            </h1>
            <CustomInput
              id="email"
              label="E-mail"
              type="email"
              name="email"
              required
            />
            <CustomInput
              id="name"
              label="Display name"
              name="name"
            />
            <CustomInput
              id="username"
              label="Username"
              name="username"
              required
            />
            <CustomInput
              id="password"
              label="Password"
              type="password"
              name="password"
              required
            />
            <CustomDateSelector
              dayId="day"
              monthId="month"
              yearId="year"
              dayLabel="Day"
              monthLabel="Month"
              yearLabel="Year"
              required={true}
            />
            <button
              disabled={!isValid}
              type="submit"
              className="mb-2 rounded bg-[#5865f2] py-[10px] leading-6 text-white hover:bg-[#4752c4] disabled:bg-[#4752c4]">
              {isLoading ? (
                <span className="flex justify-center">
                  <Oval
                    width={20}
                    height={20}
                  />
                </span>
              ) : (
                "Continue"
              )}
            </button>
            <p className="mb-5 text-xs text-[#ffffffbb]">
              By registering, you agree to Discord&apos;s&#32;
              <a
                href="#"
                className="text-[#00a8fc]">
                Term&apos;s of Service&#32;
              </a>
              and &#32;
              <a
                href="#"
                className="text-[#00a8fc]">
                Privacy Policy.
              </a>
            </p>
            <NavLink
              to="/login"
              className="text-sm font-medium text-[#00a8fc]">
              Already have an account?
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
