import { BiHash, BiSolidHelpCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

export function Header() {
  const title = useSelector((state) => state.server.currentServer.title);
  const channelName = useSelector((state) => state.server.currentChannel.name);

  return (
    <header className="relative z-10 flex text-[#f2f3f5] shadow-[0_2px_4px_0_rgba(0,0,0,0.35)]">
      <div className="max-w-[240px] grow bg-[#2b2d31] px-4 py-3">
        <h2 className="font-medium">{title}</h2>
      </div>
      <div className="flex grow justify-between bg-[#313338] px-4 py-3">
        <div className="flex items-center gap-x-1">
          <BiHash color="#80848e" size={24} />
          <h2 className="font-medium">{channelName}</h2>
        </div>
        <div>
          <BiSolidHelpCircle color="#b5bac1" size={24} />
        </div>
      </div>
    </header>
  );
}
