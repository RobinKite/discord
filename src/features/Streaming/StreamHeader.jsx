import { IconButton, Slide, Stack, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleStreamingChatShown } from "@/redux/slices/uiSlice";
import PropTypes from "prop-types";
import { BsFillGrid1X2Fill, BsPersonPlusFill } from "react-icons/bs";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoChatboxSharp, IoGrid } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";

const StreamHeader = ({ isHovered }) => {
  const [isClicked, setIsClicked] = useState(false);
  const isChatShown = useSelector((state) => state.ui.isStreamingChatShown);
  const dispatch = useDispatch();

  const toggleChat = () => {
    dispatch(toggleStreamingChatShown());
  };
  const toggleGrid = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Slide direction="down" in={isHovered} mountOnEnter unmountOnExit>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          p: "8px",
          backgroundColor: "#000",
          boxShadow: "0 20px 80px rgba(0, 0, 0, 0.9)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="start">
          <HiMiniSpeakerWave
            size={24}
            style={{ color: "#80848e", margin: "0 8px" }}
          />
          <Typography
            variant="h1"
            sx={{ color: "#f2f3f5", fontSize: "16px", fontWeight: 600 }}
          >
            General
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Tooltip arrow title="Invite">
            <IconButton>
              <BsPersonPlusFill color="#fff" size={26} />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Focus">
            {isClicked ? (
              <IconButton onClick={toggleGrid} sx={{ rotate: "90deg" }}>
                <BsFillGrid1X2Fill size={21} color="#fff" />
              </IconButton>
            ) : (
              <IconButton onClick={toggleGrid}>
                <IoGrid size={21} color="#fff" />
              </IconButton>
            )}
          </Tooltip>
          <Tooltip arrow title="More">
            <IconButton>
              <TfiMoreAlt size={24} color="#fff" />
            </IconButton>
          </Tooltip>
          {!isChatShown && (
            <>
              <Typography
                variant="span"
                sx={{
                  width: "1px",
                  height: "24px",
                  bgcolor: "#1e1f22",
                  m: "0 16px 0 8px",
                }}
              />
              <Tooltip arrow title="Show Chat">
                <IconButton onClick={toggleChat}>
                  <IoChatboxSharp color="#fff" />
                </IconButton>
              </Tooltip>
            </>
          )}
        </Stack>
      </Stack>
    </Slide>
  );
};

StreamHeader.propTypes = {
  isHovered: PropTypes.bool.isRequired,
};

export default StreamHeader;
