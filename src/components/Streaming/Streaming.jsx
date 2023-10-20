import { useState } from "react";
import UserStream from "./UserStream";
import { Grid, Stack } from "@mui/material";
import { Chat } from "@/features/messaging/components";
import StreamHeader from "./StreamHeader";
import StreamFooter from "./StreamFooter";
import { SAMPLE_USERS } from "@/constants/mock";
import { shortenArray } from "@/utils";

const Streaming = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const users = shortenArray(SAMPLE_USERS, 2);

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
      }}
    >
      {isHovered && <StreamHeader isHovered={isHovered} />}
      <Stack sx={{ width: "100%", padding: "16px" }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {users.map((user) => (
            <Grid item xs={4} key={user.userId}>
              <UserStream user={user} isHovered={isHovered} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      {isHovered && <StreamFooter isHovered={isHovered} />}
    </Stack>
  );
};

export default Streaming;
