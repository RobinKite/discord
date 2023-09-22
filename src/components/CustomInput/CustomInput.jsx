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
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#1e1f22",
    border: "none",
    color: theme.palette.mode === "dark" ? grey[900] : "#dcdee1",
    fontSize: 18,
    padding: "12px",
    outline: "none",
  },
}));

export default function CustomizedInputsStyled(props) {
  const [field, meta] = useField(props.name);
  const { label, id, type, required } = props;

  const SelectLabel = styled(InputLabel)(() => ({
    "& .MuiFormLabel-asterisk": {
      color: "#dd3f41",
    },
  }));

  return (
    <FormControl variant="standard" sx={{ marginBottom: 3 }}>
      <SelectLabel
        shrink
        htmlFor={id}
        required={required}
        sx={{
          color: "#ffffffaa",
          textTransform: "uppercase",
          fontWeight: "900",
          fontSize: "20px",
        }}
      >
        {label}
      </SelectLabel>
      <CustomInput
        id={id}
        type={type ? type : "text"}
        {...field}
        {...props}
        sx={{ width: "100%", fontSize: "20px", color: "#fff" }}
      />

      {meta.touched && meta.error ? (
        <div style={{ color: "#fa777c", fontSize: "12px" }}>{meta.error}</div>
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
