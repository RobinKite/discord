import { Modal } from "@/constants";
import useAuth from "@/hooks/useAuth";
import { closeModal } from "@/redux/slices/uiSlice";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

const tabsMap = {
  user: {
    name: "User Settings",
    children: [
      "My Account",
      "Profile & Activity",
      "Devices",
      "Friends & Messages",
    ],
  },
  app: {
    name: "App Settings",
    children: ["Appearance", "Voice & Video", "Notifications"],
  },
  noname: {
    children: ["Log out"],
  },
};

const allTabs = [...tabsMap.user.children, ...tabsMap.app.children];

const Settings = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("My Account");

  const handleCloseModal = () => {
    dispatch(closeModal(Modal.SETTINGS));
  };

  return (
    <div className="absolute inset-0 z-50 box-border flex">
      <div className="flex shrink-0 grow basis-[218px] justify-end bg-[#2b2d31]">
        <nav className="py-[60px] pl-5 pr-[6px]">
          {Object.entries(tabsMap).map(([key, value]) => (
            <SettingsNavSection
              key={key}
              header={value.name}
              items={value.children}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </nav>
      </div>
      <div className="flex shrink grow basis-[800px] justify-start bg-[#313338]">
        <div className="relative min-w-[460px] max-w-[740px] px-10 pb-20 pt-[60px]">
          <ul>
            {allTabs.map((childName) => (
              <SettingsTabContainer
                key={childName}
                header={childName}
                isActive={activeTab === childName}></SettingsTabContainer>
            ))}
          </ul>
          <button
            className="absolute right-0 top-[60px] rounded-full hover:bg-[#4e50584c]"
            onClick={handleCloseModal}>
            <IoCloseCircleOutline color="#fff" size={44} />
          </button>
        </div>
      </div>
    </div>
  );
};

const SettingsNavSection = ({ header, items, activeTab, setActiveTab }) => (
  <>
    {header && (
      <h2 className="px-[10px] py-[6px] text-xs uppercase text-[#949ba4]">
        {header}
      </h2>
    )}
    <ul>
      {items.map((childName) => (
        <SettingsNavItem
          key={childName}
          name={childName}
          isActive={activeTab === childName}
          onClick={() => setActiveTab(childName)}
        />
      ))}
    </ul>
    <div className="mx-2 my-2.5 box-border block h-px bg-[#949ba448] content-['']"></div>
  </>
);

const SettingsNavItem = ({ name, isActive, onClick }) => {
  const { setAuth } = useAuth();
  const handleLogout = () => {
    try {
      setAuth(null);
      onClick();
    } catch (e) {
      console.error(e);
    }
  };
  const handleClick = name === "Log out" ? handleLogout : onClick;
  return (
    <li>
      <button
        className={`w-full rounded-[4px] px-[10px] py-[6px] text-left text-[#B5BAC1] hover:bg-[#4e50584c] hover:text-white ${
          isActive ? "bg-[#4e505899] text-white" : ""
        }`}
        onClick={handleClick}>
        {name}
      </button>
    </li>
  );
};

const SettingsTabContainer = ({ header, isActive, children }) => (
  <div>
    {isActive && (
      <>
        <h2 className="mb-5 font-[600] text-[#f2f3f5]">{header}</h2>
        {children}
      </>
    )}
  </div>
);

SettingsNavSection.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array.isRequired, // Updated prop type
  activeTab: PropTypes.string.isRequired, // Added activeTab prop
  setActiveTab: PropTypes.func.isRequired, // Added setActiveTab prop
};

SettingsNavSection.defaultProps = {
  header: "",
};

SettingsNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func, // Corrected prop name
};

SettingsNavItem.defaultProps = {
  isActive: false,
  onClick: null,
};

SettingsTabContainer.propTypes = {
  header: PropTypes.string,
  isActive: PropTypes.bool, // Added isActive prop
  children: PropTypes.node.isRequired,
};

SettingsTabContainer.defaultProps = {
  header: "",
  isActive: false, // Added default isActive value
};

export default Settings;
