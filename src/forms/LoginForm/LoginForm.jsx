import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import { Input, Button } from "@/components";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";
import { Box, Link, Typography, Stack } from "@mui/material";

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
      dispatch(setUser());
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
      {(form) => (
        <Form>
          <Box
            sx={{
              display: "grid",
              borderRadius: 1,
              p: 4,
              bgcolor: "#2c2f33",
              width: "480px",
            }}
          >
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
            <Stack sx={{ position: "relative", mb: "18px" }}>
              <Input
                id="password"
                label="Password"
                type="password"
                name="password"
                required
              />
              <Link
                href="#"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: "-2px",
                  textDecoration: "none",
                  color: "#00a8fc",
                }}
              >
                Forgot your password?
              </Link>
            </Stack>
            <Button disabled={!form.isValid}>Log In</Button>
            <Typography sx={{ mt: 2, fontSize: "0.875rem", color: "#949ba4" }}>
              Need an account? &#32;
              <NavLink
                to="/register"
                className="text-sm font-medium text-[#00a8fc]"
              >
                Register
              </NavLink>
            </Typography>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
