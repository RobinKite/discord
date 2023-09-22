import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button, InputLabel, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import validationSchema from "./validationSchema";
import CustomInput from "@/components/CustomInput/CustomInput";
import CustomDateSelector from "@/components/CustomDateSelector/CustomDateSelector";
import CustomMonthSelector from "@/components/CustomMonthSelector/CustomMonthSelector";
import CustomYearSelector from "@/components/CustomYearSelector/CustomYearSelector";

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

  const SelectLabel = styled(InputLabel)(() => ({
    "& .MuiFormLabel-asterisk": {
      color: "#dd3f41",
    },
  }));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(form) => {
        return (
          <Form>
            <div className="grid grid-cols-1 bg-[#2c2f33] p-10 bottom-1/2 right-1/2 absolute translate-y-1/2 translate-x-1/2 rounded-lg">
              <h2 className="text-center text-white font-bold text-3xl mb-6">
                Create an account
              </h2>
              <CustomInput
                id="email"
                label="E-mail"
                type="email"
                name="email"
                required
              />
              <CustomInput
                id="username"
                label="Username"
                name="username"
                required
              />
              <CustomInput id="name" label="Display name" name="name" />
              <CustomInput
                id="password"
                label="Password"
                type="password"
                name="password"
                required
              />
              <SelectLabel
                htmlFor="date-select"
                required
                sx={{
                  color: "#ffffffaa",
                  textTransform: "uppercase",
                  fontWeight: "900",
                  marginBottom: 0.5,
                }}
              >
                Date of birth
              </SelectLabel>
              <div className="grid grid-cols-3 justify-between mb-6 gap-3">
                <CustomDateSelector />
                <CustomMonthSelector />
                <CustomYearSelector />
              </div>
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
                Continue
              </Button>
              <p
                style={{
                  color: "#ffffffbb",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                By registering, you agree to Discord&apos;s&#32;
                <a
                  href="#"
                  style={{
                    color: "#00a8fc",
                  }}
                >
                  Term&apos;s of Service&#32;
                </a>
                and &#32;
                <a
                  href="#"
                  style={{
                    color: "#00a8fc",
                  }}
                >
                  Privacy Policy.
                </a>
              </p>
              <NavLink
                to="/login"
                style={{
                  color: "#00a8fc",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Already have an account?
              </NavLink>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
