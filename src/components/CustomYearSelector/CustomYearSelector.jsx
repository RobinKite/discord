// import React, { useState } from "react";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";

// const CustomYearSelector = () => {
//   const [selectedYear, setSelectedYear] = useState("");

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   return (
//     <FormControl sx={{ minWidth: 120 }} size="small">
//       <Select
//         native
//         value={selectedYear}
//         onChange={handleYearChange}
//         inputProps={{
//           name: "year",
//           id: "custom-year-select",
//         }}
//         sx={{
//           borderRadius: 1,
//           backgroundColor: "#1e1f22",
//           border: "none",
//           fontSize: "18px",
//           fontWeight: "500",
//           color: "#c5c6c8",
//           outline: "none",
//           padding: 0.5,
//         }}
//       >
//         <option value="" disabled>
//           Year
//         </option>
//         {[...Array(123).keys()].map((index) => {
//           const year = 1900 + index + 1;
//           return (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           );
//         })}
//       </Select>
//     </FormControl>
//   );
// };

// export default CustomYearSelector;

import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const CustomYearSelector = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [yearOptions, setYearOptions] = useState([]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // Adjust the number of years as needed

    const options = [];
    options.push(
      <option key="" value="" disabled>
        Year
      </option>
    );

    for (let year = currentYear; year >= startYear; year--) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    setYearOptions(options);
  }, []);

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <Select
        native
        value={selectedYear}
        onChange={handleYearChange}
        inputProps={{
          name: "year",
          id: "custom-year-select",
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
        {yearOptions}
      </Select>
    </FormControl>
  );
};

export default CustomYearSelector;
