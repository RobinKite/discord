import { ClientSidebar } from "@/features/channels/components";
import { UserSidebar } from "@/components";
import { Chat } from "@/features/messaging/components";
import { Header } from "@/components";
import UserList from "@/components/UserList/UserList";
import { useSelector } from "react-redux";
import { PageContentMap } from "@/utils/collections";
import { Page } from "@/constants";

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

const contentMap = new PageContentMap([Page.SERVER], [ServerContent]);

export function Layout() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <div className="flex">
      <ClientSidebar />
      <div className="flex min-h-screen grow flex-col">
        <Header />
        {contentMap.getComponent(currentPage)}
      </div>
    </div>
  );
}
