import { Button, Stack, Typography } from "@mui/material";
import addFriendsImage from "../../assets/add_friends.svg";
import AddFriendSearchLine from "./AddFriendSearchInpyt";
import ExploreIcon from "@mui/icons-material/Explore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import {
  add_friends_header,
  add_friends_button,
  add_friends_title,
  add_friends_icon_button,
  add_friends_secondary_text,
} from "./stylesSX";

export default function AddFriendContext() {
  const navigate = useNavigate();
  const onExploreServersButtonClick = (e) => {
    e.preventDefault();
    navigate("/guild-discovery");
  };

  return (
    <>
      <Stack
        direction="column"
        sx={{
          flexGrow: 1,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Stack sx={add_friends_header}>
          <Typography variant="h2" sx={add_friends_title}>
            Add friend
          </Typography>
          <Typography sx={{ color: "#B5BAC1" }}>
            You can add friends with their Diskord usernames.
          </Typography>
          <AddFriendSearchLine />
        </Stack>
        <Stack sx={{ display: "flex", flexGrow: 1 }}>
          <Typography
            variant="h2"
            sx={[add_friends_title, { padding: "20px 30px" }]}
          >
            Other places to make friends
          </Typography>
          <Stack sx={{ p: "0 20px" }}>
            <Button
              onClick={onExploreServersButtonClick}
              sx={add_friends_button}
            >
              <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                <Stack sx={add_friends_icon_button}>
                  <ExploreIcon sx={{ fill: "#fff" }} />
                </Stack>
                Explore discoverable servers
              </Stack>
              <KeyboardArrowRightIcon />
            </Button>
          </Stack>
          <Stack sx={{ m: "0 auto", maxWidth: "376px" }}>
            <img src={addFriendsImage} alt="friend" />
            <Typography sx={add_friends_secondary_text}>
              Wumpus is waiting on friends. You don&#39;t have to, though!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
