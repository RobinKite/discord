import UserStream from "./UserStream";
import { Grid, Stack } from "@mui/material";
import StreamHeader from "./StreamHeader";
import StreamFooter from "./StreamFooter";
import { SAMPLE_USERS } from "@/constants/mock";
import { shortenArray } from "@/utils";
import { useState } from "react";
import useZego from "@/hooks/useZego";

const Streaming = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const users = shortenArray(SAMPLE_USERS, 2);

  const zegoConfig = {
    appID: 806239195,
    appSecret: "3d91a1d9eee7dbb84380cc3ac4ae14cf",
    userID: "user1",
    userName: "user1",
    roomID: "123",
    token:
      "04AAAAAGU5uMcAEHpnbnZrenZrNWluMmxmZHUAoJtAlZAfjPwzn3bI7B22jRMPN94dlJNu59faJvblZGc/9BtdniQhiR6JknIrkosbt+I0DfzPtmMNEgMPkQE/1fBGAhkdvWhQrEL/klCs573Y98BM3ifuWXJTZ9g5oNUMcwX0zGd1PwcSCL1Bmi1HMx5QSzdDfYPhmFiPI7mJteIP1OWw2UGE7b0BifajlGxN2fvRtye8QZH+m5yYyF7SrG4=",
  };
  const { handleStopStreaming } = useZego(zegoConfig);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        bgcolor: "#000",
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}>
      {isHovered && <StreamHeader isHovered={isHovered} />}
      <Stack sx={{ width: "100%", padding: "16px" }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center">
          {users.map((user) => (
            <Grid
              item
              xs={4}
              key={user.userId}>
              <UserStream
                user={user}
                isHovered={isHovered}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
      {isHovered && (
        <StreamFooter
          isHovered={isHovered}
          handleStopStreaming={handleStopStreaming}
        />
      )}
    </Stack>
  );
};

export default Streaming;
