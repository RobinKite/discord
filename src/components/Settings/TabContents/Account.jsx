import { useSelector } from "react-redux";
import {
  MainButton,
  RemovalButton,
  SettingsTitle,
  Title,
} from "../StyledElements";
import { Review } from "../Review/Review";
import { SettingsLine } from "../SettingsLine";

export const AccountTabContent = () => {
  const name = useSelector((state) => state.auth.name);
  const username = useSelector((state) => state.auth.userName);
  const email = useSelector((state) => state.auth.email);
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
