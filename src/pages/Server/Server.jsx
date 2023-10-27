import { useSelector } from "react-redux";
import { UserList } from "@/components";
import { Layout, Sidebar } from "@/features/layout/components";
import { Chat } from "@/features/messaging/components";

export function Server() {
  const isUserListShown = useSelector((state) => state.ui.isUserListShown);

  return (
    <Layout>
      <main className="flex grow">
        <Sidebar />
        <Chat />
        {isUserListShown && <UserList />}
      </main>
    </Layout>
  );
}
