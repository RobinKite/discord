import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Input, Message } from "@/features/messaging/components";
import { toggleStreamingChatShown } from "@/redux/slices/uiSlice";
import SystemMessage from "./SystemMessage";
import { RxCross2 } from "react-icons/rx";
import { IoChatboxSharp } from "react-icons/io5";

const StreamingChat = () => {
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);
  const isChatShown = useSelector((state) => state.ui.isStreamingChatShown);
  const dispatch = useDispatch();

  const toggleChat = () => {
    dispatch(toggleStreamingChatShown());
  };
  const userName = useSelector((state) => state.auth.userName);
  const name = useSelector((state) => state.auth.name);
  const avatar = useSelector((state) => state.auth.avatar);
  const roles = useSelector((state) => state.auth.roles);
  const bannerColor = useSelector((state) => state.auth.bannerColor);
  const userId = useSelector((state) => state.auth.id);
  const user = {
    userName,
    name,
    avatar,
    roles,
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
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          height: "100%",
        }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "8px", borderBottom: "1px solid #242425" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}>
            <IoChatboxSharp
              color="#80848e"
              size={24}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: "16px",
                color: "#f2f3f5",
                fontWeight: 600,
              }}>
              General
            </Typography>
          </Stack>
          <Tooltip
            arrow
            title="Close">
            <IconButton onClick={toggleChat}>
              <RxCross2 color="#b5bac1" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack
          ref={messagesContainerRef}
          sx={{
            overflowY: "auto",
            flex: 1,
          }}>
          <SystemMessage />
          {messages.map((message) => (
            <Message
              key={message.messageID}
              {...message}
            />
          ))}
        </Stack>
        <Input submitCallback={createMessage} />
      </Stack>
    )
  );
};

export default StreamingChat;
