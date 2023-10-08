import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { monthsArray } from "@/constants";
import { grey } from "@/constants/designTokens";
import PropTypes from "prop-types";
import { useField } from "formik";
import { getDaysArray, getYearsArray } from "@/utils/date";

const CustomSelect = styled(Select)(({ theme }) => ({
  "&": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#1e1f22",
    border: "none",
    color: theme.palette.mode === "dark" ? grey[900] : "#b5bac1",
    height: "40px",
    padding: "10px",
  },
  "& .MuiSelect-icon": {
    fontSize: "24px",
    color: "#b5bac1",
  },
}));

const CustomDateSelector = ({
  required,
  dayId,
  monthId,
  yearId,
  dayLabel,
  monthLabel,
  yearLabel,
}) => {
  const dayField = useField(dayId);
  const monthField = useField(monthId);
  const yearField = useField(yearId);

  const chosenYear = yearField[0].value;
  const chosenMonth = monthField[0].value;

  const yearsArray = getYearsArray();
  const daysArray = getDaysArray(chosenYear, chosenMonth);

  return (
    <>
      <fieldset className="mb-6 grid grid-cols-3 justify-between gap-3">
        <legend
          required
          className="mb-2 text-xs font-bold uppercase text-[#ffffffaa]">
          Date of birth
          {required && (
            <span className="ml-[3px] whitespace-nowrap font-star text-xs leading-[1.4375em] tracking-[0.00938em] text-[#dd3f41]">
              *
            </span>
          )}
        </legend>
        <DateSelect
          id={yearId}
          label={yearLabel}
          array={yearsArray}
          field={yearField[0]}
          meta={yearField[1]}
          helpers={yearField[2]}
          required={required}
        />
        <DateSelect
          id={monthId}
          label={monthLabel}
          array={monthsArray}
          field={monthField[0]}
          meta={monthField[1]}
          helpers={monthField[2]}
          required={required}
        />
        <DateSelect
          id={dayId}
          label={dayLabel}
          array={daysArray}
          field={dayField[0]}
          meta={dayField[1]}
          helpers={dayField[2]}
          required={required}
        />
      </fieldset>
    </>
  );
};

const DateSelect = ({ field, meta, label, id, array, required }) => {
  const handleRenderValue = (selected) => {
    if (!selected) return label;
    if (id === "month") return array[selected - 1];
    return selected;
  };

  return (
    <FormControl
      variant="standard"
      required={required}>
      <CustomSelect
        displayEmpty
        id={id}
        name={id}
        onChange={(value) => field.onChange(field.name, value)}
        label={label}
        renderValue={handleRenderValue}
        error={meta.touched && meta.error ? true : false}
        {...field}>
        <MenuItem
          disabled
          value="">
          <em>{label}</em>
        </MenuItem>
        {array.map((item, index) => (
          <MenuItem
            key={item}
            value={id === "month" ? index + 1 : item}>
            {item}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default CustomDateSelector;

CustomDateSelector.propTypes = {
  dayId: PropTypes.string,
  monthId: PropTypes.string,
  yearId: PropTypes.string,
  dayLabel: PropTypes.string,
  monthLabel: PropTypes.string,
  yearLabel: PropTypes.string,
  required: PropTypes.bool,
};

DateSelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  array: PropTypes.array,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
  helpers: PropTypes.shape({
    setValue: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
  }),
  required: PropTypes.bool,
};
