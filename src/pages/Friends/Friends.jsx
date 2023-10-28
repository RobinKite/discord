import { useSelector } from "react-redux";
import { Friends as FriendsComponent } from "@/components";
import { Page, Tab } from "@/constants";
import { Layout, Sidebar } from "@/features/layout/components";

export function Friends() {
  const tab = useSelector((state) => state.ui.friendsTab);

  return (
    <Layout>
      <Sidebar page={Page.FRIENDS} />
      {tab !== Tab.ADD_FRIEND ? <FriendsComponent status={tab} /> : null}
    </Layout>
  );
}
