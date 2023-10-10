import { Stack } from "@mui/material";
import React from "react";
import { Button } from "../Buttons";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ProfileActions = () => {
  const handleAdditionalActionsButton = (e) => {
    console.log("AdditionalActionsButton");
  };

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
      >
        Send a friend request
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
    </Stack>
  );
};
