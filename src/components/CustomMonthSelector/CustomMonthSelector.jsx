import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const CustomMonthSelector = () => {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <Select
        native
        value={selectedMonth}
        onChange={handleMonthChange}
        inputProps={{
          name: "month",
          id: "custom-month-select",
        }}
        sx={{
          borderRadius: 1,
          backgroundColor: "#1e1f22",
          border: "none",
          fontSize: "18px",
          fontWeight: "500",
          color: "#c5c6c8",
          outline: "none",
          padding: 0.5,
        }}
      >
        <option value="" disabled>
          Month
        </option>
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month, index) => (
          <option key={index + 1} value={index + 1}>
            {month}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomMonthSelector;
