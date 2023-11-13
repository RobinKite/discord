import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { IoChatboxSharp } from "react-icons/io5";
import { Input, Message } from "@/features/messaging/components";
import { useUser } from "@/hooks/useUser";
import { toggleStreamingChatShown } from "@/redux/slices/uiSlice";
import SystemMessage from "./SystemMessage";

const StreamingChat = () => {
  const isChatShown = useSelector((state) => state.ui.isStreamingChatShown);
  const dispatch = useDispatch();
  const messagesContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const user = useUser();

  const toggleChat = () => {
    dispatch(toggleStreamingChatShown());
  };

  const createMessage = (messageText) => {
    const message = {
      ...user,
      messageID: Math.random(),
      timestamp: Date.now(),
      text: messageText,
    };
    setMessages((prev) => [...prev, message]);

    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop =
          messagesContainerRef.current.scrollHeight;
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    isChatShown && (
      <Stack
        sx={{
          minWidth: "420px",
          bgcolor: "#313338",
          borderTopLeftRadius: "0.625rem",
          borderBottomLeftRadius: "0.625rem",
          height: "100%",
        }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "0.5rem", borderBottom: "1px solid #242425" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IoChatboxSharp color="#80848e" size={24} />
            <Typography
              variant="h1"
              sx={{ fontSize: "1rem", color: "#f2f3f5", fontWeight: 600 }}>
              General
            </Typography>
          </Stack>
          <Tooltip arrow title="Close">
            <IconButton onClick={toggleChat}>
              <RxCross2 color="#b5bac1" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack ref={messagesContainerRef} sx={{ overflowY: "auto", flex: 1 }}>
          <SystemMessage />
          {messages.map((message) => (
            <Message key={message.messageID} {...message} />
          ))}
        </Stack>
        <Input submitCallback={createMessage} />
      </Stack>
    )
  );
};

export default StreamingChat;
