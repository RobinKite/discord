import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import { Input, Button } from "@/components";
import { useDispatch } from "react-redux";
import { Link, Typography, Stack } from "@mui/material";
import { logIn } from "@/services/client";

const StyledStackSX = {
  direction: "column",
  justifyContent: "flex-start",
  // justifyContent: "center",
  p: "28px",
  bgcolor: "#2c2f33",
  borderRadius: { xs: 0, sm: 1 },
  maxWidth: {
    xs: "480px",
  },
  minWidth: {
    xs: "100vw",
    sm: "450px",
  },
  height: {
    xs: "100vh",
    sm: "auto",
  },
};

const StyledLink = {
  position: "absolute",
  left: 0,
  bottom: "-2px",
  textDecoration: "none",
  color: "#00a8fc",
  fontSize: "14px",
};

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
    const { email, password } = values;
    try {
      dispatch(
        logIn({
          email,
          password,
        })
      );
      navigate(from, { replace: true });
    } catch (e) {
      console.error(e);
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(form) => (
        <Form>
          <Stack sx={StyledStackSX}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: "#fff",
                textAlign: "center",
                mb: "4px",
                fontSize: "1.5rem",
              }}
            >
              Welcome back!
            </Typography>

            <Typography
              sx={{
                color: "#ffffffa9",
                textAlign: "center",
                mb: 3,
                fontSize: "1.025rem",
              }}
            >
              We&apos;re so exited to see you again!
            </Typography>

            <Input
              id="email"
              label="E-mail"
              type="email"
              name="email"
              required
            />
            <Stack sx={{ position: "relative", mb: 5 }}>
              <Input
                id="password"
                label="Password"
                type="password"
                name="password"
                required
              />
              <Link href="#" sx={StyledLink}>
                Forgot your password?
              </Link>
            </Stack>

            <Button disabled={!form.isValid} sx={{ mb: 3 }} type="submit">
              Log In
            </Button>

            <Typography sx={{ fontSize: "0.875rem", color: "#949ba4" }}>
              Need an account? &#32;
              <NavLink
                to="/register"
                className="text-sm font-medium text-[#00a8fc]"
              >
                Register
              </NavLink>
            </Typography>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
