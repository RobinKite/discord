import { IconButton, Slide, Stack, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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
import PropTypes from "prop-types";

import {
  setIsMicActive,
  setIsVideoActive,
  toggleFullScreen,
} from "@/redux/slices/uiSlice";
import useDailyStreaming from "@/hooks/useDailyStreaming";

import { SwitchButton } from "./SwitchButton/SwitchButton";
import {
  FullScreenButton,
  StreamButtonOff,
  StreamButtonOn,
} from "./StreamingStyledElements";

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
        }}>
        <SwitchButton
          expression={isMicActive}
          onClick={toggleMicButton}
          icons={{
            onTrue: <BiSolidMicrophone color="#fff" />,
            onFalse: <BiSolidMicrophoneOff color="#000" />,
          }}
          tooltipTitles={{ onTrue: "Mute", onFalse: "Unmute" }}
        />
        <SwitchButton
          expression={isVideoActive}
          onClick={toggleVideoButton}
          icons={{
            onTrue: <BsFillCameraVideoFill color="#fff" />,
            onFalse: <BsFillCameraVideoOffFill color="#000" />,
          }}
          tooltipTitles={{
            onTrue: "Turn On Camera",
            onFalse: "Turn Off Camera",
          }}
        />
        <SwitchButton
          expression={isSharingScreen}
          onClick={toggleStreamButton}
          icons={{
            onTrue: <MdStopScreenShare color="#000" />,
            onFalse: <MdScreenShare color="#fff" />,
          }}
          tooltipTitles={{
            onTrue: "Stop Streaming",
            onFalse: "Share Your Screen",
          }}
          buttons={{ onTrue: StreamButtonOff, onFalse: StreamButtonOn }}
        />
        <Tooltip arrow title="Disconnect">
          <IconButton
            onClick={handleStopStreaming}
            sx={{
              bgcolor: "#f23f42",
              padding: "1rem",
              "&:hover": { backgroundColor: "#f23f42" },
            }}>
            <HiPhoneXMark color="#fff" />
          </IconButton>
        </Tooltip>
        <SwitchButton
          expression={isFullScreen}
          onClick={enterFullScreen}
          icons={{
            onTrue: <BiExitFullscreen color="#fff" />,
            onFalse: <BiFullscreen color="#fff" />,
          }}
          tooltipTitles={{ onTrue: "Exit Full Screen", onFalse: "Full Screen" }}
          buttons={{ onTrue: FullScreenButton, onFalse: FullScreenButton }}
        />
      </Stack>
    </Slide>
  );
};

StreamFooter.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  handleStopStreaming: PropTypes.func,
};

export default StreamFooter;
