import {
  AccountTabContent,
  AppearanceTabContainer,
  DevicesTabContent,
  FriendsTabContent,
  NotificationsTabContent,
  ProfileTabContent,
  VoiceVideoTabContent,
} from "..";

export const tabsMap = {
  "My Account": {
    content: <AccountTabContent />,
    group: "User Settings",
  },
  "Profile & Activity": {
    content: <ProfileTabContent />,
    group: "User Settings",
  },
  Devices: { content: <DevicesTabContent />, group: "User Settings" },
  "Friends & Messages": {
    content: <FriendsTabContent />,
    group: "User Settings",
  },
  Appearance: { content: <AppearanceTabContainer />, group: "App Settings" },
  "Voice & Video": { content: <VoiceVideoTabContent />, group: "App Settings" },
  Notifications: {
    content: <NotificationsTabContent />,
    group: "App Settings",
  },
};
