import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setProfileNote } from "@/redux/slices/profileSlice";

const CustomNoteTextField = styled("input")({
  fontSize: "12px",
  color: "#dbdee1",
  width: "100%",
  border: "none",
  backgroundColor: "#111214",
  marginBottom: "24px",
  "&:focus": {
    outline: "none",
  },
});

export const ProfileTabsContent = ({ user, activeTabId }) => {
  const dispatch = useDispatch();
  const userNote = useSelector((state) => state.profile.userProfile.note) || "";

  const handleNoteChange = (e) => {
    dispatch(setProfileNote(e.target.value));
  };

  return (
    <Stack sx={{ minHeight: "231px" }}>
      {activeTabId === "aboutUser" && (
        <Stack>
          <Typography
            sx={{
              mb: "8px",
              fontSize: "12px",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Discord participants include:
          </Typography>
          <Typography
            sx={{
              mb: "16px",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            {user.serverRegistrationDate}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "12px",
              textTransform: "uppercase",
              fontWeight: "700",
              marginBottom: 1.5,
            }}
          >
            Note
          </Typography>
          <CustomNoteTextField
            id="user-note"
            placeholder="Click to add a note"
            size="small"
            onChange={handleNoteChange}
            value={userNote}
          />
        </Stack>
      )}
      {activeTabId === "SharedServers" && <Stack>Shared servers</Stack>}
      {activeTabId === "MutualFriends" && <Stack>Mutual friends</Stack>}
    </Stack>
  );
};

ProfileTabsContent.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  activeTabId: PropTypes.string.isRequired,
};

ProfileTabsContent.defaultProps = {
  user: null,
};
