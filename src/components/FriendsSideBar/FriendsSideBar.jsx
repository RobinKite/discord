import { List, ListItem, Stack, Typography } from "@mui/material";
import { FaUserFriends } from "react-icons/fa";
import {
  titleSX,
  itemSX,
  wrapperSX,
  closeIconSX,
  addIconSX,
  innerBoxSX,
} from "./stylesSX";
import { useSelector } from "react-redux";
import { User } from "..";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { FriendsSideBarMenu } from "./FriendsSideBarMenu";
// import useDirectMessageContextmenuButtons from "@/hooks/useDirectMessageContextmenuButtons";

export function FriendsSideBar() {
  const friends = useSelector((state) => state.friends.friendsList);
  // const contextmenuButtons = useDirectMessageContextmenuButtons();
  const [filtredFriends, setFiltredFriends] = useState([...friends]);
  const [showFriedsList, setShowFriedsList] = useState(false);

  const deleteFriendChat = (friend) => {
    setFiltredFriends((prev) =>
      prev.filter((filterFriend) => filterFriend.name !== friend.name)
    );
  };

  const addFriendChat = (e, friend) => {
    const foundFriend = filtredFriends.find(
      (findFriend) => findFriend.name === friend.name
    );
    if (!foundFriend) {
      setFiltredFriends((prev) => [...prev, friend]);
    }
  };

  const openFriendsList = () => {
    setShowFriedsList(true);
  };

  const openChat = (friend) => {
    console.log(friend); //TODO: implement the transition to personal chat
  };

  return (
    <Stack sx={wrapperSX}>
      <Typography
        variant="h2"
        sx={[itemSX, { "&:hover svg": { fill: "#f2f3f5" } }]}
      >
        <FaUserFriends color="#81848D" size={20} />
        <Typography variant="span">Friends</Typography>
      </Typography>
      <Stack sx={innerBoxSX}>
        <Typography variant="h2" sx={titleSX}>
          Direct messages
        </Typography>
        <AddIcon sx={addIconSX} onClick={openFriendsList} />
        {showFriedsList && (
          <FriendsSideBarMenu
            setShowFriedsList={setShowFriedsList}
            addFriendChat={addFriendChat}
          />
        )}
      </Stack>

      <List sx={{ width: "100%", p: 0 }}>
        {filtredFriends.length ? (
          filtredFriends.map((friend) => (
            <ListItem
              key={friend.name}
              sx={itemSX}
              onClick={() => openChat(friend)}
              onContextMenu={() => {}}
            >
              <User user={friend} styles="w-[100%] bg-[#2b2d31]" />
              <CloseIcon
                sx={closeIconSX}
                onClick={() => deleteFriendChat(friend)}
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
