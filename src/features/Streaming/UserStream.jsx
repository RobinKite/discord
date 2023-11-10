import { DailyVideo, useMediaTrack } from "@daily-co/daily-react";
import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { BiSolidMicrophoneOff, BiSolidMicrophone } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";
import { useSelector } from "react-redux";

const UserStream = ({ user, isHovered, cardHeight, isSelf, isScreenShare }) => {
  const idCheck = isSelf ? "local-video" : "remote-video"; //mock

  const videoState = useMediaTrack(user.userId, "video");

  // console.log(videoState);

  const isMicActive = useSelector((state) => state.ui.isMicActive);

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
        bgcolor: user.bannerColor ? user.bannerColor : "#5c64f4",
        maxWidth: "592px",
        minHeight: `${cardHeight}px`,
        borderRadius: "8px",
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
          <SiDiscord
            color="#fff"
            size={50}
          />
        </Stack>
      )}
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
          }}>
          {user.name ? user.name : "anonymous"}
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
        }}>
        {isMicActive ? (
          <BiSolidMicrophone
            color="#fff"
            size={24}
          />
        ) : (
          <BiSolidMicrophoneOff
            color="#fff"
            size={24}
          />
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
};

UserStream.defaultProps = {
  isSelf: false,
};

export default UserStream;
