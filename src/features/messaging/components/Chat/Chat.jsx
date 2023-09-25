import { useState, useRef, useEffect } from "react";
import { SAMPLE_MESSAGES } from "@/constants/mock";
import { Message, Input } from "@/features/messaging/components";
import { useSelector } from "react-redux";

export function Chat() {
  const [messages, setMessages] = useState(SAMPLE_MESSAGES);
  const authorName = useSelector((state) => state.auth.name);
  const avatarUrl = useSelector((state) => state.auth.avatar);

  const chatRef = useRef(null);

  const createMessage = (messageText) => {
    const message = {
      avatarUrl,
      authorName,
      timestamp: Date.now(),
      text: messageText,
    };
    setMessages((prev) => [...prev, message]);
  };

  useEffect(() => {
    const handleResize = () => {
      chatRef.current.style.maxHeight = null;
      [...chatRef.current.children].forEach(
        (element) => (element.style.display = "none")
      );

      const maxHeight = chatRef.current.offsetHeight;
      chatRef.current.style.maxHeight = `${maxHeight}px`;
      [...chatRef.current.children].forEach(
        (element) => (element.style.display = null)
      );
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex grow flex-col justify-between bg-[#313338]">
      <div ref={chatRef} className="relative grow overflow-y-auto">
        {messages.map((message) => (
          <Message key={message.timestamp} {...message} />
        ))}
      </div>
      <Input submitCallback={createMessage} />
    </div>
  );
}
