import { Header, Sidebar, Chat } from "@/features/server";
import styles from "./Layout.module.css";
import ClientSidebar from "@/components/ClientSidebar/ClientSidebar";
import UserList from "@/components/userList/UserList";

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
