import PropTypes from "prop-types";
import { Header } from "@/features/layout/components";
import { ClientSidebar } from "@/features/channels/components";

export function Layout({ withHeader, children }) {
  return (
    <div className="flex">
      <ClientSidebar />
      <div className="flex max-h-screen min-h-screen grow flex-col">
        {withHeader && <Header />}
        <main className="flex min-h-[80vh] grow">{children}</main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  withHeader: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Layout.defaultProps = {
  withHeader: true,
};
