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
import { useEffect, useState } from "react";

export const VoiceVideoTabContent = () => {
  const [inputDevice, setInputDevice] = useState("");
  const [inputDevices, setInputDevices] = useState([]);
  const [outputDevice, setOutputDevice] = useState("");
  const [outputDevices, setOutputDevices] = useState([]);

  const updateAudioDevices = async () => {
    let localInputDevices = [];
    let localOutputDevices = [];
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      localInputDevices = devices.filter(
        (device) => device.kind === "audioinput",
      );
      localOutputDevices = devices.filter(
        (device) => device.kind === "audiooutput",
      );
      setInputDevices(localInputDevices);
      setOutputDevices(localOutputDevices);
      setInputDevice(inputDevices[0]?.deviceId || "");
      setOutputDevice(outputDevices[0]?.deviceId || "");
    } catch (err) {
      console.error("Error receiving audio devices: ", err);
    }
  };

  useEffect(() => {
    updateAudioDevices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack spacing={3}>
      <SettingsTitle component="h2">Voice Settings</SettingsTitle>
      <Stack direction="row" spacing={3}>
        <Stack sx={{ width: "320px" }}>
          <Title component="h3">Input device</Title>
          <CustomSelect
            value={inputDevice}
            onChange={(e) => setInputDevice(e.target.value)}>
            {inputDevices.map((device) => (
              <MenuItem key={device.deviceId} value={device.deviceId}>
                {device.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <Title component="h3">Input Volume</Title>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
          />
        </Stack>
        <Stack sx={{ width: "320px" }}>
          <Title component="h3">Output device</Title>
          <CustomSelect
            value={outputDevice}
            onChange={(e) => setOutputDevice(e.target.value)}>
            {outputDevices.map((device) => (
              <MenuItem key={device.deviceId} value={device.deviceId}>
                {device.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <Title component="h3">Output Volume</Title>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
          />
        </Stack>
      </Stack>
      <Title component="h3">Mic Test</Title>
      <Typography sx={{ color: "#b5bac1", fontSize: "14px", mb: "4px" }}>
        Having mic issues? Start a test and say something fun—we&apos;ll play
        your voice back to you.
      </Typography>
      <Stack direction="row" spacing={1}>
        <MicTest />
      </Stack>
      <SettingsLine />
      <SettingsTitle component="h3">Video Settings</SettingsTitle>
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
        }}>
        <Stack sx={{ width: "166px", height: "101px" }}>
          <img src={camera} />
        </Stack>
        <MainButton>Test Video</MainButton>
      </Stack>
      <Title component="h3">Camera</Title>
      <CustomSelect>
        <MenuItem value="">Default</MenuItem>
      </CustomSelect>
    </Stack>
  );
};
