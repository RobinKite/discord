import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { TabAboutUserInner } from "./TabAboutUserInner";
import { TabSharedServers } from "./TabSharedServers";
import { TabMutualFriends } from "./TabMutualFriends";
import { useSelector } from "react-redux";

export const ProfileTabsContent = ({ activeTabId }) => {
  const userServers = useSelector(
    (state) => state.profile.userProfile?.mutualServers
  );

  return (
    <Stack sx={{ minHeight: "231px", mt: "16px", gap: "8px" }}>
      {activeTabId === "aboutUser" && <TabAboutUserInner />}
      {activeTabId === "SharedServers" && (
        <TabSharedServers userServers={userServers} />
      )}
      {activeTabId === "MutualFriends" && <TabMutualFriends />}
    </Stack>
  );
};

ProfileTabsContent.propTypes = {
  activeTabId: PropTypes.string.isRequired,
};
