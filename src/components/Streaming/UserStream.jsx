import { Button, Stack, Typography } from "@mui/material";
import { BiSolidMicrophoneOff } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";

const UserStream = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        cursor: "pointer",
        bgcolor: "#5c64f4",
        maxWidth: "470px",
        height: "200px",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      <Stack>
        <SiDiscord color="#fff" size={50} />
      </Stack>
      {/* <Stack direction="row" justifyContent="space-between"> */}
      <Typography
        sx={{
          textTransform: "capitalize",
          bgcolor: "#0000008c",
          color: "#fff",
          borderRadius: "8px",
          p: "6px 12px",
          position: "absolute",
          bottom: "8px",
          left: "8px",
        }}
      >
        Kiteye
      </Typography>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "40px",
          height: "40px",
          bgcolor: "#0000008c",
          borderRadius: "50%",
          position: "absolute",
          bottom: "8px",
          right: "8px",
        }}
      >
        <BiSolidMicrophoneOff color="#fff" size={24} />
      </Stack>
    </Stack>
    // </Stack>
  );
};

export default UserStream;
