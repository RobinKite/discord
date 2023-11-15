import { Modal } from "@/constants";
import { closeModal } from "@/redux/slices/uiSlice";
import { useDispatch } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

import SettingsNavSection from "./SettingsNavSection";
import { logoutUser } from "@/redux/slices/authSlice";
import SettingsLine from "./SettingsLine";
import { tabsMap } from "./layout";
import SettingsTabContainer from "./SettingsTabContainer";
import { List, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CloseButton, LogOutButton } from "./StyledElements";
import { IoArrowForwardSharp } from "react-icons/io5";

const Settings = () => {
  const dispatch = useDispatch();

  const appVersion = "Alpha 0.0.1"; //mocking
  const OCVersion = "*oc version*"; //mocking

  const initialActiveTabState = {
    header: Object.keys(tabsMap)[0],
    content: Object.values(tabsMap)[0].content,
  };

  const [activeTab, setActiveTab] = useState(initialActiveTabState.header);
  const [activeTabContent, setActiveTabContent] = useState(
    initialActiveTabState.content
  );

  const tabArray = Object.entries(tabsMap).map(([name, tab]) => ({
    name,
    ...tab,
  }));

  const groupedTabs = tabArray.reduce((groups, tab) => {
    const { group } = tab;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(tab);
    return groups;
  }, {});

  const handleCloseModal = () => {
    dispatch(closeModal(Modal.SETTINGS));
  };

  const handleLogout = () => {
    //TODO: Add auth/logout
    try {
      dispatch(logoutUser());
      handleCloseModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Stack
      direction="row"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <Stack
        sx={{
          bgcolor: "#2b2d31",
          display: "flex",
          flexShrink: 0,
          flexGrow: 1,
          flexBasis: "218px",
          justifyContent: "flex-start",
          alignItems: "end",
        }}
      >
        <NavLink
          style={{
            padding: "60px 6px 60px 20px",
          }}
        >
          {Object.keys(groupedTabs).map((group) => (
            <SettingsNavSection
              key={group}
              header={group}
              items={groupedTabs[group]}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setActiveTabContent={setActiveTabContent}
            />
          ))}
          <LogOutButton onClick={handleLogout}>
            log out
            <IoArrowForwardSharp
              style={{
                backgroundColor: "#b5bac1",
                color: "#2b2d31",
                width: "10px",
                height: "13px",
                borderRadius: "2px",
                position: "absolute",
                top: "9px",
                right: "14px",
              }}
            />
          </LogOutButton>
          <SettingsLine styles={{ margin: "8px 10px" }} />
          <Stack sx={{ p: "8px 10px" }}>
            <Typography sx={{ fontSize: "12px", color: "#949ba4" }}>
              {appVersion}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#949ba4" }}>
              {OCVersion}
            </Typography>
          </Stack>
        </NavLink>
      </Stack>
      <Stack
        sx={{
          bgcolor: "#313338",
          display: "flex",
          flexGrow: 1,
          flexBasis: "800px",
          justifyContent: "flex-start",
          minHeight: "100%",
          overflowY: "scroll",
        }}
      >
        <Stack
          sx={{
            minWidth: "460px",
            maxWidth: "740px",
            position: "relative",
            pb: "80px",
            pt: "60px",
            paddingX: "40px",
          }}
        >
          <List>
            <SettingsTabContainer
              header={activeTab}
              content={activeTabContent}
            />
          </List>
          <CloseButton onClick={handleCloseModal}>
            <IoCloseCircleOutline size={44} style={{ fill: "#b5bac1" }} /> Esc
          </CloseButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Settings;
