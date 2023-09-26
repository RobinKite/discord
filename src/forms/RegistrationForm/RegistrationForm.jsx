import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import { Button, Input } from "@/components";
import CustomDateSelector from "@/components/CustomDateSelector/CustomDateSelector";

function RegistrationForm() {
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
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, setFieldValue }) => (
        <Form>
          <div className="grid w-[480px] grid-cols-1 rounded bg-[#2c2f33] p-8">
            <h1 className="mb-5 text-center text-2xl font-medium text-white">
              Create an account
            </h1>
            <Input
              id="email"
              label="E-mail"
              type="email"
              name="email"
              required
            />
            <Input id="name" label="Display name" name="name" />
            <Input id="username" label="Username" name="username" required />
            <Input
              id="password"
              label="Password"
              type="password"
              name="password"
              required
            />
            <CustomDateSelector setFieldValue={setFieldValue} />
            <Button disabled={!isValid} type="submit" sx={{ mb: 2 }}>
              Continue
            </Button>
            <p className="mb-5 text-xs text-[#ffffffbb]">
              By registering, you agree to Discord&apos;s&#32;
              <a href="#" className="text-[#00a8fc]">
                Term&apos;s of Service&#32;
              </a>
              and &#32;
              <a href="#" className="text-[#00a8fc]">
                Privacy Policy.
              </a>
            </p>
            <NavLink to="/login" className="text-sm font-medium text-[#00a8fc]">
              Already have an account?
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
