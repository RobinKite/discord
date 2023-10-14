import { ClientSidebar } from "@/features/channels/components";
import { Header, UserSidebar } from "@/features/channels/components";
import { Chat } from "@/features/messaging/components";
import UserList from "@/components/UserList/UserList";
import { useSelector } from "react-redux";
import Streaming from "@/components/Streaming/Streaming";

export function Layout() {
  const { isUserListShown } = useSelector((state) => state.ui);

  return (
    <div className="flex">
      <ClientSidebar />
      <div className="flex min-h-screen grow flex-col">
        <Header />
        <main className="flex grow">
          <UserSidebar />
          {/* <Chat /> */}
          <Streaming />
          {isUserListShown && <UserList />}
        </main>
      </div>
    </div>
  );
}
