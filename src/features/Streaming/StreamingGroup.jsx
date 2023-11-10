import { DailyProvider } from "@daily-co/daily-react";
import Streaming from "./Streaming";
import StreamingChat from "./StreamingChat/StreamingChat";
import { useCallback, useEffect, useState } from "react";
import {
  STATE_CREATING,
  STATE_ERROR,
  STATE_IDLE,
  STATE_JOINED,
  STATE_JOINING,
  STATE_LEAVING,
} from "@/constants/streaming";
import streamingApi from "./streamingApi";
// import { pageUrlFromRoomUrl } from "./streamingUtils";
import DailyIframe from "@daily-co/daily-js";

const StreamingGroup = () => {
  const [appState, setAppState] = useState(STATE_IDLE);
  const [callObject, setCallObject] = useState(null);
  // const [roomUrl, setRoomUrl] = useState(null);

  // useEffect(() => {
  //   const pageUrl = pageUrlFromRoomUrl(roomUrl);
  //   if (pageUrl === window.location.href) return;
  //   // window.history.replaceState(null, null, pageUrl);
  // }, [roomUrl]);

  console.log(appState);

  useEffect(() => {
    if (!callObject) return;

    const events = ["joined-meeting", "left-meeting", "error", "camera-error"];

    function handleNewMeetingState() {
      switch (callObject.meetingState()) {
        case "joined-meeting":
          setAppState(STATE_JOINED);
          break;
        case "left-meeting":
          callObject.destroy().then(() => {
            // setRoomUrl(null);
            setCallObject(null);
            setAppState(STATE_IDLE);
          });
          break;
        case "error":
          setAppState(STATE_ERROR);
          break;
        default:
          break;
      }
    }

    handleNewMeetingState();

    events.forEach((event) => callObject.on(event, handleNewMeetingState));

    return () => {
      events.forEach((event) => callObject.off(event, handleNewMeetingState));
    };
  }, [callObject]);

  const handleStopStreaming = useCallback(() => {
    if (!callObject) return;
    if (appState === STATE_ERROR) {
      callObject.destroy().then(() => {
        // setRoomUrl(null);
        setCallObject(null);
        setAppState(STATE_IDLE);
      });
    } else {
      setAppState(STATE_LEAVING);
      callObject.leave();
    }
  }, [callObject, appState]);

  const createCall = useCallback(() => {
    setAppState(STATE_CREATING);
    return streamingApi
      .createRoom()
      .then((room) => room.url)
      .catch((error) => {
        console.error("Error creating room", error);
        // setRoomUrl(null);
        setAppState(STATE_IDLE);
      });
  }, []);

  const startJoiningCall = useCallback((url) => {
    const newCallObject = DailyIframe.createCallObject();
    // setRoomUrl(url);
    setCallObject(newCallObject);
    setAppState(STATE_JOINING);
    newCallObject.join({ url });
  }, []);

  useEffect(() => {
    if (callObject) return;
    createCall().then((url) => {
      startJoiningCall(url);
    });
  }, []);

  return (
    <DailyProvider callObject={callObject}>
      <Streaming
        handleStopStreaming={handleStopStreaming}
        appState={appState}
      />
      <StreamingChat />
    </DailyProvider>
  );
};

export default StreamingGroup;
