import PropTypes from "prop-types";
import { Header } from "@/components";
import { ClientSidebar } from "@/features/channels/components";

export function Layout({ withHeader, children }) {
  return (
    <div className="flex">
      <ClientSidebar />
      <div className="flex max-h-screen min-h-screen grow flex-col">
        {withHeader && <Header />}
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  withHeader: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  withHeader: true,
};
