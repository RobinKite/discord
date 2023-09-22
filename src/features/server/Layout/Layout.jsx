import { Header, UserSidebar, Chat } from "@/features/server";
import ClientSidebar from "@/features/server/ClientSidebar/ClientSidebar";
import UserList from "@/components/UserList/UserList";

export function Layout() {
  return (
    <div className="flex">
      <ClientSidebar />
      <div className="min-h-screen flex flex-col">
        <Header
          serverName="Server"
          channelName="general"
        />
        <main className="flex grow">
          <UserSidebar
            fullname="User"
            username="username"
          />
          <Chat />
          <UserList />
        </main>
      </div>
    </div>
  );
}
