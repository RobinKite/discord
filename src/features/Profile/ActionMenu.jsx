import { removeFriend } from "@/redux/slices/friendsSlice";
import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/uiSlice";
import { setProfile } from "@/redux/slices/profileSlice";
import { Modal } from "@/constants";
// import { NavLink } from "react-router-dom";

export const ActionMenu = ({ actionMenuRef }) => {
  const userProfile = useSelector((state) => state.profile.userProfile);
  const dispatch = useDispatch();

  const handleRemoveFromFriendsButtonClick = () => {
    dispatch(removeFriend(userProfile.userId));
    dispatch(setProfile(null));
    dispatch(closeModal(Modal.PROFILE));
  };

  return (
    <Stack
      ref={actionMenuRef}
      sx={(theme) => ({
        position: "absolute",
        top: "8px",
        right: "16px",
        borderRadius: "8px",
        p: "8px",
        bgcolor: theme.palette.darkTooltip,
        boxShadow: "0 2px 4px #00000080",
      })}
    >
      <Typography
        onClick={handleRemoveFromFriendsButtonClick}
        sx={(theme) => ({
          borderRadius: "4px",
          p: "8px",
          color: theme.palette.red,
          fontSize: "14px",
          "&:hover": {
            cursor: "pointer",
            color: theme.palette.white,
            bgcolor: theme.palette.red,
          },
          "&:focus": {
            cursor: "pointer",
            color: theme.palette.white,
            bgcolor: theme.palette.red,
          },
        })}
      >
        Remove from friends
      </Typography>
      <Typography
        sx={(theme) => ({
          borderRadius: "4px",
          p: "8px",
          color: theme.palette.grey[300],
          fontSize: "14px",
          "&:hover": {
            cursor: "pointer",
            color: theme.palette.white,
            bgcolor: theme.palette.blurple,
          },
          "&:focus": {
            cursor: "pointer",
            color: theme.palette.white,
            bgcolor: theme.palette.blurple,
          },
        })}
      >
        Send a message
      </Typography>
      {/* <NavLink to="/channels/@me">Send a message</NavLink> */}
    </Stack>
  );
};

ActionMenu.propTypes = {
  actionMenuRef: PropTypes.object,
};

ActionMenu.defaultProps = {
  actionMenuRef: null,
};
