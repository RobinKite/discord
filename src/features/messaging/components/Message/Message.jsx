import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { convertTimestampToDateString } from "@/utils";
import { useDispatch } from "react-redux";
import {
  fillPopupContent,
  openModal,
  setPopUpPosition,
} from "@/redux/slices/uiSlice";
import { Modal, PopUpPositions } from "@/constants";
import { useBbox } from "@/hooks/useBbox";

export function Message({
  name,
  avatar,
  timestamp,
  text,
  userName,
  roles,
  status,
  serverName,
  userRegistrationDate,
  serverRegistrationDate,
  bannerColor,
  userId,
}) {
  const dispatch = useDispatch();
  const [bbox, ref] = useBbox();

  const user = {
    userName,
    name,
    avatar,
    roles,
    status,
    serverName,
    userRegistrationDate,
    serverRegistrationDate,
    bannerColor,
    userId,
  };

  const handleModalOpen = () => {
    dispatch(openModal(Modal.POPUP));
    dispatch(setPopUpPosition([PopUpPositions.CHAT, bbox]));
    dispatch(fillPopupContent(user));
  };

  return (
    <div className="mb-2 mt-5 flex gap-x-4 py-1 pl-4 pr-12 text-sm text-[#dcdee1]">
      <div ref={ref} onClick={handleModalOpen}>
        <Avatar
          sx={{ bgcolor: "#7076f1", cursor: "pointer", position: "unset" }}
          src={avatar}
        />
      </div>

      <div className="grow">
        <h3>
          <span className="font-medium text-[#7076f1]">{name}</span>
          <span className="ml-2 text-xs text-[#959ba3]">
            {convertTimestampToDateString(timestamp)}
          </span>
        </h3>
        <p className="break-all">{text}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  timestamp: PropTypes.number,
  text: PropTypes.string,
  userName: PropTypes.string,
  roles: PropTypes.array,
  status: PropTypes.string,
  serverName: PropTypes.string,
  userRegistrationDate: PropTypes.string,
  serverRegistrationDate: PropTypes.string,
  bannerColor: PropTypes.string,
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
