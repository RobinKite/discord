import { useSelector } from "react-redux";
import { Page } from "@/constants";
import { ServerHeader, FriendsHeader, DirectHeader } from "./components";

const pageToComponent = new Map([
  [Page.SERVER, ServerHeader],
  [Page.FRIENDS, FriendsHeader],
  [Page.DIRECT, DirectHeader],
]);

export function Header() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  const Component = pageToComponent.get(currentPage);
  if (Component === undefined) return null;
  return <Component />;
}
