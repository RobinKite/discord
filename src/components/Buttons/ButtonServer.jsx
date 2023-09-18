import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  blurple,
  darkServerIconBg,
  darkText,
  darkTooltip,
} from "@/constants/designTokens";
import { adjustText } from "@/utils";

const indicatorHeightMap = {
  active: "h-10",
  hover: "h-5",
  notification: "h-2",
  hidden: "h-0",
};

const ButtonServer = ({ children, title, bgcolor, color }) => {
  const [indicatorState, setIndicatorState] = useState(null);
  const [notification, setNotification] = useState(false); //mock redux notification
  const [adjusted, setAdjusted] = useState({});

  const handleEnter = () => {
    if (indicatorState === "active") return;
    setIndicatorState("hover");
  };

  const handleLeave = () => {
    if (indicatorState === "active") return;

    if (notification) {
      setIndicatorState("notification");
    } else if (indicatorState === "hover") setIndicatorState("hidden");
  };

  const handleActive = (e) => {
    setNotification(true);
    setIndicatorState("active");
  };

  // useEffect(() => {
  //   if (indicatorState === "active")
  //     setTimeout(() => {
  //       setIndicatorState(notification ? "notification" : null);
  //       if (!notification) setIndicator(false);
  //     }, 3000);
  // }, [indicatorState]);

  useEffect(() => {
    setAdjusted(adjustText(children));
  }, []);

  return (
    <div
      className="flex justify-center items-center w-full relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleActive}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 left-0 w-1 bg-white rounded-r-lg transition-all duration-300 ${indicatorHeightMap[indicatorState]}`}
      />
      <Tooltip
        title={title || children}
        arrow
        placement="right"
        componentsProps={{
          tooltip: {
            sx: {
              maxWidth: "300px",
              padding: "10px",
              left: "6px",
              fontSize: "18px",
              fontWeight: "700",
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
            transition: "all 300ms",
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
    </div>
  );
};

export default ButtonServer;

ButtonServer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
};

ButtonServer.defaultProps = {
  title: "",
  color: "#fff",
  bgcolor: blurple,
};
