import { Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ActionMenu } from "./ActionMenu";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useSelector } from "react-redux";
import { Button } from "@/components";

export const ProfileActions = () => {
  const actionMenuRef = useRef(null);
  const userProfile = useSelector((state) => state.profile.userProfile);
  const authFriends = useSelector((state) => state.auth.friends);
  const [toggleActionMenu, setToggleActionMenu] = useState(false);
  const [isInAuthFriends, setIsInAuthFriends] = useState(false);

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
  const handleSendRequestButton = () => {
    console.log("handleSendRequestButton");
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
        })}
        onClick={() => {
          isInAuthFriends
            ? handleSendMessageButton()
            : handleSendRequestButton();
        }}
      >
        {isInAuthFriends ? "Send a message" : "Send a friend request"}
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
