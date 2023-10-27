import PropTypes from "prop-types";
import { Header } from "@/features/layout/components";
import { ClientSidebar } from "@/features/channels/components";
import { useSelector } from "react-redux";

export function Layout({ withHeader, children }) {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <div className="flex">
      <ClientSidebar />
      <div className="flex max-h-screen min-h-screen grow flex-col">
        {withHeader && <Header page={currentPage} />}
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
