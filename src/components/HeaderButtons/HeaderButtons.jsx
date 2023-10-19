import { useSelector } from "react-redux";
import { Page } from "@/constants";
import { BiSolidHelpCircle, BiSolidBell } from "react-icons/bi";
import { BsPinAngleFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { IconButton } from "@/components";
import { toggleUserList } from "@/redux/slices/uiSlice";
import { PageContentMap } from "@/utils/collections";

function ServerContent() {
  const dispatch = useDispatch();

  return (
    <>
      <IconButton icon={<BiSolidBell size={22} />} />
      <IconButton icon={<BsPinAngleFill size={22} />} />
      <IconButton
        onClick={() => dispatch(toggleUserList())}
        icon={<FaUserGroup size={22} />}
      />
      <IconButton icon={<BiSolidHelpCircle size={24} />} />
    </>
  );
}

function FriendsContent() {
  return <IconButton icon={<BiSolidHelpCircle size={24} />} />;
}

const pageContent = new PageContentMap(
  [Page.SERVER, ServerContent],
  [Page.FRIENDS, FriendsContent],
);

export function HeaderButtons() {
  const currentPage = useSelector((state) => state.ui.currentPage);

  return (
    <div className="flex items-center gap-x-4 text-[#b5bac1]">
      {pageContent.getComponent(currentPage)}
    </div>
  );
}
