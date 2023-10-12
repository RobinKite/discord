import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { openModal } from "@/redux/slices/uiSlice";
import { Modal } from "@/constants";
import { setProfile } from "@/redux/slices/profileSlice";
import { Stack } from "@mui/material";

const StyledMenuSX = {
  visibility: "hidden",
  opacity: 0,
  backgroundColor: "#111214",
  position: "fixed",
  color: "white",
  padding: "6px 8px",
  borderRadius: "5px",
  fontSize: "0.875rem",
  width: "100%",
  maxWidth: "250px",

  "&.active": {
    visibility: "visible",
    opacity: 1,
    display: "flex",
    flexDirection: "column",
  },

  "& button": {
    width: "100%",
    backgroundColor: "transparent",
    border: 0,
    borderRadius: "3px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
    padding: "5px 8px",
    cursor: "pointer",
    color: "#dbded1",
  },

  "& button:hover": {
    backgroundColor: "#5865f2",
  },

  "& hr": {
    border: 0,
    borderBottom: "1px solid #32383f",
    backgroundColor: "transparent",
    margin: "5px 0",
  },
};

export const ContextMenu = ({
  positionY,
  positionX,
  isToggled,
  contextMenuRef,
  buttons,
  user,
}) => {
  const dispatch = useDispatch();
  const modalStack = useSelector((state) => state.ui.modalStack);
  const isSettingsModalOpen = modalStack.includes(Modal.SETTINGS);

  const handleOpenProfile = () => {
    dispatch(openModal(Modal.PROFILE));
  };

  const handleClick = (e, user, button) => {
    e.stopPropagation();
    handleOpenProfile();
    dispatch(setProfile(user));
    button.onClick(e, user);
  };

  return (
    !isSettingsModalOpen && (
      <Stack
        ref={contextMenuRef}
        sx={[
          StyledMenuSX,
          {
            top: positionY + 2 + "px",
            left: positionX + 2 + "px",
          },
        ]}
        className={`context-menu ${isToggled ? "active" : ""}`}
      >
        {buttons.map((button, index) => {
          if (button.isSpacer) return <hr key={index} />;
          return (
            <button onClick={(e) => handleClick(e, user, button)} key={index}>
              <span>{button.text}</span>
            </button>
          );
        })}
      </Stack>
    )
  );
};

ContextMenu.propTypes = {
  positionY: PropTypes.number.isRequired,
  positionX: PropTypes.number.isRequired,
  isToggled: PropTypes.bool.isRequired,
  contextMenuRef: PropTypes.object.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.object,
};

ContextMenu.defaultProps = {
  user: null,
};
