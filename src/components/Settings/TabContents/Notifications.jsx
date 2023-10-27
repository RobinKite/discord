import SettingsLine from "../SettingsLine";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AntSwitch } from "../StyledElements";

export const NotificationsTabContent = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<AntSwitch />}
        label="Enable Desktop Notifications"
        labelPlacement="start"
        sx={{
          color: "#f2f3f5",
          fontWeight: 500,
          display: "flex",
          justifyContent: "space-between",
          mx: 0,
          mb: "10px",
        }}
      />
      <Typography sx={{ color: "#b5bac1", fontSize: "14px" }}>
        If you&apos;re looking for per-channel or per-server notifications,
        right-click the desired server icon and select Notification Settings.
      </Typography>
      <SettingsLine styles={{ marginY: "20px" }} />
      <FormControlLabel
        control={<AntSwitch defaultChecked />}
        label="Enable Unread Messages Badge"
        labelPlacement="start"
        sx={{
          color: "#f2f3f5",
          fontWeight: 500,
          display: "flex",
          justifyContent: "space-between",
          mx: 0,
          mb: "10px",
        }}
      />
      <Typography sx={{ color: "#b5bac1", fontSize: "14px" }}>
        Shows a red badge on the app icon when you have unread messages.
      </Typography>
      <SettingsLine styles={{ marginY: "20px" }} />
      <FormControlLabel
        control={<AntSwitch />}
        label="All notifications"
        labelPlacement="start"
        sx={{
          color: "#f2f3f5",
          fontWeight: 500,
          display: "flex",
          justifyContent: "space-between",
          mx: 0,
          mb: "10px",
        }}
      />
      <Typography sx={{ color: "#b5bac1", fontSize: "14px" }}>
        Turn on/off notifications globally.
      </Typography>
    </FormGroup>
  );
};
