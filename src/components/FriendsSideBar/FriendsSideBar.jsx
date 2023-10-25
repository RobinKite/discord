import { List, ListItem, Stack, Typography } from "@mui/material";
import { FaUserFriends } from "react-icons/fa";
import { titleSX, itemSX, wrapperSX } from "./stylesSX";

export function FriendsSideBar() {

  return (
    <Stack sx={wrapperSX}>
      <Typography variant="h2" sx={itemSX}>
        <FaUserFriends color="#81848D" size={20} />
        <Typography variant="span">Friends</Typography>
      </Typography>
      <Typography variant="h2" sx={titleSX}>
        Direct messages
      </Typography>
      <List>
        <ListItem></ListItem>
      </List>
    </Stack>
  );
}
