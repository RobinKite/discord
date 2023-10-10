import { SiDiscord } from "react-icons/si";
import PropTypes from "prop-types";
import {
  fillPopupContent,
  openModal,
  setPopUpPosition,
} from "@/redux/slices/uiSlice";
import { useDispatch } from "react-redux";
import { offlineRoles, statusMap } from "@/constants/userStatus";
import { Modal, PopUpPositions } from "@/constants";
import { useBbox } from "@/hooks/useBbox";

export default function User({ user }) {
  const dispatch = useDispatch();
  const isOffline = offlineRoles.includes(user.status);
  const [bbox, ref] = useBbox();

  const handleModalOpen = (user) => {
    dispatch(openModal(Modal.POPUP));
    dispatch(setPopUpPosition([PopUpPositions.USER_LIST, bbox]));
    dispatch(fillPopupContent(user));
  };

  const bannerColor = user.bannerColor;
  return (
    <div
      ref={ref}
      onClick={() => handleModalOpen(user)}
      className="relative flex cursor-pointer items-center rounded bg-[#2b2d31] px-1.5 py-1 hover:bg-[#35373d]"
    >
      <div
        className={
          isOffline
            ? "mr-2 flex h-[32px] w-[32px] items-center justify-center rounded-[50%] opacity-30 transition-opacity hover:opacity-100"
            : "mr-2 flex h-[32px] w-[32px] items-center justify-center rounded-[50%]"
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
        <span className="absolute bottom-1 left-7 flex h-[14px] w-[14px] items-center justify-center rounded-[50%] bg-inherit p-[3px]">
          {statusMap[user.status]}
        </span>
      )}

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
