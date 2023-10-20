import { IconButton, Slide, Stack, Typography } from "@mui/material";
import { BsFillGrid1X2Fill, BsPersonPlusFill } from "react-icons/bs";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoChatboxSharp, IoGrid } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";

const StreamHeader = ({ isHovered }) => {
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
          right: 0,
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
          <IconButton>
            <BsPersonPlusFill color="#fff" size={26} />
          </IconButton>
          <IconButton sx={{ rotate: "90deg" }}>
            <BsFillGrid1X2Fill size={21} color="#fff" />
          </IconButton>
          {/* <IconButton>
          <IoGrid size={24} color="#fff" />
        </IconButton> */}
          <IconButton>
            <TfiMoreAlt size={24} color="#fff" />
          </IconButton>
          <Typography
            variant="span"
            sx={{
              width: "2px",
              height: "24px",
              bgcolor: "#1e1f22",
              m: "0 16px 0 8px",
            }}
          />
          <IconButton>
            <IoChatboxSharp color="#fff" />
          </IconButton>
        </Stack>
      </Stack>
    </Slide>
  );
};

export default StreamHeader;
