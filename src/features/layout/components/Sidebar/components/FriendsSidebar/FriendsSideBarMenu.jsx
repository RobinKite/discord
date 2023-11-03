import { useSelector } from "react-redux";
import { User } from "@/components";
import { List, ListItem } from "@mui/material";
import { itemSX, menuWrapperSX } from "./stylesSX";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef } from "react";
import PropTypes from "prop-types";

export function FriendsSideBarMenu({ setShowFriedsList, addFriendChat }) {
  const friends = useSelector((state) => state.auth.friends);
  const friendsListRef = useRef(null);

  useOnClickOutside(friendsListRef, () => {
    setShowFriedsList(false);
  });

  return (
    <List sx={menuWrapperSX} ref={friendsListRef}>
      {friends.map((friend) => (
        <ListItem
          sx={itemSX}
          key={friend.name}
          onClick={(e) => {
            addFriendChat(e, friend);
          }}>
          <User user={friend} />
        </ListItem>
      ))}
    </List>
  );
}

FriendsSideBarMenu.propTypes = {
  setShowFriedsList: PropTypes.func.isRequired,
  addFriendChat: PropTypes.func.isRequired,
};
