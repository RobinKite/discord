import { useSelector } from "react-redux";
import { Page } from "@/constants";
import { FriendsSidebar, ServerSidebar, ExploreSidebar } from "./components";

const pageToComponent = new Map([
  [Page.SERVER, ServerSidebar],
  [Page.FRIENDS, FriendsSidebar],
  [Page.EXPLORE, ExploreSidebar],
  [Page.SEARCH, ExploreSidebar],
]);

export function Sidebar() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  const Component = pageToComponent.get(currentPage);
  if (Component === undefined) return null;
  return <Component />;
}
