import { useSelector } from "react-redux";
import { ChannelGroup } from "@/features/channels/components";
import { ChannelType } from "@/constants";
import { filterChannelsByType } from "@/utils/filters";
import { BaseSidebar } from "../../components";

export function ServerSidebar() {
  const channels =
    useSelector((state) => state.server.currentServer.channels) || [];

  return (
    <BaseSidebar>
      <div className="pt-8 text-xs text-[#949BA4]">
        <ChannelGroup
          type={ChannelType.TEXT}
          name="Text channels"
          channels={filterChannelsByType(channels, ChannelType.TEXT)}
        />
        <ChannelGroup
          type={ChannelType.VOICE}
          name="Voice channels"
          channels={filterChannelsByType(channels, ChannelType.VOICE)}
        />
      </div>
    </BaseSidebar>
  );
}
