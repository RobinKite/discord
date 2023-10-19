import SettingsLine from "../SettingsLine";
import Typography from "@mui/material/Typography";
import { Button, Stack, styled } from "@mui/material";
import { RiComputerLine } from "react-icons/ri";
import { FaExclamation, FaMobileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  DeviceSpan,
  DeviceText,
  DotSpan,
  RemovalButton,
  Title,
} from "../StyledElements";

export const DevicesTabContent = () => {
  return (
    <>
      <DeviceText>
        Here are all the devices that are currently logged in with your Discord
        account. You can log out of each one individually or all other devices.
      </DeviceText>
      <DeviceText>
        If you see an entry you don't recognize, log out of that device and
        change your Discord account password immediately.
      </DeviceText>
      <Stack sx={{ margin: "32px 0" }}>
        <Title>Current Device</Title>
        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
          sx={{ paddingY: "20px", mb: "20px" }}
        >
          <DeviceSpan sx={{ backgroundColor: "#b5bac1" }}>
            <RiComputerLine size={26} />
          </DeviceSpan>
          <Stack>
            <Typography
              sx={{
                color: "#dbdee1",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Mac Os X <DotSpan /> Chrome
            </Typography>
            <Typography
              sx={{
                color: "#dbdee1",
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "capitalize",
              }}
            >
              Kyiv, Kyiv City, Ukraine
            </Typography>
          </Stack>
        </Stack>
        <Title>Other Devices</Title>
        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
          sx={{ p: "16px 0" }}
        >
          <DeviceSpan sx={{ backgroundColor: "#b5bac1" }}>
            <FaMobileAlt size={26} />
          </DeviceSpan>
          <Stack>
            <Typography
              sx={{
                color: "#dbdee1",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "5px",
              }}
            >
              IOS <DotSpan /> Discord IOS
            </Typography>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={0.5}
            >
              <Typography
                sx={{
                  color: "#dbdee1",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                Kyiv, Kyiv City, Ukraine
              </Typography>
              <DotSpan />
              <Typography
                sx={{
                  color: "#dbdee1",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                14 hours ago
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <SettingsLine />
        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
          sx={{ p: "16px 0" }}
        >
          <DeviceSpan
            sx={{
              bgcolor: "#4e5058",
            }}
          >
            <FaExclamation size={26} color="#2b2d31" />
          </DeviceSpan>
          <Stack>
            <Typography
              sx={{
                color: "#949ba4",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                mb: "8px",
              }}
            >
              Some older devices may not be shown here
            </Typography>
            <Typography
              sx={{ color: "#949ba4", fontSize: "14px", fontWeight: 500 }}
            >
              To log them out, please{" "}
              <NavLink to="#" style={{ color: "#00a8fc" }}>
                change your password
              </NavLink>
            </Typography>
          </Stack>
        </Stack>
        <SettingsLine />
      </Stack>
      <Title sx={{ mb: "8px" }}>Log out of all known devices</Title>
      <Typography
        sx={{ color: "#949ba4", fontSize: "14px", fontWeight: 500, mb: "16px" }}
      >
        You&apos;ll have to log back in on all logged out devices
      </Typography>
      <RemovalButton>Log out all known devices</RemovalButton>
    </>
  );
};
