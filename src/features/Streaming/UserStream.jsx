import { DailyVideo, useMediaTrack } from "@daily-co/daily-react";
import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { BiSolidMicrophoneOff, BiSolidMicrophone } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";
import { useSelector } from "react-redux";

const UserStream = ({ user, isHovered, cardHeight, isSelf, isScreenShare }) => {
  const idCheck = isSelf ? "local-video" : "remote-video"; //mock
  const videoState = useMediaTrack(user.userId, "video");
  const isMicActive = useSelector((state) => state.ui.isMicActive);

  // console.log(videoState);
  // const isAlone = useMemo(
  //   () => remoteParticipantIds?.length < 1 || screens?.length < 1,
  //   [remoteParticipantIds, screens]
  // );

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      id={idCheck}
      sx={{
        cursor: "pointer",
        bgcolor: user.bannerColor || "#5c64f4",
        maxWidth: "592px",
        minHeight: `${cardHeight}px`,
        borderRadius: "0.5rem",
        position: "relative",
        margin: "0 auto",
      }}>
      {videoState ? (
        <DailyVideo
          automirror
          sessionId={user.userId}
          type={isScreenShare ? "screenVideo" : "video"}
        />
      ) : (
        <Stack>
          <SiDiscord color="#fff" size={50} />
        </Stack>
      )}
      {isHovered && (
        <Typography
          sx={{
            textTransform: "capitalize",
            bgcolor: "#0000008c",
            color: "#fff",
            borderRadius: "0.5rem",
            p: "0.375rem 0.75rem",
            position: "absolute",
            bottom: "0.5rem",
            left: "0.5rem",
          }}>
          {user.name || "anonymous"}
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
          bottom: "0.5rem",
          right: "0.5rem",
        }}>
        {isMicActive ? (
          <BiSolidMicrophone color="#fff" size={24} />
        ) : (
          <BiSolidMicrophoneOff color="#fff" size={24} />
        )}
      </Stack>
    </Stack>
  );
};

UserStream.propTypes = {
  user: PropTypes.object,
  isHovered: PropTypes.bool.isRequired,
  cardHeight: PropTypes.number.isRequired,
  isSelf: PropTypes.bool,
  isScreenShare: PropTypes.bool,
};

UserStream.defaultProps = {
  isSelf: false,
};

export default UserStream;
