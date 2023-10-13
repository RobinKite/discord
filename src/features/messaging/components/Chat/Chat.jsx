import { useRef, useEffect } from "react";
import { Message, Input } from "@/features/messaging/components";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/redux/slices/serverSlice";

export function Chat() {
  const dispatch = useDispatch();
  const chatRef = useRef(null);
  const messages = useSelector((state) => state.server.messages);
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
    dispatch(addMessage(message));
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
