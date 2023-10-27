import { useSelector } from "react-redux";
import { ChannelGroup } from "@/features/channels/components";
import { filterChannelsByType } from "@/utils/filters";
import { BaseSidebar } from "../../components";

export function ServerSidebar() {
  const channels =
    useSelector((state) => state.server.currentServer.channels) || [];

  return (
    <BaseSidebar>
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
    </BaseSidebar>
  );
}
