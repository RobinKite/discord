import { SiDiscord } from "react-icons/si";
import PropTypes from "prop-types";
import {
  fillPopupContent,
  openModal,
  setPopUpPosition,
} from "@/redux/slices/uiSlice";
import { useDispatch } from "react-redux";
import { offlineRoles, statusMap } from "@/constants/userStatus";
import { Modal } from "@/constants";
import { useBbox } from "@/hooks/useBbox";

export function User({ user, position, styles }) {
  const dispatch = useDispatch();
  const isOffline = offlineRoles.includes(user.status);
  const [bbox, ref] = useBbox();

  const handleModalOpen = (user) => {
    dispatch(openModal(Modal.POPUP));
    dispatch(setPopUpPosition([position, bbox]));
    dispatch(fillPopupContent(user));
  };

  const bannerColor = user.bannerColor;
  return (
    <div
      ref={ref}
      onClick={() => handleModalOpen(user)}
      className={`relative flex  cursor-pointer items-center  rounded px-1.5 py-1 text-[#949ba4] transition duration-300 hover:bg-[#35373d] hover:text-[#f2f3f5] ${styles} `}>
      <div
        className={
          isOffline
            ? "mr-2 flex h-[32px] w-[32px] items-center justify-center rounded-[50%] opacity-30 transition-opacity hover:opacity-100"
            : "mr-2 flex h-[32px] w-[32px] items-center justify-center rounded-[50%]"
        }
        style={{ backgroundColor: bannerColor }}>
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
            ? "text-inherit opacity-30 transition-opacity  hover:opacity-100"
            : "text-inherit "
        }>
        {user.name}
      </p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  position: PropTypes.string,
  styles: PropTypes.string,
};

User.defaultProps = {
  styles: "bg-[#2b2d31]",
};
