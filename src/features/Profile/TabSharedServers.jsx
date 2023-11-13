import { Button, Stack, Typography } from "@mui/material";
import { darkServerIconBg } from "@/theme/designTokens";
import { trimTheLine } from "@/utils";
import PropTypes from "prop-types";

export const TabSharedServers = ({ userServers }) => {
  return userServers?.length ? (
    userServers.map((server) => {
      const abbrTitle = trimTheLine(server.title);

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

TabSharedServers.propTypes = {
  userServers: PropTypes.array.isRequired,
};
