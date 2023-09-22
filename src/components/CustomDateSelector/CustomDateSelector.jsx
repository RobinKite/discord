import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { daysArray, monthNames } from "@/constants";
import { grey } from "@/constants/designTokens";
import PropTypes from "prop-types";
import { useField } from "formik";

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

const CustomDateSelector = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <>
      <fieldset className="grid grid-cols-3 justify-between mb-6 gap-3">
        <legend
          required
          className="text-xs uppercase text-[#ffffffaa] mb-2 font-bold">
          Date of birth
          <span className="text-[#dd3f41] text-xs font-star leading-[1.4375em] tracking-[0.00938em] whitespace-nowrap ml-[3px]">
            *
          </span>
        </legend>
        <FormControl variant="standard">
          <CustomMonthSelect
            selectedMonth={selectedMonth}
            handleMonthChange={handleMonthChange}
          />
        </FormControl>

        <FormControl variant="standard">
          <CustomDaySelect
            selectedDay={selectedDay}
            handleDayChange={handleDayChange}
          />
        </FormControl>

        <FormControl variant="standard">
          <CustomYearSelect
            selectedYear={selectedYear}
            handleYearChange={handleYearChange}
          />
        </FormControl>
      </fieldset>
    </>
  );
};

const CustomYearSelect = ({ selectedYear, handleYearChange }) => {
  const [yearOptions, setYearOptions] = useState([]);
  const [field] = useField({ name: "year" });

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;

    const options = [
      <MenuItem
        key=""
        value=""
        disabled>
        Year
      </MenuItem>,
    ];

    for (let year = currentYear; year >= startYear; year--) {
      options.push(
        <MenuItem
          key={year}
          value={year}>
          {year}
        </MenuItem>
      );
    }

    setYearOptions(options);
  }, []);

  const handleYearRenderValue = (selected) => {
    if (!selected) return "Year";
    return selected;
  };

  return (
    <CustomSelect
      displayEmpty
      id="year"
      value={selectedYear}
      onChange={handleYearChange}
      label="Year"
      renderValue={handleYearRenderValue}
      {...field}>
      {yearOptions}
    </CustomSelect>
  );
};

const CustomMonthSelect = ({ selectedMonth, handleMonthChange }) => {
  const [field] = useField({ name: "month" });

  const handleMonthRenderValue = (selected) => {
    if (!selected) return "Month";
    const index = Number(selected) - 1;
    return monthNames[index];
  };
  return (
    <CustomSelect
      displayEmpty
      id="month"
      value={selectedMonth}
      onChange={handleMonthChange}
      label="Month"
      renderValue={handleMonthRenderValue}
      {...field}>
      <MenuItem
        disabled
        value="">
        <em>Month</em>
      </MenuItem>
      {monthNames.map((month, index) => (
        <MenuItem
          key={index + 1}
          value={index + 1}>
          {month}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

const CustomDaySelect = ({ selectedDay, handleDayChange }) => {
  const [field] = useField({ name: "day" });

  const handleDayRenderValue = (selected) => {
    if (!selected) return "Day";
    return selected;
  };
  return (
    <CustomSelect
      displayEmpty
      id="day"
      value={selectedDay}
      onChange={handleDayChange}
      label="Day"
      renderValue={handleDayRenderValue}
      {...field}>
      <MenuItem
        disabled
        value="">
        <em>Day</em>
      </MenuItem>
      {daysArray.map((day) => (
        <MenuItem
          key={day}
          value={day}>
          {day}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

CustomMonthSelect.propTypes = {
  selectedMonth: PropTypes.string.isRequired,
  handleMonthChange: PropTypes.func.isRequired,
};
CustomDaySelect.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  handleDayChange: PropTypes.func.isRequired,
};
CustomYearSelect.propTypes = {
  selectedYear: PropTypes.string.isRequired,
  handleYearChange: PropTypes.func.isRequired,
};

export default CustomDateSelector;
