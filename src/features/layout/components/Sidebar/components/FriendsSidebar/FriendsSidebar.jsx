import { List, ListItem, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { User } from "@/components";
import { setProfile } from "@/redux/slices/profileSlice";
import {
  titleSX,
  itemSX,
  wrapperSX,
  closeIconSX,
  addIconSX,
  innerBoxSX,
} from "./stylesSX";
import { SidebarMenu } from "./SidebarMenu";
import { BaseSidebar } from "../../components";

export function FriendsSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends.friendsList);
  const [filtredFriends, setFiltredFriends] = useState([...friends]);
  const [showFriedsList, setShowFriedsList] = useState(false);

  const deleteFriendChat = (friend) => {
    setFiltredFriends((prev) =>
      prev.filter((filterFriend) => filterFriend.name !== friend.name)
    );
  };

  const addFriendChat = (friend) => {
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
    navigate("/channels/@me/" + friend.userId);
    dispatch(setProfile(friend));
  };

  return (
    <BaseSidebar>
      <Stack sx={wrapperSX}>
        <Typography
          variant="h2"
          onClick={() => navigate("/channels/@me")}
          sx={[
            itemSX,
            { "&:hover svg": { fill: "#f2f3f5" } },
            { cursor: "pointer" },
          ]}
        >
          <FaUserFriends color="#81848D" size={20} />
          <Typography variant="span" fontWeight={500}>
            Friends
          </Typography>
        </Typography>
        <Stack sx={innerBoxSX}>
          <Typography variant="h2" sx={titleSX}>
            Direct messages
          </Typography>
          <AddIcon sx={addIconSX} onClick={openFriendsList} />
          {showFriedsList && (
            <SidebarMenu
              setShowFriedsList={setShowFriedsList}
              addFriendChat={addFriendChat}
            />
          )}
        </Stack>

        <List sx={{ width: "100%", p: 0 }}>
          {filtredFriends.length ? (
            filtredFriends.map((friend) => (
              <ListItem
                key={`${friend.name} ${friend.userId}`}
                sx={itemSX}
                onClick={() => openChat(friend)}
              >
                <User user={friend} styles="w-[100%] bg-[#2b2d31]" />
                <CloseIcon
                  sx={closeIconSX}
                  onClick={() => deleteFriendChat(friend)}
                />
              </ListItem>
            ))
          ) : (
            <Typography
              sx={{ fontSize: "14px", color: "#81848D", ml: "0.5rem" }}
            >
              You have no friends
            </Typography>
          )}
        </List>
      </Stack>
    </BaseSidebar>
  );
}
