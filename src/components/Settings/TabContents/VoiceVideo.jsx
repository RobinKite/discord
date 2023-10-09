import { MenuItem, Stack, Typography } from "@mui/material";
import SettingsLine from "../SettingsLine";
import {
  Title,
  CustomSelect,
  PrettoSlider,
  SettingsTitle,
  MainButton,
} from "../StyledElements";
import MicTest from "../MicTest/MicTest";

export const VoiceVideoTabContent = () => {
  return (
    <>
      <SettingsTitle>Voice Settings</SettingsTitle>
      <Stack direction="row" spacing={3}>
        <Stack sx={{ width: "320px" }}>
          <Title>Input device</Title>
          <CustomSelect>
            <MenuItem value="">AirPods</MenuItem>
            <MenuItem value="">MacBook Air</MenuItem>
          </CustomSelect>
          <Title>Input Volume</Title>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
          />
        </Stack>
        <Stack sx={{ width: "320px" }}>
          <Title>Output device</Title>
          <CustomSelect>
            <MenuItem value="">AirPods</MenuItem>
            <MenuItem value="">MacBook Air</MenuItem>
          </CustomSelect>
          <Title>Output Volume</Title>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
          />
        </Stack>
      </Stack>
      <Title>Mic Test</Title>
      <Typography sx={{ color: "#b5bac1", fontSize: "14px", mb: "4px" }}>
        Having mic issues? Start a test and say something fun—we&apos;ll play
        your voice back to you.
      </Typography>
      <Stack direction="row" spacing={1}>
        <MainButton>Let&apos;s Check</MainButton>
        <MicTest />
      </Stack>
      <SettingsLine />
      <SettingsTitle>Video Settings</SettingsTitle>
      <div>*video preview*</div>
      <Title>Camera</Title>
      <CustomSelect>
        <MenuItem value="">Default</MenuItem>
      </CustomSelect>
    </>
  );
};
