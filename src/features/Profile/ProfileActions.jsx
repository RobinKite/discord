import { Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ActionMenu } from "./ActionMenu";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components";
import { createFriendRequest } from "@/redux/slices/friendsSlice";

export const ProfileActions = () => {
  const actionMenuRef = useRef(null);
  const userProfile = useSelector((state) => state.profile.userProfile);
  // const authFriends = useSelector((state) => state.auth.friends);
  const authFriends = useSelector((state) => state.friends.friendsList);
  const friendRequestStatus = useSelector((state) => state.friends.status);
  const [toggleActionMenu, setToggleActionMenu] = useState(false);
  const [isInAuthFriends, setIsInAuthFriends] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsInAuthFriends(
      authFriends.find((friend) => friend.name === userProfile.name)
    );
  }, [authFriends, userProfile]);

  const handleAdditionalActionsButton = () => {
    setToggleActionMenu((prev) => !prev);
  };

  const handleSendMessageButton = () => {
    console.log("handleSendMessageButton");
  };
  const handleSendRequestButton = (userId) => {
    console.log("handleSendRequestButton");
    dispatch(createFriendRequest(userId));
  };

  useOnClickOutside(actionMenuRef, handleAdditionalActionsButton);

  return (
    <Stack
      sx={{
        position: "absolute",
        top: "124px",
        right: "16px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Button
        type="submit"
        sx={(theme) => ({
          width: "188px",
          minHeight: "32px",
          p: "2px 16px",
          fontSize: "14px",
          textTransform: "none",
          bgcolor: theme.palette.darkgreen[10],

          "&:hover": {
            bgcolor: theme.palette.darkgreen[20],
          },
          ...(friendRequestStatus === "pending"
            ? {
              "&.Mui-disabled": {
                backgroundColor: "#24804670",
                color: "#ffffff70",
                cursor: "not-allowed",
                pointerEvents: "auto",
              },
            }
            : ""),
        })}
        disabled={friendRequestStatus === "pending"}
        onClick={() => {
          isInAuthFriends
            ? handleSendMessageButton()
            : handleSendRequestButton(userProfile.userId);
        }}
      >
        {isInAuthFriends
          ? "Send a message"
          : friendRequestStatus === "pending"
            ? "Friend Request Sent"
            : "Send a friend request"}
      </Button>
      <Button
        sx={{
          ml: "6px",
          p: "0",
          width: "24px",
          minWidth: "24px",
          bgcolor: "transparent",
          color: "#ffffff90",
          "&:hover": { color: "#fff", bgcolor: "transparent" },
        }}
        onClick={handleAdditionalActionsButton}
      >
        <MoreVertIcon />
      </Button>
      {toggleActionMenu && <ActionMenu actionMenuRef={actionMenuRef} />}
    </Stack>
  );
};
