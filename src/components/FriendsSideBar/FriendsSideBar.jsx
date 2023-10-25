import { List, ListItem, Stack, Typography } from "@mui/material";
import { FaUserFriends } from "react-icons/fa";
import { titleSX, itemSX, wrapperSX, closeIconSX, addIconSX } from "./stylesSX";
import { useSelector } from "react-redux";
import { User } from "..";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export function FriendsSideBar() {
  const friends = useSelector((state) => state.auth.friends);
  const [filtredFriends, setFiltredFriends] = useState([...friends]);

  const deleteFriendsChat = (e, friend) => {
    setFiltredFriends((prev) =>
      prev.filter((filterFriend) => filterFriend.name !== friend.name)
    );
  };

  const openFriendsList = () => {};

  return (
    <Stack sx={wrapperSX}>
      <Typography
        variant="h2"
        sx={[itemSX, { "&:hover svg": { fill: "#f2f3f5" } }]}
      >
        <FaUserFriends color="#81848D" size={20} />
        <Typography variant="span">Friends</Typography>
      </Typography>
      <Stack
        sx={{
          p: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={titleSX}>
          Direct messages
        </Typography>
        <AddIcon sx={addIconSX} onClick={openFriendsList} />
      </Stack>
      <List sx={{ width: "100%", p: 0 }}>
        {filtredFriends.length ? (
          filtredFriends.map((friend) => (
            <ListItem key={friend.name} sx={itemSX}>
              <User user={friend} styles="w-[100%] bg-[#2b2d31]" />
              <CloseIcon
                sx={closeIconSX}
                onClick={(e) => deleteFriendsChat(e, friend)}
              />
            </ListItem>
          ))
        ) : (
          <Typography sx={{ fontSize: "14px", color: "#81848D" }}>
            Have no friends
          </Typography>
        )}
      </List>
    </Stack>
  );
}
