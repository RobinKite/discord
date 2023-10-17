import { useContext } from "react";
import { useSelector } from "react-redux";
import { Header, Friends, UserList, UserSidebar } from "@/components";
import { ClientSidebar } from "@/features/channels/components";
import { Chat } from "@/features/messaging/components";
import { Page, Tab } from "@/constants";
import { TabContext } from "@/contexts";
import { TabContextProvider } from "@/contexts/TabContextProvider";
import { PageContentMap } from "@/utils/collections";

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
    </main>
  );
}

const contentMap = new PageContentMap(
  [Page.SERVER, ServerContent],
  [Page.FRIENDS, FriendsContent],
);

export function Layout() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <TabContextProvider>
      <div className="flex">
        <ClientSidebar />
        <div className="flex min-h-screen grow flex-col">
          <Header />
          {contentMap.getComponent(currentPage)}
        </div>
      </div>
    </TabContextProvider>
  );
}
