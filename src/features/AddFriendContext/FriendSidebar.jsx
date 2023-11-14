import { Stack, Typography } from "@mui/material";
import {
  friend_sidebar,
  sidebar_inner,
  sidebar_secondary_title,
  sidebar_text,
  sidebar_title,
} from "./stylesSX";

export default function FriendSidebar() {
  return (
    <Stack sx={friend_sidebar}>
      <Stack sx={{ p: "16px" }}>
        <Typography variant="h2" sx={sidebar_title}>
          Active now
        </Typography>
        <Stack sx={sidebar_inner}>
          <Typography sx={sidebar_secondary_title}>
            It&#39;s quiet for now...
          </Typography>
          <Typography sx={sidebar_text}>
            When a friend starts an activity - like playing a game or hanging
            out voice - we&#39;ll show it here!
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
