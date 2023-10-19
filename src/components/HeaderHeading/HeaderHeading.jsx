import { capitalize } from "@mui/material";
import { clsx } from "clsx";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { FaUserFriends } from "react-icons/fa";
import { BiHash } from "react-icons/bi";
import { TabContext } from "@/contexts";
import { Tab, Page } from "@/constants";
import { removeFromArray } from "@/utils";
import { PageContentMap } from "@/utils/collections";

function ServerContent() {
  const name = useSelector((state) => state.server.currentChannel.name);

  return (
    <>
      <BiHash color="#80848e" size={24} />
      <h2 className="font-medium">{name}</h2>
    </>
  );
}

function FriendsContent() {
  const { tab, setTab } = useContext(TabContext);
  const tabs = removeFromArray(Object.values(Tab), Tab.ADD_FRIEND);

  return (
    <div className="flex">
      <h2 className="mr-6 flex items-center gap-x-2 font-medium">
        <FaUserFriends color="#81848D" size={20} />
        <span>Friends</span>
      </h2>
      <div className="flex gap-x-4 text-[0.9rem] text-[#AEB2BC]">
        {tabs.map((value) => (
          <button
            key={value}
            onClick={() => setTab(value)}
            className={clsx(
              "rounded bg-[#313338] px-2 py-[0.1rem] font-medium transition-all hover:brightness-125",
              tab === value && "brightness-150",
            )}>
            {capitalize(value)}
          </button>
        ))}
        <button
          onClick={() => setTab(Tab.ADD_FRIEND)}
          className={clsx(
            "rounded bg-[#417E4C] px-2 py-[0.1rem] font-medium text-white transition-all",
            tab === Tab.ADD_FRIEND && "bg-transparent text-[#00C770]",
          )}>
          {capitalize(Tab.ADD_FRIEND)}
        </button>
      </div>
    </div>
  );
}

const contentMap = new PageContentMap(
  [Page.SERVER, ServerContent],
  [Page.FRIENDS, FriendsContent],
);

export function HeaderHeading() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <div className="flex items-center gap-x-1">
      {contentMap.getComponent(currentPage)}
    </div>
  );
}
