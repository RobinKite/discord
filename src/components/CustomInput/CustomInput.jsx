import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useField } from "formik";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const CustomInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    color: "#ffffff",
  },
  label: {
    color: "#A0AAB4",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "dark" ? "#ffffff80" : grey[900],
    border: "none",
    color: theme.palette.mode === "dark" ? grey[900] : "#ffffff80",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    outline: "none",
  },
}));

export default function CustomizedInputsStyled(props) {
  const { pathname } = useLocation();
  const [field, meta] = useField(props.name);
  const { label, id, type } = props;

  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor={id} style={{ color: "#ffffffbb" }}>
        {label}
      </InputLabel>
      <CustomInput id={id} type={type ? type : "text"} {...field} {...props} />

      {meta.touched && meta.error ? (
        <div style={{ color: "#DC143C", fontSize: "12px" }}>
          {pathname === "/login" && field.name === "password" ? (
            <a
              href="#"
              style={{
                color: "#DC143C",
                fontSize: "12px",
              }}
            >
              Forgot your password?
            </a>
          ) : (
            meta.error
          )}
        </div>
      ) : null}
    </FormControl>
  );
}

CustomizedInputsStyled.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

CustomizedInputsStyled.default = {
  type: "text",
};
