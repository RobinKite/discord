import { useSelector } from "react-redux";
import SettingsLine from "../SettingsLine";
import Review from "@/components/Settings/Review/Review";
import {
  MainButton,
  RemovalButton,
  SettingsTitle,
  Title,
} from "../StyledElements";

export const AccountTabContent = () => {
  const name = useSelector((state) => state.auth.name);
  const username = useSelector((state) => state.auth.userName);
  const email = useSelector((state) => state.auth.email);
  return (
    <>
      <Review />
      <SettingsLine />
      <SettingsTitle>Password</SettingsTitle>
      <MainButton>Change Password</MainButton>
      <SettingsLine />
      <Title>Account Removal</Title>
      <RemovalButton>Delete Account</RemovalButton>
    </>
  );
};
