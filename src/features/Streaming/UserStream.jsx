import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { BiSolidMicrophoneOff } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";

const UserStream = ({ user, isHovered, cardHeight }) => {
  const idCheck = user.userId == 1 ? "local-video" : "remote-video"; //mock

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      id={idCheck}
      sx={{
        cursor: "pointer",
        bgcolor: user.bannerColor ? user.bannerColor : "#5c64f4",
        maxWidth: "592px",
        minWidth: "65px",
        minHeight: `${cardHeight}px`,
        borderRadius: "8px",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <Stack>
        <SiDiscord color="#fff" size={50} />
      </Stack>
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
  );
};

UserStream.propTypes = {
  user: PropTypes.object.isRequired,
  isHovered: PropTypes.bool.isRequired,
  cardHeight: PropTypes.number.isRequired,
};

export default UserStream;
