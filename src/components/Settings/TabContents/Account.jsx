import { useSelector } from "react-redux";
import SettingsLine from "../SettingsLine";

export const AccountTabContent = () => {
  const name = useSelector((state) => state.auth.name);
  const username = useSelector((state) => state.auth.userName);
  const email = useSelector((state) => state.auth.email);
  return (
    <>
      <div>*preview*</div>
      <SettingsLine />
      <label htmlFor="displayName">Display Name</label>
      <input
        id="displayName"
        type="text"
        placeholder={name}
      />
      <SettingsLine />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder={username}
      />
      <SettingsLine />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder={email}
      />
      <SettingsLine />
      <h3>Password</h3>
      <button>Change Password</button>
      <SettingsLine />
      <h3>Account Removal</h3>
      <button>Delete Account</button>
    </>
  );
};
