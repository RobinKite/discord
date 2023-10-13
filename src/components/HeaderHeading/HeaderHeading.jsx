import { useSelector } from "react-redux";
import { BiHash } from "react-icons/bi";
import { Page } from "@/constants";
import { PageContentMap } from "@/utils/collections";

function ServerContent() {
  const name = useSelector((state) => state.server.currentChannel.name);

  return (
    <>
      <BiHash color="#80848e" size={24} />
      <h2 className="font-medium">{name}</h2>
    </>
  );
}

const contentMap = new PageContentMap([Page.SERVER], [ServerContent]);

export function HeaderHeading() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <div className="flex items-center gap-x-1">
      {contentMap.getComponent(currentPage)}
    </div>
  );
}
