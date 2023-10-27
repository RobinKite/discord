import { ClientSidebar } from "@/features/channels/components";
import {
  // Header,
  UserSidebar,
} from "@/features/channels/components";
// import { Chat } from "@/features/messaging/components";
import UserList from "@/components/UserList/UserList";
import { useSelector } from "react-redux";
import Streaming from "@/features/Streaming/Streaming";
import StreamingChat from "@/features/Streaming/StreamingChat/StreamingChat";

export function Layout() {
  const { isUserListShown } = useSelector((state) => state.ui);
  const isFullScreen = useSelector((state) => state.ui.isFullScreen);

  return (
    <div className="flex">
      {!isFullScreen && <ClientSidebar />}
      <div className="flex min-h-screen grow flex-col">
        {/* <Header /> */}
        <main className="flex grow">
          {!isFullScreen && <UserSidebar />}
          {/* <Chat /> */}
          <Streaming />
          <StreamingChat />
          {isUserListShown && <UserList />}
        </main>
      </div>
    </div>
  );
}
