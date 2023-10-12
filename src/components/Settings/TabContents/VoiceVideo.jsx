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
import camera from "../../../assets/camera.svg";

export const VoiceVideoTabContent = () => {
  return (
    <Stack spacing={3}>
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
        {/* <MainButton>Let&apos;s Check</MainButton> */}
        <MicTest />
      </Stack>
      <SettingsLine />
      <SettingsTitle>Video Settings</SettingsTitle>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{
          width: "660px",
          height: "220px",
          bgcolor: "#2b2d31",
          border: "1px solid #1e1f22",
          borderRadius: "4px",
        }}
      >
        <Stack sx={{ width: "166px", height: "101px" }}>
          <img src={camera} />
        </Stack>
        <MainButton>Test Video</MainButton>
      </Stack>
      <Title>Camera</Title>
      <CustomSelect>
        <MenuItem value="">Default</MenuItem>
      </CustomSelect>
    </Stack>
  );
};
