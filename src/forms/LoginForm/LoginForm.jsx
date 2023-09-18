import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import { Typography, Button, Box } from "@mui/material";
import validationSchema from "./validationSchema";
import CustomInput from "../../components/CustomInput/CustomInput";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
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
              }}
            >
              <Typography
                align="center"
                variant="h2"
                sx={{ color: "#ffffff", fontSize: "24px" }}
              >
                Create an account
              </Typography>
              <CustomInput id="email" label="Email" type="email" name="email" />
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
                }}
              >
                Login
              </Button>

              <p style={{ color: "#ffffffbb", fontSize: "12px" }}>
                Need an account? &#32;
                <NavLink
                  to="/register"
                  style={{
                    color: "#1E90FFcc",
                    fontSize: "12px",
                    textDecoration: "none",
                  }}
                >
                  Register
                </NavLink>
              </p>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
