import { useSelector } from "react-redux";
import { UserList } from "@/components";
import { Layout, Sidebar } from "@/features/layout/components";
import { Chat } from "@/features/messaging/components";
import { Page, ChannelType } from "@/constants";
import StreamingGroup from "@/features/Streaming/StreamingGroup";

export function Server() {
  const currentChannel = useSelector((state) => state.server.currentChannel);
  const isUserListShown = useSelector((state) => state.ui.isUserListShown);

  return (
    <Layout>
      <Sidebar page={Page.SERVER} />
      {currentChannel.type === ChannelType.TEXT ? <Chat /> : <StreamingGroup />}
      {isUserListShown && <UserList />}
    </Layout>
  );
}
