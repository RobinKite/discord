import SettingsLine from "../SettingsLine";

export const DevicesTabContent = () => {
  return (
    <>
      <h3>Current Device</h3>
      <div>*current device*</div>
      <SettingsLine />
      <h3>Other Devices</h3>
      <div>*other devices*</div>
    </>
  );
};
