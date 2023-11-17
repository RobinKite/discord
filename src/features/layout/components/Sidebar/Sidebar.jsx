import PropTypes from "prop-types";
import { Page } from "@/constants";
import { ServerSidebar, ExploreSidebar, FriendsSidebar } from "./components";

const pageToComponent = new Map([
  [Page.SERVER, ServerSidebar],
  [Page.FRIENDS, FriendsSidebar],
  [Page.EXPLORE, ExploreSidebar],
  [Page.SEARCH, ExploreSidebar],
]);

export function Sidebar({ page }) {
  const Component = pageToComponent.get(page);
  if (Component === undefined) return null;
  return <Component />;
}

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
};
