import { useState, useRef, useEffect } from "react";
import { SAMPLE_MESSAGES } from "@/constants/mock";
import { Message, Input } from "@/features/messaging/components";
import { useSelector } from "react-redux";

export function Chat() {
  const [messages, setMessages] = useState(SAMPLE_MESSAGES);
  const chatRef = useRef(null);

  const userName = useSelector((state) => state.auth.userName);
  const name = useSelector((state) => state.auth.name);
  const avatar = useSelector((state) => state.auth.avatar);
  const roles = useSelector((state) => state.auth.roles);
  const status = useSelector((state) => state.auth.status);
  const serverName = useSelector((state) => state.server.currentServer.title);
  const userRegistrationDate = useSelector(
    (state) => state.auth.userRegistrationDate,
  );
  const serverRegistrationDate = useSelector(
    (state) => state.auth.serverRegistrationDate,
  );
  const bannerColor = useSelector((state) => state.auth.bannerColor);
  const userId = useSelector((state) => state.auth.id);

  const user = {
    userName,
    name,
    avatar,
    roles,
    status,
    serverName,
    userRegistrationDate,
    serverRegistrationDate,
    bannerColor,
    userId,
  };

  const createMessage = (messageText) => {
    const message = {
      ...user,
      messageID: Math.random(),
      timestamp: Date.now(),
      text: messageText,
    };
    setMessages((prev) => [...prev, message]);
  };

  useEffect(() => {
    const handleResize = () => {
      chatRef.current.style.maxHeight = null;
      [...chatRef.current.children].forEach(
        (element) => (element.style.display = "none"),
      );

      const maxHeight = chatRef.current.offsetHeight;
      chatRef.current.style.maxHeight = `${maxHeight}px`;
      [...chatRef.current.children].forEach(
        (element) => (element.style.display = null),
      );
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex grow flex-col justify-between bg-[#313338]">
      <div ref={chatRef} className="grow overflow-y-auto">
        {messages.map((message) => (
          <Message key={message.messageID} {...message} />
        ))}
      </div>
      <Input submitCallback={createMessage} />
    </div>
  );
}
