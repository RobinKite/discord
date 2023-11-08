import { ClientSidebar } from "@/features/channels/components";
import {
  // Header,
  UserSidebar,
} from "@/features/channels/components";
// import { Chat } from "@/features/messaging/components";
import UserList from "@/components/UserList/UserList";
import { useSelector } from "react-redux";
import Streaming from "@/features/Streaming/Streaming";
import StreamingChat from "@/features/Streaming/StreamingChat/StreamingChat";
import { useCallback, useEffect, useState } from "react";

import DailyIframe from "@daily-co/daily-js";
import streamingApi from "@/features/Streaming/streamingApi";

export function Layout() {
  const { isUserListShown } = useSelector((state) => state.ui);
  const isFullScreen = useSelector((state) => state.ui.isFullScreen);

  const STATE_IDLE = "STATE_IDLE";
  const STATE_CREATING = "STATE_CREATING";
  const STATE_JOINING = "STATE_JOINING";
  const STATE_JOINED = "STATE_JOINED";
  const STATE_LEAVING = "STATE_LEAVING";
  const STATE_ERROR = "STATE_ERROR";
  const STATE_HAIRCHECK = "STATE_HAIRCHECK";

  const [appState, setAppState] = useState(STATE_IDLE);
  const [roomUrl, setRoomUrl] = useState(null);
  const [callObject, setCallObject] = useState(null);
  const [apiError, setApiError] = useState(false);

  const createCall = useCallback(() => {
    setAppState(STATE_CREATING);
    return streamingApi
      .createRoom()
      .then((room) => room.url)
      .catch((error) => {
        console.error("Error creating room", error);
        setRoomUrl(null);
        setAppState(STATE_IDLE);
        setApiError(true);
      });
  }, []);

  const startHairCheck = useCallback(async (url) => {
    const newCallObject = DailyIframe.createCallObject();
    setRoomUrl(url);
    setCallObject(newCallObject);
    setAppState(STATE_HAIRCHECK);
    await newCallObject.preAuth({ url }); // add a meeting token here if your room is private
    await newCallObject.startCamera();
  }, []);

  useEffect(() => {
    createCall().then((url) => {
      startHairCheck(url);
    });
  }, []);

  const showCall =
    !apiError && [STATE_JOINING, STATE_JOINED, STATE_ERROR].includes(appState);

  const showHairCheck = !apiError && appState === STATE_HAIRCHECK;

  return (
    <div className="flex">
      {!isFullScreen && <ClientSidebar />}
      <div className="flex min-h-screen grow flex-col">
        {/* <Header /> */}
        <main className="flex grow">
          {!isFullScreen && <UserSidebar />}
          {/* <Chat /> */}
          <Streaming />
          <StreamingChat />
          {isUserListShown && <UserList />}
        </main>
      </div>
    </div>
  );
}
