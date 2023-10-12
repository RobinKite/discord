import { Stack, Tooltip } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentServer } from "@/redux/slices/serverSlice";

const indicatorHeightMap = {
  active: "h-10",
  hover: "h-5",
  notification: "h-2",
  hidden: "h-0",
};

const ButtonServer = ({
  children,
  title,
  bgcolor,
  color,
  onClick,
  id,
  activeServerId,
}) => {
  const [indicatorState, setIndicatorState] = useState(null);
  const [notification, setNotification] = useState(false);
  const [adjusted, setAdjusted] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setAdjusted(adjustText(children));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeServerId === id) {
      setIndicatorState("active");
    } else if (notification) {
      setIndicatorState("notification");
    } else {
      setIndicatorState("hidden");
    }
  }, [activeServerId, id, notification]);

  const handleClick = () => {
    dispatch(setCurrentServer(id));
    navigate(`/channels/${id}`);
  };

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
      onClick={handleClick}
      sx={{ position: "relative", width: "100%" }}>
      {/* <Typography
        variant="span"
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "4px",
          bgcolor: "#fff",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          transition: "all 300",
        }}
      ></Typography> */}
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
          }}>
          {adjusted?.serverName}
        </Button>
      </Tooltip>
    </Stack>
  );
};

export default ButtonServer;

ButtonServer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  activeServerId: PropTypes.string,
};

ButtonServer.defaultProps = {
  title: "",
  color: "#fff",
  bgcolor: blurple,
  onClick: () => {},
};
