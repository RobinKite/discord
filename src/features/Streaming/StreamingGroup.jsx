import { DailyProvider } from "@daily-co/daily-react";
import DailyIframe from "@daily-co/daily-js";
import { useCallback, useEffect, useState } from "react";
import { CallState } from "@/constants";
// import { pageUrlFromRoomUrl } from "@/utils/streaming";
import Streaming from "./Streaming";
import StreamingChat from "./StreamingChat/StreamingChat";
import streamingApi from "./streamingApi";

const StreamingGroup = () => {
  const [callState, setCallState] = useState(CallState.IDLE);
  const [callObject, setCallObject] = useState(null);

  // const [roomUrl, setRoomUrl] = useState(null);

  // useEffect(() => {
  //   const pageUrl = pageUrlFromRoomUrl(roomUrl);
  //   if (pageUrl === window.location.href) return;
  //   // window.history.replaceState(null, null, pageUrl);
  // }, [roomUrl]);
  // console.log(appState);

  useEffect(() => {
    if (callObject) return;
    createCall().then((url) => startJoiningCall(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!callObject) return;

    const events = ["joined-meeting", "left-meeting", "error", "camera-error"];
    const eventToHandler = {
      "joined-meeting": () => {
        setCallState(CallState.JOINED);
      },
      "left-meeting": () => {
        callObject.destroy().then(() => {
          // setRoomUrl(null);
          setCallObject(null);
          setCallState(CallState.IDLE);
        });
      },
      error: () => {
        setCallState(CallState.ERROR);
      },
    };

    const handleMeetingState = () => {
      const handler = eventToHandler[callObject.meetingState()];
      handler && handler();
    };

    handleMeetingState();
    events.forEach((event) => callObject.on(event, handleMeetingState));
    return () => {
      events.forEach((event) => callObject.off(event, handleMeetingState));
    };
  }, [callObject]);

  const handleStopStreaming = useCallback(() => {
    if (!callObject) return;
    if (callState === CallState.ERROR) {
      callObject.destroy().then(() => {
        // setRoomUrl(null);
        setCallObject(null);
        setCallState(CallState.IDLE);
      });
    } else {
      setCallState(CallState.LEAVING);
      callObject.leave();
    }
  }, [callObject, callState]);

  const createCall = useCallback(() => {
    setCallState(CallState.CREATING);
    return streamingApi
      .createRoom()
      .then((room) => room.url)
      .catch((error) => {
        console.error("Error creating room", error);
        // setRoomUrl(null);
        setCallState(CallState.IDLE);
      });
  }, []);

  const startJoiningCall = useCallback((url) => {
    const newCallObject = DailyIframe.createCallObject();
    // setRoomUrl(url);
    setCallObject(newCallObject);
    setCallState(CallState.JOINING);
    newCallObject.join({ url });
  }, []);

  return (
    <DailyProvider callObject={callObject}>
      <Streaming
        handleStopStreaming={handleStopStreaming}
        callState={callState}
      />
      <StreamingChat />
    </DailyProvider>
  );
};

export default StreamingGroup;
