import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import UserStream from "./UserStream";
import StreamHeader from "./StreamHeader";
import StreamFooter from "./StreamFooter";
import { SAMPLE_USERS } from "@/constants/mock";
import { calculateGridDimensions, shortenArray } from "@/utils";
// import useZego from "@/hooks/useZego";

const Streaming = () => {
  const [isHovered, setIsHovered] = useState(false);
  const users = shortenArray(SAMPLE_USERS, 12);
  const totalUsers = users.length;
  const { gridColumns, gridRows } = calculateGridDimensions(totalUsers);
  const cardHeight = gridRows >= 4 ? 150 : gridRows >= 3 ? 200 : 326;

  // const zegoConfig = {
  //   appID: 806239195,
  //   appSecret: "3d91a1d9eee7dbb84380cc3ac4ae14cf",
  //   userID: "user1",
  //   userName: "user1",
  //   roomID: "123",
  //   token:
  //     "04AAAAAGU5uMcAEHpnbnZrenZrNWluMmxmZHUAoJtAlZAfjPwzn3bI7B22jRMPN94dlJNu59faJvblZGc/9BtdniQhiR6JknIrkosbt+I0DfzPtmMNEgMPkQE/1fBGAhkdvWhQrEL/klCs573Y98BM3ifuWXJTZ9g5oNUMcwX0zGd1PwcSCL1Bmi1HMx5QSzdDfYPhmFiPI7mJteIP1OWw2UGE7b0BifajlGxN2fvRtye8QZH+m5yYyF7SrG4=",
  // };
  // const { handleStopStreaming } = useZego(zegoConfig);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: "relative",
          bgcolor: "#000",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {isHovered && <StreamHeader isHovered={isHovered} />}
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", padding: "16px" }}
        >
          <Grid
            container
            spacing={4}
            alignContent="center"
            justifyContent="center"
          >
            {users.map((user) => (
              <Grid
                item
                xs={12 / gridColumns}
                key={user.userId}
                alignContent="center"
                justifyContent="center"
              >
                <UserStream
                  user={user}
                  isHovered={isHovered}
                  cardHeight={cardHeight}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
        {isHovered && (
          <StreamFooter
            isHovered={isHovered}
            // handleStopStreaming={handleStopStreaming}
          />
        )}
      </Stack>
    </>
  );
};

export default Streaming;
