import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const CustomDateSelector = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <Select
        native
        value={selectedDate}
        onChange={handleDateChange}
        inputProps={{
          name: "date",
          id: "custom-date-select",
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
          Day
        </option>
        {[...Array(31).keys()].map((day) => (
          <option key={day + 1} value={day + 1}>
            {day + 1}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDateSelector;
