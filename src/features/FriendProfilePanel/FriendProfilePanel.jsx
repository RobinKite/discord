import { Button, Stack, Typography } from "@mui/material";
import { ProfileBanner } from "../Profile/ProfileBanner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, setProfileNote } from "@/redux/slices/profileSlice";
import { SAMPLE_USERS } from "@/constants/mock";
import {
  boxSX,
  buttonSX,
  imageSX,
  innerWrapperSX,
  statusSX,
  titleSX,
  wrapperSX,
} from "./stylesSX";
import Separator from "@/components/Separator/Separator";
import { CustomNoteTextField } from "@/components/PopUp/styled";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TabSharedServers } from "../Profile/TabSharedServers";
import { TabMutualFriends } from "../Profile/TabMutualFriends";

export function FriendProfilePanel() {
  const dispatch = useDispatch();
  const [isShowMutualServers, setShowMutualServers] = useState(false);
  const [isShowMutualFriends, setShowMutualFriends] = useState(false);

  useEffect(() => {
    dispatch(setProfile(SAMPLE_USERS[0]));
  }, [dispatch]);

  const user = useSelector((state) => state.profile.userProfile);
  const userNote = user?.note || "";
  console.log(user);

  const handleNoteChange = (e) => {
    dispatch(setProfileNote(e.target.value));
  };

  const showMutualServers = () => {
    setShowMutualServers((prev) => !prev);
  };

  const showMutualFriends = () => {
    setShowMutualFriends((prev) => !prev);
  };

  return (
    user && (
      <Stack sx={{ bgcolor: "#1e1f22", width: "340px", overflow: "hidden" }}>
        <ProfileBanner
          wrapperSX={wrapperSX}
          imageSX={imageSX}
          statusSX={statusSX}
        />
        <Stack sx={innerWrapperSX}>
          <Stack sx={boxSX}>
            <Typography
              component="h3"
              sx={{ fontSize: "16px", fontWeight: "700" }}
            >
              {user.name}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{user.userName}</Typography>
            <Separator />
            <Typography sx={titleSX}>Discord member since</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {user.serverRegistrationDate}
            </Typography>
            <Separator />
            <Typography sx={titleSX}>Note</Typography>
            <CustomNoteTextField
              id="user-note"
              placeholder="Click to add a note"
              size="small"
              onChange={handleNoteChange}
              value={userNote}
            />
          </Stack>
          <Stack sx={boxSX}>
            <Button onClick={showMutualServers} variant="text" sx={buttonSX}>
              <Typography
                sx={{ fontSize: "14px", textTransform: "capitalize" }}
              >
                {user?.mutualServers.length && user?.mutualServers.length}{" "}
                Mutual servers
              </Typography>
              {!isShowMutualServers && <KeyboardArrowRightIcon />}
              {isShowMutualServers && <KeyboardArrowDownIcon />}
            </Button>
            {isShowMutualServers && <TabSharedServers />}
            <Separator />
            <Button onClick={showMutualFriends} variant="text" sx={buttonSX}>
              <Typography
                sx={{ fontSize: "14px", textTransform: "capitalize" }}
              >
                {user?.mutualFriends.length && user?.mutualFriends.length}{" "}
                Mutual friends
              </Typography>
              {!isShowMutualFriends && <KeyboardArrowRightIcon />}
              {isShowMutualFriends && <KeyboardArrowDownIcon />}
            </Button>
            {isShowMutualFriends && <TabMutualFriends />}
          </Stack>
        </Stack>
      </Stack>
    )
  );
}
