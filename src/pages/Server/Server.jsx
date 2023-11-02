import { useSelector } from "react-redux";
import { UserList } from "@/components";
import { Layout, Sidebar } from "@/features/layout/components";
import { Chat } from "@/features/messaging/components";
import { Page, ChannelType } from "@/constants";

export function Server() {
  const currentChannel = useSelector((state) => state.server.currentChannel);
  const isUserListShown = useSelector((state) => state.ui.isUserListShown);

  const CallScreen = <div className="grow" />;

  return (
    <Layout>
      <Sidebar page={Page.SERVER} />
      {currentChannel.type === ChannelType.TEXT ? <Chat /> : CallScreen}
      {isUserListShown && <UserList />}
    </Layout>
  );
}
