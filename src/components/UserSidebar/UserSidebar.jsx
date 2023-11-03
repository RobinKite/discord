import { useSelector } from "react-redux";
import { CategoryButton, UserSidebarPanel } from "@/components";
import { ChannelGroup } from "@/features/channels/components";
import { Page } from "@/constants";

import { IoMdCompass } from "react-icons/io";
import { BiSolidJoystick } from "react-icons/bi";
import { PiMusicNotesFill } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiAtom } from "react-icons/bi";
import { MdTv } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";

import { PageContentMap } from "@/utils/collections";
import { filterChannelsByType } from "@/utils/filters";
import { FriendsSideBar } from "../FriendsSideBar/FriendsSideBar";

function ServerContent() {
  const channels =
    useSelector((state) => state.server.currentServer.channels) || [];

  return (
    <div className="pt-8 text-xs text-[#949BA4]">
      <ChannelGroup
        type="text"
        name="Text channels"
        channels={filterChannelsByType(channels, "text")}
      />
      <ChannelGroup
        type="voice"
        name="Voice channels"
        channels={filterChannelsByType(channels, "voice")}
      />
    </div>
  );
}

function FriendsContent() {
  return <FriendsSideBar />;
}

function ExploreContent() {
  return (
    <div className="px-2">
      <h2 className="mx-2 my-4 text-2xl font-bold text-white">Discover</h2>
      <CategoryButton isActive={true} icon={<IoMdCompass />} text="Home" />
      <CategoryButton icon={<BiSolidJoystick />} text="Gaming" />
      <CategoryButton icon={<PiMusicNotesFill />} text="Music" />
      <CategoryButton icon={<RiGraduationCapFill />} text="Education" />
      <CategoryButton icon={<BiAtom />} text="Science & Tech" />
      <CategoryButton icon={<MdTv />} text="Entertainment" />
      <CategoryButton icon={<LuNetwork />} text="Student Hubs" />
    </div>
  );
}

const contentMap = new PageContentMap(
  [Page.SERVER, ServerContent],
  [Page.FRIENDS, FriendsContent],
  [Page.EXPLORE, ExploreContent],
  [Page.SEARCH, ExploreContent]
);

export function UserSidebar() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <aside className="flex min-w-[240px] max-w-[240px] grow flex-col bg-[#2b2d31]">
      {contentMap.getComponent(currentPage)}
      <UserSidebarPanel />
    </aside>
  );
}
