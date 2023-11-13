import SettingsLine from "../SettingsLine";
import Review from "@/components/Settings/Review/Review";
import {
  MainButton,
  RemovalButton,
  SettingsTitle,
  Title,
} from "../StyledElements";

export const AccountTabContent = () => {
  return (
    <>
      <Review />
      <SettingsLine styles={{ margin: "40px 0 " }} />
      <SettingsTitle component="h2">Password</SettingsTitle>
      <MainButton>Change Password</MainButton>
      <SettingsLine styles={{ margin: "20px 0 40px 0 " }} />
      <Title component="h2">Account Removal</Title>
      <RemovalButton>Delete Account</RemovalButton>
    </>
  );
};
