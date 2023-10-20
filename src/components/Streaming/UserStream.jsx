import { Stack, Typography } from "@mui/material";
import { BiSolidMicrophoneOff } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";
import PropTypes from "prop-types";

const UserStream = ({ user, isHovered }) => {
  const idCheck = user.userId == 1 ? "local-video" : "remote-video"; //mock

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      id={idCheck}
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
      {isHovered && (
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
          {user.name}
        </Typography>
      )}
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

UserStream.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserStream;
