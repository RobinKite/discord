import { useContext } from "react";
import { useSelector } from "react-redux";
import { Header, Friends, UserList, UserSidebar } from "@/components";
import { ClientSidebar } from "@/features/channels/components";
import { Chat } from "@/features/messaging/components";
import { Page, Tab } from "@/constants";
import { TabContext } from "@/contexts";
import { TabContextProvider } from "@/contexts/TabContextProvider";
import { PageContentMap } from "@/utils/collections";
import GuildDiscovery from "../GuildDiscovery/GuildDiscovery";
import FilteredServers from "@/features/channels/components/FilteredServers/FilteredServers";
import { FriendProfilePanel } from "../../features/FriendProfilePanel/FriendProfilePanel";

function ServerContent() {
  const isUserListShown = useSelector((state) => state.ui.isUserListShown);

  return (
    <main className="flex grow">
      <UserSidebar />
      <Chat />
      {isUserListShown && <UserList />}
    </main>
  );
}

function FriendsContent() {
  const { tab } = useContext(TabContext);

  return (
    <main className="flex grow">
      <UserSidebar fullname="User" username="username" />
      {tab !== Tab.ADD_FRIEND ? <Friends status={tab} /> : null}
      <FriendProfilePanel />
    </main>
  );
}

function ExploreContent() {
  return (
    <main className="flex grow">
      <UserSidebar />
      <GuildDiscovery />
    </main>
  );
}

function SearchContent() {
  return (
    <main className="flex grow">
      <UserSidebar />
      <FilteredServers />
    </main>
  );
}

const contentMap = new PageContentMap(
  [Page.SERVER, ServerContent],
  [Page.FRIENDS, FriendsContent],
  [Page.EXPLORE, ExploreContent],
  [Page.SEARCH, SearchContent]
);

export function Layout() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <TabContextProvider>
      <div className="flex">
        <ClientSidebar />
        <div className="flex max-h-screen min-h-screen grow flex-col">
          {currentPage !== Page.EXPLORE && currentPage !== Page.SEARCH && (
            <Header />
          )}
          {contentMap.getComponent(currentPage)}
        </div>
      </div>
    </TabContextProvider>
  );
}
