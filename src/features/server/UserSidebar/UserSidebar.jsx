import { PropTypes } from "prop-types";
import Avatar from "@mui/material/Avatar";

import { BiSolidMicrophone } from "react-icons/bi";
import { BsHeadphones, BsGearFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { SETTINGS_MODAL } from "@/constants";
import { openModal } from "@/redux/slices/uiSlice";

export function UserSidebar({ fullname, username }) {
  const dispatch = useDispatch();

  const handleSettingsBtn = () => {
    dispatch(openModal(SETTINGS_MODAL));
  };
  return (
    <aside className="grow flex max-w-[240px] min-w-[240px] flex-col justify-end bg-[#2b2d31]">
      <div className="flex justify-between py-[0.35rem] pr-4 pl-2 bg-[#232428]">
        <div className="flex gap-x-2 py-1 px-[0.1rem] text-[0.85rem]">
          <Avatar sx={{ bgcolor: "#7076f1", width: "32px", height: "32px" }} />
          <div>
            <p className="text-[#f2f3f5] font-medium leading-5">{fullname}</p>
            <p className="text-[#b6bac0] leading-3">{username}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <button onClick={() => {}}>
            <BiSolidMicrophone
              color="#b6bac0"
              size={20}
            />
          </button>
          <button onClick={() => {}}>
            <BsHeadphones
              color="#b6bac0"
              size={22}
            />
          </button>
          <button onClick={handleSettingsBtn}>
            <BsGearFill
              color="#b6bac0"
              size={18}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}

UserSidebar.propTypes = {
  fullname: PropTypes.string,
  username: PropTypes.string,
};
