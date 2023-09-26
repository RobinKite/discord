import { memo } from "react";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import { useField } from "formik";
import PropTypes from "prop-types";
import { Typography, InputLabel } from "@mui/material";

export const Input = memo((props) => {
  const { label, id, type, required, name } = props;
  const [field, meta] = useField(name);

  return (
    <>
      <InputLabel htmlFor={id} required={required}>
        {label}
      </InputLabel>
      <FormControl fullWidth variant="standard" sx={{ mb: "20px" }}>
        <InputBase id={id} type={type ? type : "text"} {...field} {...props} />
        {meta.touched && meta.error ? (
          <Typography
            type="p"
            variant="body2"
            text-xs="true"
            sx={(theme) => ({
              color: theme.extendPalette.red,
            })}
          >
            {meta.error}
          </Typography>
        ) : null}
      </FormControl>
    </>
  );
});

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

Input.default = {
  type: "text",
  required: false,
};
