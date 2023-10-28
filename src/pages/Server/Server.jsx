import { useSelector } from "react-redux";
import { UserList } from "@/components";
import { Layout, Sidebar } from "@/features/layout/components";
import { Chat } from "@/features/messaging/components";
import { Page } from "@/constants";

export function Server() {
  const isUserListShown = useSelector((state) => state.ui.isUserListShown);

  return (
    <Layout>
      <Sidebar page={Page.SERVER} />
      <Chat />
      {isUserListShown && <UserList />}
    </Layout>
  );
}
