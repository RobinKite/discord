import { Friends as FriendsComponent, UserSidebar } from "@/components";
import { Tab } from "@/constants";
import { Layout } from "@/features/layout/components";
import { useSelector } from "react-redux";

export function Friends() {
  const tab = useSelector((state) => state.ui.friendsTab);

  return (
    <Layout>
      <main className="flex grow">
        <UserSidebar fullname="User" username="username" />
        {tab !== Tab.ADD_FRIEND ? <FriendsComponent status={tab} /> : null}
      </main>
    </Layout>
  );
}
