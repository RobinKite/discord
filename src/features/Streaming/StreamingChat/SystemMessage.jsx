import { Stack, Typography } from "@mui/material";
import { IoChatboxSharp } from "react-icons/io5";

const SystemMessage = () => {
  return (
    <Stack sx={{ margin: "1rem", mt: "auto" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "#41434a",
          width: "68px",
          height: "68px",
          borderRadius: "50%",
          mt: "1rem",
        }}>
        <IoChatboxSharp size={38} color="#f2f3f5" />
      </Stack>
      <Typography
        variant="h3"
        sx={{
          color: "#f2f3f5",
          fontSize: "2rem",
          fontWeight: 500,
          marginY: "0.5rem",
        }}>
        Welcome to General!
      </Typography>
      <Typography sx={{ color: "#b5bac1", fontSize: "1rem" }}>
        This is the start of the General channel.
      </Typography>
    </Stack>
  );
};

export default SystemMessage;
