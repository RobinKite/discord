import {
  styled,
  Typography,
  Select,
  Slider,
  Button,
  Switch,
  Input,
} from "@mui/material";
import { grey } from "@/constants/designTokens";

export const Title = styled(Typography)(() => ({
  "&": {
    color: "#b5bac1",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: "8px",
  },
}));

export const CustomSelect = styled(Select)(({ theme }) => ({
  "&": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#1e1f22",
    border: "none",
    color: theme.palette.mode === "dark" ? grey[900] : "#b5bac1",
    height: "40px",
    padding: "10px",
    width: "100%",
    marginBottom: "20px",
  },
  "& .MuiSelect-icon": {
    fontSize: "24px",
    color: "#b5bac1",
  },
}));

export const PrettoSlider = styled(Slider)({
  color: "#5865f2",
  height: 8,
  width: "100%",
  marginTop: "18px",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#4e5058",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 10,
    backgroundColor: "#e3e5e8",
    border: "2px solid #e3e5e8",
    borderRadius: "3px",

    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-markLabel": {
    color: "#949ba4",
    fontSize: 10,
    fontWeight: 700,
    top: "-10px",
  },
  "&.MuiSlider-markActive": { color: "#2dc770" },
  "& .MuiSlider-mark": {
    width: 2,
    height: 24,
    backgroundColor: "#4e5058",
  },
  "& .MuiSlider-valueLabel": {
    padding: "4px 12px",
    borderRadius: "4px",
    backgroundColor: "#1e1f22",
    boxShadow:
      "0 4px 1px 0 rgba(0, 0, 0, 0.05),0 2px 2px 0 rgba(0, 0, 0, 0.1),0 3px 3px 0 rgba(0, 0, 0, 0.05)",
  },
});

export const SettingsTitle = styled(Typography)(() => ({
  "&": {
    fontSize: "20px",
    fontWeight: 500,
    color: "#f2f3f5",
    marginBottom: "20px",
  },
}));

export const RemovalButton = styled(Button)(() => ({
  "&": {
    color: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "capitalize",
    border: "1px solid #f23f42",
    borderRadius: "3px",
    padding: "2px 16px",
    "&:hover": {
      backgroundColor: "#f23f42",
    },
  },
}));

export const DeviceText = styled(Typography)(() => ({
  "&": {
    fontSize: "14px",
    color: "#b5bac1",
    marginBottom: "20px",
  },
}));

export const DeviceSpan = styled(Typography)(() => ({
  "&": {
    display: "flex",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const DotSpan = styled(Typography)(() => ({
  "&": {
    display: "flex",
    width: "2px",
    height: "2px",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b5bac1",
  },
}));

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 22,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(16px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "light" ? "#23a55a" : "#1da455",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 20,
    height: 20,
    borderRadius: 10,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 24 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "light" ? "#80848e" : "#6e717a",
    boxSizing: "border-box",
  },
}));

export const UserTextField = styled(Input)({
  fontSize: "16px",
  color: "#dbdee1",
  width: "100%",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#1e1f22",
  padding: "10px 6px 6px",
  "&:focus": {
    outline: "none",
  },
});
export const MainButton = styled(Button)(() => ({
  "&": {
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: 500,
    backgroundColor: "#5865f2",
    padding: "2px 16px",
    borderRadius: "3px",
    marginBottom: "20px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4752c4",
    },
  },
}));

export const EditButton = styled(Button)(() => ({
  "&": {
    backgroundColor: "#4e5058",
    color: "#fff",
    padding: "2px 14px",
    borderRadius: "3px",
    textTransform: "capitalize",
    margin: "8px 0",
    "&:hover": {
      backgroundColor: "#6d6f78",
    },
  },
}));

export const CloseButton = styled(Button)(() => ({
  "&": {
    position: "absolute",
    right: "-50px",
    top: "60px",
    display: "flex",
    flexDirection: "column",
    color: "#b5bac1",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    "&:hover svg": {
      fill: "#fff",
      color: "#fff",
    },
  },
}));

export const LogOutButton = styled(Button)(() => ({
  "&": {
    width: "100%",
    borderRadius: "4px",
    padding: "4px 10px ",
    justifyContent: "flex-start",
    color: "#b5bac1",
    fontSize: "16px",
    textTransform: "capitalize",
    "&:hover": { backgroundColor: "#4e50584c", color: "#fff" },
  },
}));
