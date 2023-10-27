import { Friends as FriendsComponent } from "@/components";
import { Tab } from "@/constants";
import { Layout, Sidebar } from "@/features/layout/components";
import { useSelector } from "react-redux";
import { FriendProfilePanel } from "@/components/FriendProfilePanel/FriendProfilePanel";

export function Friends() {
  const tab = useSelector((state) => state.ui.friendsTab);

  return (
    <Layout>
      <main className="flex grow">
        <Sidebar fullname="User" username="username" />
        {tab !== Tab.ADD_FRIEND ? <FriendsComponent status={tab} /> : null}
        <FriendProfilePanel />
      </main>
    </Layout>
  );
}
