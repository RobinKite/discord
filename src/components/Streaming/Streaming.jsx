import UserStream from "./UserStream";
import { Grid, IconButton, Stack, styled } from "@mui/material";
import { BiSolidMicrophone, BiSolidMicrophoneOff } from "react-icons/bi";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";
import { HiPhoneXMark } from "react-icons/hi2";
import { SAMPLE_USERS } from "@/constants/mock";
import { shortenArray } from "@/utils";

const StreamButton = styled(IconButton)({
  backgroundColor: "#2b2d31",
  padding: "16px",
  "&:hover": {
    backgroundColor: "#1e1f22",
  },
});

const Streaming = () => {
  const users = shortenArray(SAMPLE_USERS, 8);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        padding: "16px",
        position: "relative",
        width: "100%",
        bgcolor: "black",
      }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center">
        {users.map((user) => (
          <Grid
            key={user.userId} //mock
            item
            xs={4}>
            <UserStream user={user} />
          </Grid>
        ))}
      </Grid>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        sx={{ position: "absolute", bottom: "10px" }}>
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
          }}>
          <HiPhoneXMark color="#fff" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Streaming;
