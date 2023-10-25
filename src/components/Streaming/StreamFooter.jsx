import { IconButton, Slide, Stack, styled } from "@mui/material";
import {
  BiFullscreen,
  BiSolidMicrophone,
  BiSolidMicrophoneOff,
} from "react-icons/bi";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { HiPhoneXMark } from "react-icons/hi2";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";
import PropTypes from "prop-types";

const StreamButton = styled(IconButton)({
  backgroundColor: "#2b2d31",
  padding: "16px",
  "&:hover": {
    backgroundColor: "#1e1f22",
  },
});

const StreamFooter = ({ isHovered, handleStopStreaming }) => {
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
          right: 0,
        }}>
        <StreamButton>
          <BiSolidMicrophone color="#fff" />
        </StreamButton>
        {/* <IconButton sx={{ bgcolor: "#fff", p: "16px" }}>
        <BiSolidMicrophoneOff color="#000" />
      </IconButton> */}
        <StreamButton>
          <BsFillCameraVideoFill color="#fff" />
        </StreamButton>
        {/* <IconButton sx={{ bgcolor: "#fff", p: "16px" }}>
        <BsFillCameraVideoOffFill color="#000" />
      </IconButton> */}
        <StreamButton>
          <MdScreenShare color="#fff" />
        </StreamButton>
        {/* <IconButton sx={{ bgcolor: "#fff", p: "16px" }}>
        <MdStopScreenShare color="#000" />
      </IconButton> */}
        <IconButton
          onClick={handleStopStreaming}
          sx={{
            bgcolor: "#f23f42",
            padding: "16px",
            "&:hover": { backgroundColor: "#f23f42" },
          }}>
          <HiPhoneXMark color="#fff" />
        </IconButton>
        <IconButton sx={{ position: "absolute", top: "8px", right: "8px" }}>
          <BiFullscreen color="#fff" />
        </IconButton>
      </Stack>
    </Slide>
  );
};

StreamFooter.propTypes = {
  isHovered: PropTypes.bool,
  handleStopStreaming: PropTypes.func,
};

export default StreamFooter;
