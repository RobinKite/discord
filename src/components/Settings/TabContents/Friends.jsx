import SettingsLine from "../SettingsLine";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AntSwitch, Title } from "../StyledElements";

export const FriendsTabContent = () => {
  return (
    <FormGroup>
      <Title>Who can send you a friend request</Title>
      <FormControlLabel
        control={<AntSwitch defaultChecked />}
        label="Everyone"
        labelPlacement="start"
        sx={{
          color: "#f2f3f5",
          fontWeight: 600,
          display: "flex",
          justifyContent: "space-between",
          m: "8px 0 20px",
        }}
      />
      <SettingsLine styles={{ marginBottom: "20px" }} />
      <FormControlLabel
        control={<AntSwitch defaultChecked />}
        label="Friends of Friends"
        labelPlacement="start"
        sx={{
          color: "#f2f3f5",
          fontWeight: 600,
          display: "flex",
          justifyContent: "space-between",
          m: "0 0 20px",
        }}
      />
      <SettingsLine styles={{ marginBottom: "20px" }} />
      <FormControlLabel
        control={<AntSwitch defaultChecked />}
        label="Server Members"
        labelPlacement="start"
        sx={{
          color: "#f2f3f5",
          fontWeight: 600,
          display: "flex",
          justifyContent: "space-between",
          mb: "20px",
        }}
      />
      <SettingsLine styles={{ marginBottom: "20px" }} />
      <FormControlLabel
        control={<AntSwitch defaultChecked />}
        label="Allow messages from server members?"
        labelPlacement="start"
        sx={{
          color: "#f2f3f5",
          fontWeight: 600,
          display: "flex",
          justifyContent: "space-between",
          mb: "20px",
        }}
      />
    </FormGroup>
  );
};
