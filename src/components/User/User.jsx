import { SiDiscord } from "react-icons/si";
import PropTypes from "prop-types";
import { statusMap } from "@/constants";
import { offlineRoles } from "@/constants";
import { useState, useRef } from "react";
import PopUp from "../PopUp/PopUp";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export default function User({ user }) {
  const { userName = "No name", userAvatar = null, status } = user;
  const isOffline = !offlineRoles.includes(status);

  const [isPopUpOpen, setIsPopupOpen] = useState(false);

  const containerRef = useRef(null);

  const handleModalOpen = () => {
    if (isPopUpOpen) return;
    setIsPopupOpen(true);
  };

  const handleModalClose = () => {
    if (!isPopUpOpen) return;
    setIsPopupOpen(false);
  };

  useOnClickOutside(containerRef, handleModalClose);

  return (
    <div
      onClick={handleModalOpen}
      ref={containerRef}
      className="flex px-1.5 py-1 rounded items-center bg-[#2b2d31] cursor-pointer hover:bg-[#35373d] relative "
    >
      <div className="flex rounded-[50%] bg-[#5d64f4] w-[32px] h-[32px] mr-2 justify-center items-center ">
        {userAvatar ? (
          <img src={userAvatar} alt="user avatar" />
        ) : (
          <SiDiscord size={20} className="text-white" />
        )}
      </div>
      {isOffline && (
        <span className="absolute flex justify-center items-center p-[3px] w-[14px] h-[14px] rounded-[50%] bg-inherit bottom-1 left-7">
          {statusMap[status]}
        </span>
      )}

      <p className="text-[#9b59b6]">{userName}</p>
      {isPopUpOpen && <PopUp onClose={handleModalClose} />}
    </div>
  );
}

User.propTypes = {
  user: PropTypes.string,
};
