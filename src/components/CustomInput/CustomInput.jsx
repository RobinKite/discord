import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import { useField } from "formik";
import PropTypes from "prop-types";
import { grey } from "@/constants/designTokens";
import { CustomLabel } from "@/forms";

const CustomInput = styled(InputBase)(({ theme }) => ({
  "&": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#1e1f22",
    border: "none",
    color: theme.palette.mode === "dark" ? grey[900] : "#dcdee1",
    height: "40px",
    padding: "10px",
    outline: "none",
    marginBottom: "6px",
  },
}));

export default function CustomizedInputsStyled(props) {
  const [field, meta] = useField(props.name);
  const { label, id, type, required } = props;

  return (
    <>
      <CustomLabel
        htmlFor={id}
        required={required}>
        {label}
      </CustomLabel>
      <FormControl
        variant="standard"
        sx={{ marginBottom: "20px" }}>
        <CustomInput
          id={id}
          type={type ? type : "text"}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <p className="text-thin h-full text-sm text-[#fa777c]">
            {meta.error}
          </p>
        ) : null}
      </FormControl>
    </>
  );
}

CustomizedInputsStyled.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

CustomizedInputsStyled.default = {
  type: "text",
  required: false,
};
