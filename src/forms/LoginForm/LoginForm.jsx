import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
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
      setAuth({ user: "Alex" }); //replace with real username
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
      onSubmit={handleSubmit}
    >
      {(form) => {
        return (
          <Form>
            <div className="grid grid-cols-1 bg-[#2c2f33] p-10 bottom-1/2 right-1/2 absolute translate-y-1/2 translate-x-1/2 rounded-lg">
              <h2 className="text-center text-white font-bold text-[26px] mb-1">
                Welcome back!
              </h2>
              <p className="text-center text-lg text-[#ffffffa9] mb-5">
                We're so exited to see you again!
              </p>
              <CustomInput
                id="email"
                label="E-mail"
                type="email"
                name="email"
                required
                className="mb-6"
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
                className="text-[#00a8fc] mb-[18px] py-1.5 font-semibold"
              >
                Forgot your password?
              </a>
              <Button
                disabled={!form.isValid}
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  backgroundColor: "#5865f2",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: "bold",
                  padding: "10px",
                  marginBottom: "10px",
                  "&:hover": { backgroundColor: "#5865f2dd" },
                  "&:disabled": { backgroundColor: "#5865f299" },
                }}
              >
                Login
              </Button>
              <p style={{ color: "#ffffffbb" }}>
                Need an account? &#32;
                <Link
                  to="/register"
                  style={{
                    color: "#00a8fc",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Register
                </Link>
              </p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
