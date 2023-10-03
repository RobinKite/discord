import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import { Button, Input } from "@/components";
import CustomDateSelector from "@/components/CustomDateSelector/CustomDateSelector";
import { useDispatch, useSelector } from "react-redux";
import { register, setIsLoading } from "@/redux/slices/authSlice";
import { Oval } from "react-loader-spinner";
import { Link, Stack, Typography } from "@mui/material";

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
      onSubmit={onSubmit}
    >
      {({ isValid }) => (
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
            <CustomDateSelector
              dayId="day"
              monthId="month"
              yearId="year"
              dayLabel="Day"
              monthLabel="Month"
              yearLabel="Year"
              required={true}
            />

            <Button disabled={!isValid} type="submit" sx={{ mb: 3 }}>
              {isLoading ? (
                <span className="flex justify-center">
                  <Oval width={20} height={20} />
                </span>
              ) : (
                "Continue"
              )}
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
