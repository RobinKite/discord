import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import CustomInput from "@/components/CustomInput/CustomInput";
import CustomDateSelector from "@/components/CustomDateSelector/CustomDateSelector";

function RegistrationForm() {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    name: "",
    day: 0,
    month: 0,
    year: 0,
  };

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(form) => (
        <Form>
          <div className="w-[480px] grid grid-cols-1 bg-[#2c2f33] p-8 rounded">
            <h1 className="text-center text-white font-medium text-2xl mb-5">
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
            <CustomDateSelector />
            <button
              disabled={!form.isValid}
              type="submit"
              className="bg-[#5865f2] hover:bg-[#4752c4] disabled:bg-[#4752c4] text-white mb-2 py-[10px] leading-6 rounded">
              Continue
            </button>
            <p className="text-xs mb-5 text-[#ffffffbb]">
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
              className="text-[#00a8fc] text-sm font-medium">
              Already have an account?
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
