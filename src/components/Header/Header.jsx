import { HeaderSidebar, HeaderButtons, HeaderHeading } from "@/components";

export function Header() {
  return (
    <header className="relative z-10 flex min-h-[3rem] text-[#f2f3f5] shadow-[0_2px_4px_0_rgba(0,0,0,0.35)]">
      <HeaderSidebar />
      <div className="flex grow justify-between bg-[#313338] px-4 py-3">
        <HeaderHeading />
        <HeaderButtons />
      </div>
    </header>
  );
}
