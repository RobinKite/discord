import { ClientSidebar } from "@/features/channels/components";
import { Header, UserSidebar } from "@/features/channels/components";
import { Chat } from "@/features/messaging/components";
import UserList from "@/components/UserList/UserList";

export function Layout() {
  return (
    <div className="flex">
      <ClientSidebar />
      <div className="flex min-h-screen flex-col">
        <Header serverName="Server" channelName="general" />
        <main className="flex grow">
          <UserSidebar fullname="User" username="username" />
          <Chat />
          <UserList />
        </main>
      </div>
    </div>
  );
}
