import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { darkServerIconBg } from "@/theme/designTokens";

export const TabSharedServers = () => {
  const userServers = useSelector(
    (state) => state.profile.userProfile.mutualServers
  );

  return userServers.length ? (
    userServers.map((server) => {
      const abbrTitle = server.title
        .split(" ")
        .map((s) => s[0])
        .join("");

      return (
        <Stack
          key={server.title}
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "4px 8px",
            p: "4px",
            borderRadius: "4px",
            transition: "background-color 250ms linear",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#35373d",
            },
            "&:hover Button": {
              color: "#fff",
              borderRadius: 2,
              backgroundColor: theme.palette.blurple,
            },
            "&:focus Button": {
              color: "#fff",
              borderRadius: 2,
              backgroundColor: theme.palette.blurple,
            },
          })}
        >
          <Button
            variant="text"
            sx={{
              color: "#ffffff",
              textTransform: "initial",
              borderRadius: "50%",
              bgcolor: darkServerIconBg,
              whiteSpace: "nowrap",
              width: 36,
              height: 36,
              transition: "all 300ms",
              minWidth: "auto",

              "&:active": {
                transform: "translateY(2px)",
              },
            }}
          >
            {abbrTitle}
          </Button>
          <Typography sx={{ fontSize: "14px" }}>{server.title}</Typography>
        </Stack>
      );
    })
  ) : (
    <Typography sx={{ fontSize: "14px" }}>Have not shared servers</Typography>
  );
};
