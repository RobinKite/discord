import { useSelector } from "react-redux";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IconButton } from "@/components";
import { BaseHeader } from "../../components";

export function DirectHeader() {
  const user = useSelector((state) => state.profile.userProfile);

  return (
    <BaseHeader
      sidebarContent={
        <button className="w-full cursor-pointer rounded bg-[#1E1F22] px-2 py-1 text-left text-[0.8rem] text-[#959BA3] focus:outline-none">
          Find or start a conversation
        </button>
      }
      headingContent={<h2 className="font-medium">{user?.name}</h2>}
      buttonsContent={<IconButton icon={<BiSolidHelpCircle size={24} />} />}
    />
  );
}
