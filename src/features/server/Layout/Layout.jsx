import { Header, Sidebar, Chat } from "@/features/server";
import styles from "./Layout.module.css";

export function Layout() {
  return <div className={styles.layout}>
    <Header serverName="Server" channelName="general"/>
    <main className={styles.content}>
      <Sidebar fullname="User" username="username"/>
      <Chat />
    </main>
  </div>;
}
