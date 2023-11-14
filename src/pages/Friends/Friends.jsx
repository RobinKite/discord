import { useSelector } from "react-redux";
import { Friends as FriendsComponent } from "@/components";
import { Page, Tab } from "@/constants";
import { Layout, Sidebar } from "@/features/layout/components";
import AddFriendContext from "@/features/AddFriendContext/AddFriendContext";
import FriendSidebar from "@/features/AddFriendContext/FriendSidebar";

export function Friends() {
  const tab = useSelector((state) => state.ui.friendsTab);

  return (
    <Layout>
      <Sidebar page={Page.FRIENDS} />
      {tab !== Tab.ADD_FRIEND ? (
        <FriendsComponent status={tab} />
      ) : (
        <AddFriendContext />
      )}
      <FriendSidebar />
    </Layout>
  );
}
