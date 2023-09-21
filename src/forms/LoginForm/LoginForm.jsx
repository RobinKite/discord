import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Typography, Button, Box } from "@mui/material";
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
      onSubmit={handleSubmit}>
      {(form) => {
        return (
          <Form>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 2,
                backgroundColor: "#2c2f33",
                minWidth: "320px",
                maxWidth: "400px",
                p: 2,
                mx: "auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                mr: "-50%",
                transform: "translate(-50%, -50%)",
              }}>
              <Typography
                align="center"
                variant="h2"
                sx={{ color: "#ffffff", fontSize: "24px", my: "0" }}>
                Create an account
              </Typography>
              <Typography
                align="center"
                variant="p"
                sx={{ color: "#ffffff", fontSize: "14px", my: "0" }}>
                We are so exited to see you again
              </Typography>

              <CustomInput
                id="email"
                label="Email"
                type="email"
                name="email"
              />
              <CustomInput
                id="password"
                label="Password"
                type="password"
                name="password"
              />

              <Button
                disabled={!form.isValid}
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  backgroundColor: "#5865f2",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#5865f2dd" },
                  "&:disabled": { backgroundColor: "#5865f299" },
                }}>
                Login
              </Button>

              <p style={{ color: "#ffffffbb", fontSize: "12px" }}>
                Need an account? &#32;
                <Link
                  to="/register"
                  style={{
                    color: "#1E90FFcc",
                    fontSize: "12px",
                    textDecoration: "none",
                  }}>
                  Register
                </Link>
              </p>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
