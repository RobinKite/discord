import { ChatMessage } from "@/features/server";

export function Chat() {
  return (
    <div className="grow bg-[#313338] relative">
      <ChatMessage
        avatarUrl={"/"}
        authorName="User1"
        timestamp={1694970000}
        text="Text"
      />
      <ChatMessage
        avatarUrl={"/"}
        authorName="User2"
        timestamp={1694970600}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium itaque eligendi est, doloremque inventore repellat optio dignissimos, veritatis cum voluptates impedit! Tempora veniam facere enim eveniet atque vitae maxime."
      />
    </div>
  );
}
