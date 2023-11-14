import { Stack, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { blurple, darkText, darkTooltip } from "@/constants/designTokens";
import { darkServerIconBg } from "@/constants/designTokens";
import { IndicatorState } from "@/constants";
import { adjustText } from "@/utils";
import { useSelector } from "react-redux";
import { Indicator } from "@/components";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import useContextMenu from "@/hooks/useContextMenu";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import useServersContextMenuButtons from "@/hooks/useServersContextMenuButtons";

export function ServerButton({
  children,
  title,
  bgcolor,
  color,
  onClick,
  id,
  notificationCount,
}) {
  const serverId = useSelector((state) => state.server.serverId);
  const extraServerId = useSelector((state) => state.server.extraServerId);

  const [indicatorState, setIndicatorState] = useState(IndicatorState.HIDDEN);
  const [adjusted, setAdjusted] = useState({});

  const contextmenuButtons = useServersContextMenuButtons();

  const { contextMenuRef, contextMenu, handleOnContextMenu, resetContextMenu } =
    useContextMenu();

  useOnClickOutside(contextMenuRef, resetContextMenu);

  useEffect(() => {
    setAdjusted(adjustText(children || title, 2, 6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (serverId === id || extraServerId === id) {
      setIndicatorState(IndicatorState.ACTIVE);
    } else if (notificationCount > 0) {
      setIndicatorState(IndicatorState.NOTIFICATION);
    } else {
      setIndicatorState(IndicatorState.HIDDEN);
    }
  }, [extraServerId, serverId, id, notificationCount]);

  const handleMouseEnter = () => {
    setIndicatorState((prev) => {
      if (prev === IndicatorState.ACTIVE) return IndicatorState.ACTIVE;
      return IndicatorState.HOVER;
    });
  };

  const handleMouseLeave = () => {
    setIndicatorState((prev) => {
      if (prev === IndicatorState.ACTIVE) return IndicatorState.ACTIVE;
      if (notificationCount > 0) return IndicatorState.NOTIFICATION;
      return IndicatorState.HIDDEN;
    });
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      onContextMenu={handleOnContextMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ position: "relative", width: "100%" }}
    >
      <Indicator state={indicatorState} />
      <Tooltip
        title={title || children}
        placement="right"
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              maxWidth: "300px",
              padding: "0.45rem 0.65rem",
              left: "6px",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: darkText,
              bgcolor: darkTooltip,
              "& .MuiTooltip-arrow": {
                color: "#111214",
              },
            },
          },
        }}
      >
        <Button
          onClick={onClick}
          variant="text"
          sx={{
            color,
            fontSize: adjusted?.fontSize,
            textTransform: "initial",
            borderRadius: "50%",
            bgcolor: darkServerIconBg,
            whiteSpace: "nowrap",
            width: 48,
            height: 48,
            transition:
              "color 300ms, background-color 300ms, border-radius 300ms",
            minWidth: "auto",
            "&:hover": {
              bgcolor,
              color: "#fff",
              borderRadius: 4,
            },
            "&:focus": {
              bgcolor,
              color: "#fff",
              borderRadius: 4,
            },
            "&:active": {
              transform: "translateY(2px)",
            },
          }}
        >
          {adjusted?.serverName}
        </Button>
      </Tooltip>
      <ContextMenu
        contextMenuRef={contextMenuRef}
        isToggled={contextMenu.toggled}
        positionX={contextMenu.position.x}
        positionY={contextMenu.position.y}
        buttons={contextmenuButtons}
      />
    </Stack>
  );
}

ServerButton.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  notificationCount: PropTypes.number,
  activeServerId: PropTypes.string,
};

ServerButton.defaultProps = {
  title: "",
  color: "#fff",
  bgcolor: blurple,
  notificationCount: 0,
  onClick: () => {},
};
