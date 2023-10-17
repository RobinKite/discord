import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { openModal } from "@/redux/slices/uiSlice";
import { Modal } from "@/constants";
import { Checkbox, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
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
      text: "Згадати",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      text: "Повідомлення",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      text: "Зателефонувати",
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
      text: "Додати нік друга",
      onClick: (e, user) => {
        console.log(user);
      },
      isSpacer: false,
    },
    {
      isSpacer: true,
    },
    {
      text: "Вимкнути міркрофон",
      onClick: (e, user) => {
        e.stopPropagation();
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isCheckbox: true,
      isSpacer: false,
    },
    {
      text: "Вимкнути звукову панель",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isCheckbox: true,
      isSpacer: false,
    },
    {
      text: "Запросити на сервер",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isSelector: true,
      isSpacer: false,
    },
    {
      text: "Видалити друга",
      onClick: (e, user) => {
        console.log(user);
        alert(`click by ${user.userName}`);
      },
      isSpacer: false,
    },
    {
      text: "Заблокувати",
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
      text: "role",
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
              <Stack key={index} sx={{ position: "relative" }}>
                <button>
                  <span>{button.text}</span>
                  <KeyboardArrowRightIcon />
                </button>
                {/* {button.text.toLowerCase() === "role" && (
                  <button
                    style={{ position: "absolute", top: "0", right: "100%" }}
                  >
                    {user.role}
                  </button>
                )} */}
              </Stack>
            );
          if (button.isCheckbox)
            return (
              <FormControlLabel
                // onClick={(e) => button.onClick(e, user)}
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
