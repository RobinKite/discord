import { Header, UserSidebar, Chat } from "@/features/server";
import ClientSidebar from "@/features/server/ClientSidebar/ClientSidebar";
import UserList from "@/components/UserList/UserList";

export function Layout() {
  return (
    <div className="flex">
      <ClientSidebar />
      <div className={styles.layout}>
        <Header serverName="Server" channelName="general" />
        <main className={styles.content}>
          <Sidebar fullname="User" username="username" />
          <Chat />
          <UserList />
        </main>
      </div>
    </div>
  );
}
