import { useSelector } from "react-redux";
import { Page } from "@/constants";
import { PageContentMap } from "@/utils/collections";

function ServerContent() {
  const title = useSelector((state) => state.server.currentServer.title);
  return <h2 className="truncate px-[0.35rem] font-medium">{title}</h2>;
}

function FriendsContent() {
  return (
    <button className="w-full cursor-pointer rounded bg-[#1E1F22] px-2 py-1 text-left text-[0.8rem] text-[#959BA3] focus:outline-none">
      Find or start a conversation
    </button>
  );
}

const pageContent = new PageContentMap(
  [Page.SERVER, ServerContent],
  [Page.FRIENDS, FriendsContent],
);

export function HeaderSidebar() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <div className="min-w-[240px] max-w-[240px] grow bg-[#2b2d31] px-[0.65rem] py-3">
      {pageContent.getComponent(currentPage)}
    </div>
  );
}
