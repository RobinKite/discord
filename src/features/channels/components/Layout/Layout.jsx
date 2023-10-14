import { ClientSidebar } from "@/features/channels/components";
import { Header, UserSidebar } from "@/features/channels/components";
import { Chat } from "@/features/messaging/components";
import UserList from "@/components/UserList/UserList";
import { useSelector } from "react-redux";
import GuildDiscovery from "@/components/GuildDiscovery/GuildDiscovery";
import FilteredServers from "../FilteredServers/FilteredServers";

export function Layout() {
  const { isUserListShown } = useSelector((state) => state.ui);

  return (
    <div className="flex ">
      <ClientSidebar />
      <div className="flex min-h-screen grow flex-col">
        <Header />
        <main className="flex grow relative">
          <UserSidebar />
          <FilteredServers />
          {/* <GuildDiscovery /> */}
          {/* <Chat /> */}
          {isUserListShown && <UserList />}
        </main>
      </div>
    </div>
  );
}
