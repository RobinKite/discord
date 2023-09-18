import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import { Typography, Button, Box } from "@mui/material";
import validationSchema from "./validationSchema";
import CustomInput from "../../components/CustomInput/CustomInput";

function RegistrationForm() {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  // const { setAuth } = useAuth();

	// const navigate = useNavigate();
	// const location = useLocation();
	// const from = location.state?.from?.pathname || "/";

	// const handleSubmit = () => {
	// 	try {
	// 		setAuth({ user: "Alex" }); //replace with real username
	// 		navigate(from, { replace: true });
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

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
              <CustomInput id="username" label="Username" name="username" />
              <CustomInput
                id="password"
                label="Password"
                type="password"
                name="password"
              />
              <CustomInput id="firstName" label="First name" name="firstName" />
              <CustomInput id="lastName" label="Last name" name="lastName" />
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
                Continue
              </Button>

              <NavLink
                to="/login"
                style={{
                  color: "#1E90FFcc",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Already have an account?
              </NavLink>
              <p style={{ color: "#ffffffbb", fontSize: "12px" }}>
                By registering, you agree to Discord&apos;s&#32;
                <a
                  href="#"
                  style={{
                    color: "#1E90FFcc",
                  }}
                >
                  Turm&apos;s of Service&#32;
                </a>
                and &#32;
                <a
                  href="#"
                  style={{
                    color: "#1E90FFcc",
                  }}
                >
                  Privacy Policy
                </a>
              </p>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
