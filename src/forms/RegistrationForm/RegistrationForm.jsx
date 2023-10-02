import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import { Button, Input } from "@/components";
import CustomDateSelector from "@/components/CustomDateSelector/CustomDateSelector";
import { Link, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "@/services/client";

const StyledStackSX = {
  direction: "column",
  justifyContent: "flex-start",
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

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const initialValues = {
    email: "",
    username: "",
    password: "",
    name: "",
    day: "",
    month: "",
    year: "",
  };

  const onSubmit = async (values, actions) => {
    const { email, username, name, password } = values;
    const registrationResult = await dispatch(
      register({
        email,
        username,
        name,
        password,
      })
    );

    if (registrationResult.payload.success) {
      navigate("channels/@me");
    }
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
          <Stack sx={StyledStackSX}>
            <Typography
              variant="h2"
              mb="12px"
              sx={{
                textAlign: "center",
                fontWeight: "medium",
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              Create an account
            </Typography>
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
            <CustomDateSelector setFieldValue={setFieldValue} sx={{ mb: 1 }} />
            <Button disabled={!isValid} type="submit" sx={{ mb: 3 }}>
              Continue
            </Button>
            <Typography sx={{ mb: 4, fontSize: "12px", color: "#ffffffbb" }}>
              By registering, you agree to Discord&apos;s&#32;
              <Link href="#" underline="none" sx={{ color: "#00a8fc" }}>
                Term&apos;s of Service&#32;
              </Link>
              and &#32;
              <Link href="#" underline="none" sx={{ color: "#00a8fc" }}>
                Privacy Policy.
              </Link>
            </Typography>
            <NavLink to="/login" className="text-sm font-medium text-[#00a8fc]">
              Already have an account?
            </NavLink>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
