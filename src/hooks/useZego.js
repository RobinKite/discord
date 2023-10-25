/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";

function useZego(zegoConfig) {
  const [SID, setSID] = useState(null);
  const [localS, setLocalS] = useState(null);

  const userID = zegoConfig.userID;
  const userName = zegoConfig.userName;
  const roomID = zegoConfig.roomID;
  const token = zegoConfig.token;

  let zg = useMemo(
    () => new ZegoExpressEngine(zegoConfig.appID, zegoConfig.appSecret),
    [zegoConfig.appID, zegoConfig.appSecret]
  );

  useEffect(() => {
    zg.setDebugVerbose(false);
    zg.on(
      "roomStateChanged",
      async (_roomID, reason, _errorCode, _extendedData) => {
        if (reason == "LOGINING") {
          // Logging in.
        } else if (reason == "LOGINED") {
          // Login successful.
          // Only after a user successfully logs in to a room or switches the room, can `startPublishingStream` and `startPlayingStream` be called to publish and play streams properly.
          // Publish streams to ZEGOCLOUD audio and video cloud.
        } else if (reason == "LOGIN_FAILED") {
          // Login failed.
        } else if (reason == "RECONNECTING") {
          // Reconnecting.
        } else if (reason == "RECONNECTED") {
          // Reconnection successful.
        } else if (reason == "RECONNECT_FAILED") {
          // Reconnection failed.
        } else if (reason == "KICKOUT") {
          // Forced to log out of a room.
        } else if (reason == "LOGOUT") {
          // Logout successful.
        } else if (reason == "LOGOUT_FAILED") {
          // Logout failed.
        }
      }
    );

    // Notification of audio or video stream updates of other users in a room
    // No notification will not be provided for streams published by yourself.
    zg.on(
      "roomStreamUpdate",
      async (roomID, updateType, streamList, _extendedData) => {
        if (updateType == "ADD") {
          // A stream is added.
          for (let i = 0; i < streamList.length; i++) {
            console.log(
              "Room",
              roomID,
              "has a stream added:",
              streamList[i]["streamID"]
            );
          }
          // const message = "Video stream ID of the user: " + streamID.toString();

          // When streams are added, play them.
          // In the sample code, the audio and video of the first stream in the stream addition list are played.
          const streamID = streamList[0].streamID;
          // The stream list specified by `streamList` contains the ID of the corresponding stream.
          const remoteStream = await zg.startPlayingStream(streamID);
          // Create a media stream player.
          const remoteView = zg.createRemoteStreamView(remoteStream);
          remoteView.play("remote-video", { enableAutoplayDialog: true });
        } else if (updateType == "DELETE") {
          // A stream is deleted.
          for (let i = 0; i < streamList.length; i++) {
            console.log(
              "Room",
              roomID,
              "has a stream deleted:",
              streamList[i]["streamID"]
            );
          }

          // When streams are deleted, stop playing them based on `streamID` of the streams in the stream deletion list specified by `streamList`.
          const streamID = streamList[0].streamID;
          zg.stopPlayingStream(streamID);
        }
      }
    );

    // Notification of users joining or leaving a room
    // The `roomUserUpdate` callback can be received only when `ZegoRoomConfig` in which the `userUpdate` parameter is set to `true` is passed in the `loginRoom` method.
    zg.on("roomUserUpdate", (roomID, updateType, userList) => {
      if (updateType == "ADD") {
        for (let i = 0; i < userList.length; i++) {
          console.log(userList[i]["userID"], "joins the room:", roomID);
        }
      } else if (updateType == "DELETE") {
        for (let i = 0; i < userList.length; i++) {
          console.log(userList[i]["userID"], "leaves the room:", roomID);
        }
      }
    });

    // Status notification of audio and video stream publishing
    // This callback is received when the status of audio and video stream publishing of a user changes. If an exception occurs during stream publishing due to a network interruption, the SDK retries to publish the streams and triggers this status change notification.
    zg.on("publisherStateUpdate", (result) => {
      // Stream publishing status update callback
      let state = result["state"];
      let streamID = result["streamID"];
      let errorCode = result["errorCode"];
      let extendedData = result["extendedData"];
      if (state == "PUBLISHING") {
        console.log(
          "Successfully published an audio and video stream:",
          streamID
        );
      } else if (state == "NO_PUBLISH") {
        console.log("No audio and video stream published");
      } else if (state == "PUBLISH_REQUESTING") {
        console.log(
          "Requesting to publish an audio and video stream:",
          streamID
        );
      }
      console.log("Error code:", errorCode, " Extra info:", extendedData);
    });

    // Quality callback for published streams
    // After successfully publishing streams, you will regularly receive callbacks showing the quality data (such as resolution, frame rate, and bitrate) of audio and video streams.
    zg.on("publishQualityUpdate", (_streamID, _stats) => {
      // Quality callback for published streams
      console.log("Stream quality callback");
    });

    // Status notifications of audio and video stream playing.
    // This callback is received when the status of audio and video stream playing of a user changes. If an exception occurs during stream playing due to a network interruption, the SDK automatically retries to play the streams.
    zg.on("playerStateUpdate", (result) => {
      // Stream playing status update callback
      let state = result["state"];
      let streamID = result["streamID"];
      let errorCode = result["errorCode"];
      let extendedData = result["extendedData"];
      if (state == "PLAYING") {
        console.log("Successfully played an audio and video stream:", streamID);
      } else if (state == "NO_PLAY") {
        console.log("No audio and video stream played");
      } else if (state == "PLAY_REQUESTING") {
        console.log("Requesting to play an audio and video stream:", streamID);
      }
      console.log("Error code:", errorCode, " Extra info:", extendedData);
    });

    // Quality callback for audio or video stream playing
    // After successfully playing streams, you will regularly receive the notification of quality data (such as resolution, frame rate, and bitrate) during audio or video stream playing.
    zg.on("playQualityUpdate", (_streamID, _stats) => {
      // Quality callback for played streams
    });

    // Notification of receiving a broadcast message
    zg.on("IMRecvBroadcastMessage", (roomID, chatData) => {
      console.log(
        "Broadcast message defined by using IMRecvBroadcastMessage",
        roomID,
        chatData[0].message
      );
      alert(chatData[0].message);
    });

    // Notification of receiving a pop-up message
    zg.on("IMRecvBarrageMessage", (roomID, chatData) => {
      console.log(
        "Pop-up message defined by using IMRecvBroadcastMessage",
        roomID,
        chatData[0].message
      );
      alert(chatData[0].message);
    });

    // Notification of receiving a custom signaling message
    zg.on("IMRecvCustomCommand", (roomID, fromUser, command) => {
      console.log(
        "Custom message defined by using IMRecvCustomCommand",
        roomID,
        fromUser,
        command
      );
      alert(command);
    });

    const result = zg.checkSystemRequirements();
    // The `result` parameter that is returned indicates the compatibility check result. WebRTC is supported if the value of `webRTC` is `true`. For other attributes of this API, see the API reference.
    console.log(result);

    // Log in to a room. If the login succeeds, `true` is returned.
    // The `roomUserUpdate` callback can be received only when `userUpdate` is set to `true`.

    zg.loginRoom(
      roomID,
      token,
      { userID, userName },
      { userUpdate: true }
    ).then(
      async (result) => {
        if (result == true) {
          console.log("login success");
          // Connected to the room successfully. You can perform operations such as stream publishing and playing only after the room is successfully connected.
          // Create a stream and start the preview.
          // After calling the `createStream` method, you cannot perform subsequent operations until the ZEGOCLOUD server returns a streaming media object.
          const localStream = await zg.createStream();
          setLocalS(localStream);
          // Create a media stream player.
          const localView = zg.createLocalStreamView(localStream);
          localView.play("local-video", { enableAutoplayDialog: true });
          // Publish a stream to ZEGOCLOUD audio and video cloud. You can set `streamID` based on your service requirements but ensure that it is globally unique.
          let streamID = new Date().getTime().toString();

          setSID(streamID);
          zg.startPublishingStream(streamID, localStream);
        }
      },
      [zegoConfig.appID, zegoConfig.appSecret, zg]
    );
  }, []);

  const handleStopStreaming = () => {
    // Stop publishing a stream based on the local `streamID`.
    zg.stopPublishingStream(SID);
    // The `localStream` parameter indicates the `MediaStream` object obtained when the `createStream` method is called.
    zg.destroyStream(localS);
    zg.logoutRoom("123");
    zg.destroyEngine();
    zg = null;
  };

  return { handleStopStreaming };
}

export default useZego;
