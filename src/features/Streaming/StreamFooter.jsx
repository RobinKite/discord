import { IconButton, Slide, Stack, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  setIsMicActive,
  setIsVideoActive,
  toggleFullScreen,
} from "@/redux/slices/uiSlice";
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
import useDailyStreaming from "@/hooks/useDailyStreaming";

const StreamFooter = ({ isHovered, handleStopStreaming }) => {
  const isFullScreen = useSelector((state) => state.ui.isFullScreen);
  const isMicActive = useSelector((state) => state.ui.isMicActive);
  const isVideoActive = useSelector((state) => state.ui.isVideoActive);
  const dispatch = useDispatch();

  const {
    callObject,
    isSharingScreen,
    mutedVideo,
    mutedAudio,
    toggleScreenShare,
  } = useDailyStreaming();

  const enterFullScreen = () => {
    dispatch(toggleFullScreen());
  };

  const toggleMicButton = () => {
    callObject.setLocalAudio(mutedAudio);
    dispatch(setIsMicActive());
  };
  const toggleVideoButton = () => {
    callObject.setLocalVideo(mutedVideo);
    dispatch(setIsVideoActive());
  };
  const toggleStreamButton = () => {
    toggleScreenShare();
  };

  return (
    <Slide
      direction="up"
      in={isHovered}
      mountOnEnter
      unmountOnExit>
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
        }}>
        {isMicActive ? (
          <Tooltip
            arrow
            title="Mute">
            <StreamButtonOn onClick={toggleMicButton}>
              <BiSolidMicrophone color="#fff" />
            </StreamButtonOn>
          </Tooltip>
        ) : (
          <Tooltip
            arrow
            title="Unmute">
            <StreamButtonOff onClick={toggleMicButton}>
              <BiSolidMicrophoneOff color="#000" />
            </StreamButtonOff>
          </Tooltip>
        )}
        {isVideoActive ? (
          <Tooltip
            arrow
            title="Turn On Camera">
            <StreamButtonOn onClick={toggleVideoButton}>
              <BsFillCameraVideoFill color="#fff" />
            </StreamButtonOn>
          </Tooltip>
        ) : (
          <Tooltip
            arrow
            title="Turn Off Camera">
            <StreamButtonOff onClick={toggleVideoButton}>
              <BsFillCameraVideoOffFill color="#000" />
            </StreamButtonOff>
          </Tooltip>
        )}
        {isSharingScreen ? (
          <Tooltip
            arrow
            title="Stop Streaming">
            <StreamButtonOff onClick={toggleStreamButton}>
              <MdStopScreenShare color="#000" />
            </StreamButtonOff>
          </Tooltip>
        ) : (
          <Tooltip
            arrow
            title="Share Your Screen">
            <StreamButtonOn onClick={toggleStreamButton}>
              <MdScreenShare color="#fff" />
            </StreamButtonOn>
          </Tooltip>
        )}
        <Tooltip
          arrow
          title="Disconnect">
          <IconButton
            onClick={handleStopStreaming}
            sx={{
              bgcolor: "#f23f42",
              padding: "16px",
              "&:hover": { backgroundColor: "#f23f42" },
            }}>
            <HiPhoneXMark color="#fff" />
          </IconButton>
        </Tooltip>
        {isFullScreen ? (
          <Tooltip
            arrow
            title="Exit Full Screen">
            <FullScreenButton onClick={enterFullScreen}>
              <BiExitFullscreen color="#fff" />
            </FullScreenButton>
          </Tooltip>
        ) : (
          <Tooltip
            arrow
            title="Full Screen">
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
