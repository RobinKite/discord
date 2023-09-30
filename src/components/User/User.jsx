import { SiDiscord } from "react-icons/si";
import PropTypes from "prop-types";
import { statusMap } from "@/constants";
import { offlineRoles } from "@/constants";
import { useState, useRef } from "react";
import PopUp from "../PopUp/PopUp";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import PropTypes from "prop-types";
import { fillPopupContent } from "@/redux/slices/uiSlice";
import { useDispatch } from "react-redux";

export default function User({ user }) {
  const isOffline = offlineRoles.includes(user.status);
  const [isPopUpOpen, setIsPopupOpen] = useState(false);
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const handleModalOpen = (user) => {
    if (isPopUpOpen) return;
    setIsPopupOpen(true);
    dispatch(fillPopupContent(user));
  };

  const handleModalClose = () => {
    if (!isPopUpOpen) return;
    setIsPopupOpen(false);
  };

  useOnClickOutside(containerRef, handleModalClose);

  const bannerColor = user.backgroundBanner;

  return (
    <div
      ref={containerRef}
      onClick={() => handleModalOpen(user)}
      className="flex px-1.5 py-1 rounded items-center bg-[#2b2d31] cursor-pointer hover:bg-[#35373d] relative"
    >
      <div
        className={
          isOffline
            ? "flex rounded-[50%] w-[32px] h-[32px] mr-2 justify-center items-center opacity-30 transition-opacity hover:opacity-100"
            : "flex rounded-[50%] w-[32px] h-[32px] mr-2 justify-center items-center"
        }
        style={{ backgroundColor: bannerColor }}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="user avatar" />
        ) : (
          <SiDiscord size={20} color="white" />
        )}
      </div>
      {!isOffline && (
        <span className="absolute flex justify-center items-center p-[3px] w-[14px] h-[14px] rounded-[50%] bg-inherit bottom-1 left-7">
          {statusMap[user.status]}
        </span>
      )}
      {isPopUpOpen && <PopUp user={user} onClose={handleModalClose} />}
      <p
        className={
          isOffline
            ? "text-[#9b59b6] opacity-30 transition-opacity hover:opacity-100"
            : "text-[#9b59b6]"
        }
      >
        {user.name}
      </p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};
