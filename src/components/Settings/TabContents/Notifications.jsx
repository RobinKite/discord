import SettingsLine from "../SettingsLine";

export const NotificationsTabContent = () => {
  return (
    <>
      <label htmlFor="desktopNotificatons">Enable Desktop Notifications</label>
      <input
        type="checkbox"
        name="desktopNotificatons"
        id="desktopNotificatons"
      />
      <p>
        If you&apos;re looking for per-channel or per-server notifications,
        right-click the desired server icon and select Notification Settings.
      </p>
      <SettingsLine />
      <label htmlFor="unreadBadge">Enable Unread Messages Badge</label>
      <input
        type="checkbox"
        name="unreadBadge"
        id="unreadBadge"
      />
      <p>Shows a red badge on the app icon when you have unread messages.</p>
      <SettingsLine />
      <label htmlFor="allNotifications">All notifications</label>
      <input
        type="checkbox"
        name="allNotifications"
        id="allNotifications"
      />
      <p>Turn on/off notifications globally.</p>
    </>
  );
};
