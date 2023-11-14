import { useSelector } from "react-redux";
import PropTypes from "prop-types";
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
  buttons,
}) => {
  const user = useSelector((state) => state.profile.userProfile);
  const modalStack = useSelector((state) => state.ui.modalStack);
  const isSettingsModalOpen = modalStack.includes(Modal.SETTINGS);

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
                <button onClick={button.onClick}>
                  <span>{button.text}</span>
                  <KeyboardArrowRightIcon />
                </button>
                <Stack>
                  <button onClick={button.onClick}>
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
  buttons: PropTypes.array.isRequired,
};
