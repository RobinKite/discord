import { IoMdCompass } from "react-icons/io";
import { BiAtom, BiSolidJoystick } from "react-icons/bi";
import { PiMusicNotesFill } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdTv } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { CategoryButton } from "@/components";
import { BaseSidebar } from "../../components";

export function ExploreSidebar() {
  return (
    <BaseSidebar>
      <div className="px-2">
        <h2 className="mx-2 my-4 text-2xl font-bold text-white">Discover</h2>
        <CategoryButton isActive={true} icon={<IoMdCompass />} text="Home" />
        <CategoryButton icon={<BiSolidJoystick />} text="Gaming" />
        <CategoryButton icon={<PiMusicNotesFill />} text="Music" />
        <CategoryButton icon={<RiGraduationCapFill />} text="Education" />
        <CategoryButton icon={<BiAtom />} text="Science & Tech" />
        <CategoryButton icon={<MdTv />} text="Entertainment" />
        <CategoryButton icon={<LuNetwork />} text="Student Hubs" />
      </div>
    </BaseSidebar>
  );
}
