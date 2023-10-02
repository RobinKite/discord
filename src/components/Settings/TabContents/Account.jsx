import SettingsLine from "../SettingsLine";

export const AccountTabContent = () => {
  return (
    <>
      <div>*preview*</div>
      <SettingsLine />
      <label htmlFor="displayName">Display Name</label>
      <input
        id="displayName"
        type="text"
      />
      <SettingsLine />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
      />
      <SettingsLine />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
      />
      <SettingsLine />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
      />
      <SettingsLine />
      <h3>Account removal</h3>
      <button>Delete account</button>
    </>
  );
};
