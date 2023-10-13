import { HeaderSidebar, HeaderButtons, HeaderHeading } from "@/components";

export function Header() {
  return (
    <header className="min-h-12 relative z-10 flex max-h-12 text-[#f2f3f5] shadow-[0_2px_4px_0_rgba(0,0,0,0.35)]">
      <HeaderSidebar />
      <div className="flex grow justify-between bg-[#313338] px-4 py-3">
        <HeaderHeading />
        <HeaderButtons />
      </div>
    </header>
  );
}
