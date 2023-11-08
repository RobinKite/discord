import { IconButton, Slide, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toggleFullScreen } from "@/redux/slices/uiSlice";
import {
  FullScreenButton,
  StreamButtonOff,
  StreamButtonOn,
} from "./StreamingStyledElements";
import {
  BiFullscreen,
  BiSolidMicrophone,
  BiExitFullscreen,
  BiSolidMicrophoneOff,
} from "react-icons/bi";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { HiPhoneXMark } from "react-icons/hi2";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";

const StreamFooter = ({ isHovered, handleStopStreaming }) => {
  const [isMicActive, setIsMicActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isStreamActive, setIsStreamActive] = useState(true);
  const isFullScreen = useSelector((state) => state.ui.isFullScreen);
  const dispatch = useDispatch();

  const enterFullScreen = () => {
    dispatch(toggleFullScreen());
  };

  const toggleMicButton = () => {
    setIsMicActive((prev) => !prev);
  };
  const toggleVideoButton = () => {
    setIsVideoActive((prev) => !prev);
  };
  const toggleStreamButton = () => {
    setIsStreamActive((prev) => !prev);
  };

  return (
    <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        sx={{
          backgroundColor: "#000",
          boxShadow: "0 -20px 60px rgba(0, 0, 0, 0.9)",
          position: "absolute",
          bottom: "10px",
          left: 0,
          width: "100%",
        }}
      >
        {isMicActive ? (
          <Tooltip arrow title="Mute">
            <StreamButtonOn onClick={toggleMicButton}>
              <BiSolidMicrophone color="#fff" />
            </StreamButtonOn>
          </Tooltip>
        ) : (
          <Tooltip arrow title="Unmute">
            <StreamButtonOff onClick={toggleMicButton}>
              <BiSolidMicrophoneOff color="#000" />
            </StreamButtonOff>
          </Tooltip>
        )}
        {isVideoActive ? (
          <Tooltip arrow title="Turn On Camera">
            <StreamButtonOn onClick={toggleVideoButton}>
              <BsFillCameraVideoFill color="#fff" />
            </StreamButtonOn>
          </Tooltip>
        ) : (
          <Tooltip arrow title="Turn Off Camera">
            <StreamButtonOff onClick={toggleVideoButton}>
              <BsFillCameraVideoOffFill color="#000" />
            </StreamButtonOff>
          </Tooltip>
        )}
        {isStreamActive ? (
          <Tooltip arrow title="Share Your Screen">
            <StreamButtonOn onClick={toggleStreamButton}>
              <MdScreenShare color="#fff" />
            </StreamButtonOn>
          </Tooltip>
        ) : (
          <Tooltip arrow title="Stop Streaming">
            <StreamButtonOff onClick={toggleStreamButton}>
              <MdStopScreenShare color="#000" />
            </StreamButtonOff>
          </Tooltip>
        )}
        <Tooltip arrow title="Disconnect">
          <IconButton
            onClick={handleStopStreaming}
            sx={{
              bgcolor: "#f23f42",
              padding: "16px",
              "&:hover": { backgroundColor: "#f23f42" },
            }}
          >
            <HiPhoneXMark color="#fff" />
          </IconButton>
        </Tooltip>
        {isFullScreen ? (
          <Tooltip arrow title="Exit Full Screen">
            <FullScreenButton onClick={enterFullScreen}>
              <BiExitFullscreen color="#fff" />
            </FullScreenButton>
          </Tooltip>
        ) : (
          <Tooltip arrow title="Full Screen">
            <FullScreenButton onClick={enterFullScreen}>
              <BiFullscreen color="#fff" />
            </FullScreenButton>
          </Tooltip>
        )}
      </Stack>
    </Slide>
  );
};

StreamFooter.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  handleStopStreaming: PropTypes.func,
};

export default StreamFooter;
