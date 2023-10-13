import { Stack, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { blurple, darkText, darkTooltip } from "@/constants/designTokens";
import { darkServerIconBg } from "@/constants/designTokens";
import { adjustText } from "@/utils";
import { useSelector } from "react-redux";

const indicatorHeightMap = {
  active: "h-10",
  hover: "h-5",
  notification: "h-2",
  hidden: "h-0",
};

export function ServerButton({ children, title, bgcolor, color, onClick, id }) {
  const serverId = useSelector((state) => state.server.serverId);

  const isActive = serverId === id;

  const [indicatorState, setIndicatorState] = useState("hidden");
  const [notification, setNotification] = useState(false);
  const [adjusted, setAdjusted] = useState({});

  useEffect(() => {
    setAdjusted(adjustText(children || title, 2, 6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isActive) {
      setIndicatorState("active");
    } else if (notification) {
      setIndicatorState("notification");
    } else {
      setIndicatorState("hidden");
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    if (indicatorState === "active") return;
    setIndicatorState("hover");
  };

  const handleMouseLeave = () => {
    if (indicatorState === "active") return;

    if (notification) {
      setIndicatorState("notification");
    } else if (indicatorState === "hover") setIndicatorState("hidden");
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ position: "relative", width: "100%" }}>
      <span
        className={`absolute left-0 top-1/2 w-1 -translate-y-1/2 rounded-r-lg bg-white transition-all duration-300 ${indicatorHeightMap[indicatorState]}`}
      />
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
              fontWeight: "500",
              color: darkText,
              bgcolor: darkTooltip,
              "& .MuiTooltip-arrow": {
                color: "#111214",
              },
            },
          },
        }}>
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
          }}>
          {adjusted?.serverName}
        </Button>
      </Tooltip>
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
  activeServerId: PropTypes.string,
};

ServerButton.defaultProps = {
  title: "",
  color: "#fff",
  bgcolor: blurple,
  onClick: () => {},
};
