import React from "react";
import UserStream from "./UserStream";
import { Grid, IconButton, Stack, styled } from "@mui/material";
import { BiSolidMicrophone, BiSolidMicrophoneOff } from "react-icons/bi";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";
import { HiPhoneXMark } from "react-icons/hi2";

const StreamButton = styled(IconButton)({
  backgroundColor: "#2b2d31",
  padding: "16px",
  "&:hover": {
    backgroundColor: "#1e1f22",
  },
});

const Streaming = () => {
  return (
    <Stack sx={{ width: "1128px", padding: "8px" }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Grid item xs={4} key={item}>
            <UserStream />
          </Grid>
        ))}
      </Grid>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        sx={{ mt: "40px" }}
      >
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
          sx={{
            bgcolor: "#f23f42",
            padding: "16px",
            "&:hover": { backgroundColor: "#f23f42" },
          }}
        >
          <HiPhoneXMark color="#fff" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Streaming;
