import { Layout, Sidebar } from "@/features/layout/components";
import { Chat } from "@/features/messaging/components";
import { Page } from "@/constants";
import { FriendProfilePanel } from "@/components/FriendProfilePanel/FriendProfilePanel";

export function Direct() {
  return (
    <Layout>
      <Sidebar page={Page.FRIENDS} />
      <Chat />
      <FriendProfilePanel />
    </Layout>
  );
}
