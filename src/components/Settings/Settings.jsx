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
import { Button, List, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CloseButton, LogOutButton } from "./StyledElements";

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
        boxSizing: "border-box",
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
            paddingTop: "60px",
            paddingBottom: "60px",
            paddingLeft: "20px",
            paddingRight: "6px",
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
          {/* <button
            className="w-full rounded-[4px] px-[10px] py-[6px] text-left text-[#B5BAC1] hover:bg-[#4e50584c] hover:text-white"
            onClick={handleLogout}
          >
            Log out
          </button> */}
          <LogOutButton onClick={handleLogout}>log out</LogOutButton>
          <SettingsLine />
          <Typography>{appVersion}</Typography>
          <Typography>{OCVersion}</Typography>
        </NavLink>
      </Stack>
      <Stack
        sx={{
          bgcolor: "#313338",
          display: "flex",
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: "800px",
          justifyContent: "flex-start",
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
            <IoCloseCircleOutline color="#b5bac1" size={44} />
            Esc
          </CloseButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Settings;
