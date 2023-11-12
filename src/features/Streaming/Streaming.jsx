import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import UserStream from "./UserStream";
import StreamHeader from "./StreamHeader";
import StreamFooter from "./StreamFooter";
import { SAMPLE_USERS } from "@/constants/mock";
import { calculateGridDimensions, shortenArray } from "@/utils";

const Streaming = () => {
  const [isHovered, setIsHovered] = useState(false);
  const users = shortenArray(SAMPLE_USERS, 12);
  const totalUsers = users.length;
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
