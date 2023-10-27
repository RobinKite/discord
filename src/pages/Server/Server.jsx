import { useSelector } from "react-redux";
import { UserList, UserSidebar } from "@/components";
import { Layout } from "@/features/layout/components";
import { Chat } from "@/features/messaging/components";

export function Server() {
  const isUserListShown = useSelector((state) => state.ui.isUserListShown);

  return (
    <Layout>
      <main className="flex grow">
        <UserSidebar />
        <Chat />
        {isUserListShown && <UserList />}
      </main>
    </Layout>
  );
}
