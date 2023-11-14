import { capitalize } from "@mui/material";
import { clsx } from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
import { setFriendsTab } from "@/redux/slices/uiSlice";
import { IconButton } from "@/components";
import { Tab } from "@/constants";
import { removeFromArray } from "@/utils";
import { BaseHeader } from "../../components";

export function FriendsHeader() {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.ui.friendsTab);
  const tabs = removeFromArray(Object.values(Tab), Tab.ADD_FRIEND);

  return (
    <BaseHeader
      sidebarContent={
        <button className="w-full cursor-pointer rounded bg-[#1E1F22] px-2 py-1 text-left text-[0.8rem] text-[#959BA3] focus:outline-none">
          Find or start a conversation
        </button>
      }
      headingContent={
        <div className="flex">
          <h2 className="mr-6 flex items-center gap-x-2 font-medium">
            <FaUserFriends color="#81848D" size={20} />
            <span>Friends</span>
          </h2>
          <div className="flex gap-x-4 text-[0.9rem] text-[#AEB2BC]">
            {tabs.map((value) => (
              <button
                key={value}
                onClick={() => dispatch(setFriendsTab(value))}
                className={clsx(
                  "rounded bg-[#313338] px-2 py-[0.1rem] font-medium transition-all hover:brightness-125",
                  tab === value && "brightness-150"
                )}
              >
                {capitalize(value)}
              </button>
            ))}
            <button
              onClick={() => dispatch(setFriendsTab(Tab.ADD_FRIEND))}
              className={clsx(
                "rounded bg-[#417E4C] px-2 py-[0.1rem] font-medium text-white transition-all",
                tab === Tab.ADD_FRIEND &&
                  "bg-transparent text-[#00C770] hover:text-[#00C770] focus:text-[#00C770]"
              )}
            >
              {capitalize(Tab.ADD_FRIEND)}
            </button>
          </div>
        </div>
      }
      buttonsContent={<IconButton icon={<BiSolidHelpCircle size={24} />} />}
    />
  );
}
