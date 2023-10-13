import { UserSidebarPanel } from "@/components";
import { useSelector } from "react-redux";
import { filterChannelsByType } from "@/utils";
import { ChannelGroup } from "@/features/channels/components";
import { PageContentMap } from "@/utils/collections";
import { Page } from "@/constants";

function ServerContent() {
  const channels = useSelector((state) => state.server.currentServer.channels);

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

const contentMap = new PageContentMap([Page.SERVER], [ServerContent]);

export function UserSidebar() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <aside className="flex min-w-[240px] max-w-[240px] grow flex-col justify-between bg-[#2b2d31]">
      {contentMap.getComponent(currentPage)}
      <UserSidebarPanel />
    </aside>
  );
}
