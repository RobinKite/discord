import { Grid, Stack } from "@mui/material";
import {
  DailyAudio,
  useLocalParticipant,
  useParticipantIds,
  useScreenShare,
} from "@daily-co/daily-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CallState } from "@/constants";
import { useUser } from "@/hooks/useUser";
import { calculateGridDimensions } from "@/utils";
import UserStream from "./UserStream";
import StreamHeader from "./StreamHeader";
import StreamFooter from "./StreamFooter";

const Streaming = ({ handleStopStreaming, callState }) => {
  const isFullScreen = useSelector((state) => state.ui.isFullScreen);
  const currentUser = useUser();
  const localParticipant = useLocalParticipant();
  const { screens } = useScreenShare();

  const remoteParticipantIds = useParticipantIds({ filter: "remote" });
  const users = remoteParticipantIds.map((id) => ({
    userId: id,
  }));
  const totalUsers = users.length;

  const [isHovered, setIsHovered] = useState(false);
  const { gridColumns, gridRows } = calculateGridDimensions(totalUsers);
  const cardHeight = gridRows >= 4 ? 150 : gridRows >= 3 ? 200 : 326;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {callState !== CallState.IDLE && (
        <Stack
          alignItems="center"
          justifyContent="center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            bgcolor: "#000",
            width: "100%",
            overflow: "hidden",
            ...(isFullScreen
              ? { position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }
              : { position: "relative" }),
          }}>
          {isHovered && <StreamHeader isHovered={isHovered} />}
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", padding: "1rem" }}>
            <Grid
              container
              spacing={4}
              alignContent="center"
              justifyContent="center">
              <Grid
                item
                xs={12 / gridColumns}
                alignContent="center"
                justifyContent="center">
                {screens.length ? (
                  <UserStream
                    user={{ ...currentUser, userId: screens[0].session_id }}
                    isHovered={isHovered}
                    cardHeight={cardHeight}
                    isSelf={true}
                    isScreenShare
                  />
                ) : (
                  <UserStream
                    user={{
                      ...currentUser,
                      userId: localParticipant?.session_id,
                    }}
                    isHovered={isHovered}
                    cardHeight={cardHeight}
                    isSelf={true}
                  />
                )}
              </Grid>
              {/* {users.length &&
              users.map((user) => (
                <Grid
                  item
                  xs={12 / gridColumns}
                  key={user.userId}
                  alignContent="center"
                  justifyContent="center">
                  <UserStream
                    user={user}
                    isHovered={isHovered}
                    cardHeight={cardHeight}
                  />
                </Grid>
              ))} */}
            </Grid>
          </Stack>
          <DailyAudio />
          {isHovered && (
            <StreamFooter
              isHovered={isHovered}
              handleStopStreaming={handleStopStreaming}
            />
          )}
        </Stack>
      )}
    </>
  );
};

Streaming.propTypes = {
  handleStopStreaming: PropTypes.func.isRequired,
  callState: PropTypes.string.isRequired,
};

export default Streaming;
