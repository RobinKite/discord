import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { StreamButtonOff, StreamButtonOn } from "../StreamingStyledElements";

export function SwitchButton({
  expression,
  onClick,
  icons,
  tooltipTitles,
  buttons,
}) {
  const Button = expression ? buttons.onTrue : buttons.onFalse;
  const Icon = expression ? icons.onTrue : icons.onFalse;
  const title = expression ? tooltipTitles.onTrue : tooltipTitles.onFalse;

  return (
    <Tooltip arrow title={title}>
      <Button onClick={onClick}>{Icon}</Button>
    </Tooltip>
  );
}

SwitchButton.propTypes = {
  expression: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icons: PropTypes.shape({
    onTrue: PropTypes.element.isRequired,
    onFalse: PropTypes.element.isRequired,
  }).isRequired,
  tooltipTitles: PropTypes.shape({
    onTrue: PropTypes.string.isRequired,
    onFalse: PropTypes.string.isRequired,
  }).isRequired,
  buttons: PropTypes.shape({
    onTrue: PropTypes.object.isRequired,
    onFalse: PropTypes.object.isRequired,
  }),
};

SwitchButton.defaultProps = {
  buttons: { onTrue: StreamButtonOn, onFalse: StreamButtonOff },
};
