import { AccountTabContent } from "./TabContents/Account";
import { AppearanceTabContainer } from "./TabContents/Appearance";
import { DevicesTabContent } from "./TabContents/Devices";
import { FriendsTabContent } from "./TabContents/Friends";
import { NotificationsTabContent } from "./TabContents/Notifications";
import { ProfileTabContent } from "./TabContents/Profile";
import { VoiceVideoTabContent } from "./TabContents/VoiceVideo";

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
