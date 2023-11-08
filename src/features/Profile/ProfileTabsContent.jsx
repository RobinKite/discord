import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { TabAboutUserInner } from "./TabAboutUserInner";
import { TabSharedServers } from "./TabSharedServers";
import { TabMutualFriends } from "./TabMutualFriends";

export const ProfileTabsContent = ({ activeTabId }) => {
  return (
    <Stack sx={{ minHeight: "231px", mt: "16px", gap: "8px" }}>
      {activeTabId === "aboutUser" && <TabAboutUserInner />}
      {activeTabId === "SharedServers" && <TabSharedServers />}
      {activeTabId === "MutualFriends" && <TabMutualFriends />}
    </Stack>
  );
};

ProfileTabsContent.propTypes = {
  activeTabId: PropTypes.string.isRequired,
};
