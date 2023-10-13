import { Page } from "@/constants";
import { PageContentMap } from "@/utils/collections";
import { useSelector } from "react-redux";

function ServerContent() {
  const { title } = useSelector((state) => state.server.currentServer);
  return <h2 className="font-medium">{title}</h2>;
}

const pageContent = new PageContentMap([Page.SERVER], [ServerContent]);

export function HeaderSidebar() {
  const { currentPage } = useSelector((state) => state.ui);

  return (
    <div className="max-w-[240px] grow bg-[#2b2d31] px-4 py-3">
      {pageContent.getComponent(currentPage)}
    </div>
  );
}
