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

const Settings = () => {
  const dispatch = useDispatch();

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
    <div className="absolute inset-0 z-50 box-border flex">
      <div className="flex shrink-0 grow basis-[218px] justify-end bg-[#2b2d31]">
        <nav className="py-[60px] pl-5 pr-[6px]">
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
          <button
            className="w-full rounded-[4px] px-[10px] py-[6px] text-left text-[#B5BAC1] hover:bg-[#4e50584c] hover:text-white"
            onClick={handleLogout}>
            Log out
          </button>
          <SettingsLine />
          <p>Alpha 0.0.1</p>
          <p>*oc version*</p>
        </nav>
      </div>
      <div className="flex shrink grow basis-[800px] justify-start bg-[#313338]">
        <div className="relative min-w-[460px] max-w-[740px] px-10 pb-20 pt-[60px]">
          <ul>
            <SettingsTabContainer
              header={activeTab}
              content={activeTabContent}
            />
          </ul>
          <button
            className="absolute right-0 top-[60px] rounded-full hover:bg-[#4e50584c]"
            onClick={handleCloseModal}>
            <IoCloseCircleOutline
              color="#fff"
              size={44}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
