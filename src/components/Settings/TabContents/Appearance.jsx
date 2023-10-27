import { Radio, Stack, Tooltip } from "@mui/material";
import SettingsLine from "../SettingsLine";
import { useState } from "react";
import { PrettoSlider, Title } from "../StyledElements";
import { BsCheckLg } from "react-icons/bs";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AntSwitch } from "../StyledElements";

export const AppearanceTabContainer = () => {
  const [selectedValue, setSelectedValue] = useState("dark");
  const [space, setSpace] = useState(16);
  const [fontSize, setFontSize] = useState(16);

  const handleFontSize = (event, newValue) => {
    setFontSize(newValue);
  };

  const handleSlider = (event, newValue) => {
    setSpace(newValue);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Title>Theme</Title>
      <Tooltip>
        <Stack direction="row" spacing={2} sx={{ mb: "16px" }}>
          <Stack
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              bgcolor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: selectedValue === "light" ? "2px solid #5865f2" : "none",
              position: "relative",
            }}>
            <Radio
              checked={selectedValue === "light"}
              onChange={handleChange}
              value="light"
              name="radio-buttons"
              inputProps={{ "aria-label": "light" }}
              sx={{ width: "55px", opacity: 0 }}
            />
            {selectedValue === "light" && (
              <BsCheckLg
                size={20}
                color="#fff"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "#5865f2",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
            )}
          </Stack>
          <Stack
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              bgcolor: "#3133338",
              border: selectedValue === "dark" ? "2px solid #5865f2" : "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}>
            <Radio
              checked={selectedValue === "dark"}
              onChange={handleChange}
              value="dark"
              name="radio-buttons"
              inputProps={{ "aria-label": "dark" }}
              sx={{ width: "55px", opacity: 0 }}
            />
            {selectedValue === "dark" && (
              <BsCheckLg
                size={20}
                color="#fff"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "#5865f2",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
            )}
          </Stack>
        </Stack>
      </Tooltip>
      <SettingsLine styles={{ marginBottom: "20px" }} />
      <Stack sx={{ mb: "20px" }}>
        <Title>Chat Font Scaling</Title>
        <PrettoSlider
          value={fontSize}
          onChange={handleFontSize}
          min={12}
          max={24}
          step={1}
          valueLabelDisplay="off"
          aria-labelledby="font-slider-label"
          marks={[
            { value: 12, label: "12px" },
            { value: 14, label: "14px" },
            { value: 15, label: "15px" },
            { value: 16, label: "16px" },
            { value: 18, label: "18px" },
            { value: 20, label: "20px" },
            { value: 24, label: "24px" },
          ]}
        />
      </Stack>
      <Stack>
        <Title>Space Between Message Groups</Title>
        <PrettoSlider
          value={space}
          onChange={handleSlider}
          min={0}
          max={24}
          step={4}
          valueLabelDisplay="off"
          aria-labelledby="slider-label"
          marks={[
            { value: 0, label: "0px" },
            { value: 4, label: "4px" },
            { value: 8, label: "8px" },
            { value: 16, label: "16px" },
            { value: 24, label: "24px" },
          ]}
        />
      </Stack>
      <SettingsLine styles={{ marginBottom: "20px" }} />
      <FormControlLabel
        control={<AntSwitch />}
        label="Images preview"
        labelPlacement="start"
        sx={{
          color: "#f2f3f5",
          fontWeight: 500,
          fontSize: "16px",
          display: "flex",
          justifyContent: "space-between",
          mx: 0,
          mb: "10px",
        }}
      />
    </>
  );
};
