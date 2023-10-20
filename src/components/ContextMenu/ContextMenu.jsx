import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { openModal } from "@/redux/slices/uiSlice";
import { Modal } from "@/constants";
import { Checkbox, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  styleSelectSX,
  styledCheckboxSX,
  styledFormControlLabelSX,
  styledMenuSX,
} from "./stylesSX";

export const ContextMenu = ({
  positionY,
  positionX,
  isToggled,
  contextMenuRef,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.userProfile);
  const modalStack = useSelector((state) => state.ui.modalStack);
  const isSettingsModalOpen = modalStack.includes(Modal.SETTINGS);

  const handleOpenProfile = () => {
    dispatch(openModal(Modal.PROFILE));
  };

  const buttons = [
    {
      text: "Profile",
      onClick: (e) => {
        e.stopPropagation();
        handleOpenProfile();
      },
      isSpacer: false,
    },
    {
      text: "Mention",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      text: "Message",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      text: "Call",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      text: "Edit note",
      onClick: (e) => {
        e.stopPropagation();
        handleOpenProfile();
      },
      isSpacer: false,
    },
    {
      text: "Add Friend Nickname",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Mute",
      onClick: (e, user) => {
        e.stopPropagation();
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isCheckbox: true,
      isSpacer: false,
    },
    {
      text: "Mute Soundboard",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isCheckbox: true,
      isSpacer: false,
    },
    {
      text: "Invite to server",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isSelector: true,
      isSpacer: false,
    },
    {
      text: "Remote Friend",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isSpacer: false,
    },
    {
      text: "Block",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Role",
      onClick: (e, user) => {
        console.log(user);
      },
      isSelector: true,
      isSpacer: false,
    },
  ];

  return (
    !isSettingsModalOpen && (
      <Stack
        ref={contextMenuRef}
        sx={[
          styledMenuSX,
          {
            top: positionY + 2 + "px",
            left: positionX + 2 + "px",
          },
        ]}
        className={`context-menu ${isToggled ? "active" : ""}`}
      >
        {buttons.map((button, index) => {
          if (button.isSpacer) return <hr key={index} />;
          if (button.isSelector)
            return (
              <Stack key={index} sx={styleSelectSX}>
                <button>
                  <span>{button.text}</span>
                  <KeyboardArrowRightIcon />
                </button>
                <Stack>
                  <button>
                    {button.text.toLowerCase() === "role" && (
                      <span>{user?.role}</span>
                    )}
                    {button.text.toLowerCase() === "invite to server" && (
                      <span>server 1</span>
                      // TODO: map a real user's servers
                    )}
                  </button>
                </Stack>
              </Stack>
            );
          if (button.isCheckbox)
            return (
              <FormControlLabel
                labelPlacement="start"
                control={<Checkbox sx={styledCheckboxSX} />}
                key={index}
                label={button.text}
                sx={styledFormControlLabelSX}
              />
            );

          return (
            <button onClick={(e) => button.onClick(e, user)} key={index}>
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
};
