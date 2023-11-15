import { useSelector } from "react-redux";
import SettingsLine from "../SettingsLine";
import Review from "@/components/Settings/Review/Review";
import {
  MainButton,
  RemovalButton,
  SettingsTitle,
  Title,
} from "../StyledElements";
import { Stack, Typography } from "@mui/material";
import passwordImg from "@/assets/password.svg";

export const AccountTabContent = () => {
  const name = useSelector((state) => state.auth.name);
  const username = useSelector((state) => state.auth.userName);
  const email = useSelector((state) => state.auth.email);
  return (
    <>
      <Review />
      <SettingsLine styles={{ margin: "40px 0 " }} />
      <Stack>
        <SettingsTitle component="h2">Password</SettingsTitle>
        <Typography sx={{ color: "#b5bac1", fontSize: 14, mb: "6px" }}>
          You will be prompted to enter your current password for verification.
        </Typography>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <MainButton>Change Password</MainButton>
          <img
            src={passwordImg}
            alt="password image"
            style={{ width: "154px" }}
          />
        </Stack>
      </Stack>
      <SettingsLine styles={{ margin: "20px 0 40px 0 " }} />
      <Title component="h2">Account Removal</Title>
      <Typography sx={{ color: "#b5bac1", fontSize: 14, mb: "16px" }}>
        Please note that once your account is deleted, it cannot be recovered.
        If you ever change your mind or have any concerns, our support team is
        available to assist you before taking this irreversible step.
      </Typography>
      <RemovalButton>Delete Account</RemovalButton>
    </>
  );
};
