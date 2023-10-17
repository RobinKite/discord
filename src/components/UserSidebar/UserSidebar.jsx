import { useSelector } from "react-redux";
import { UserSidebarPanel } from "@/components";
import { ChannelGroup } from "@/features/channels/components";
import { Page } from "@/constants";
import { PageContentMap } from "@/utils/collections";
import { filterChannelsByType } from "@/utils/filters";

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
  return <div></div>;
}

const contentMap = new PageContentMap(
  [Page.SERVER, ServerContent],
  [Page.FRIENDS, FriendsContent],
);

export function UserSidebar() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <aside className="flex min-w-[240px] max-w-[240px] grow flex-col justify-between bg-[#2b2d31]">
      {contentMap.getComponent(currentPage)}
      <UserSidebarPanel />
    </aside>
  );
}
