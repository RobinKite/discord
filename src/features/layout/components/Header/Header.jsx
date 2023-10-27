import { Page } from "@/constants";
import { ServerHeader, FriendsHeader } from "./components";
import PropTypes from "prop-types";

const pageToComponent = new Map([
  [Page.SERVER, ServerHeader],
  [Page.FRIENDS, FriendsHeader],
]);

export function Header({ page }) {
  const Component = pageToComponent.get(page);
  if (Component === undefined) return null;
  return <Component />;
}

Header.propTypes = {
  page: PropTypes.string,
};
