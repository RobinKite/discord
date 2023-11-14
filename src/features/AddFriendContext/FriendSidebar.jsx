import { Stack, Typography } from "@mui/material";

export default function FriendSidebar() {
  return (
    <Stack
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        borderLeft: "1px solid #4e50587a",
        flex: "0 1 30%",
        minWidth: "360px",
        maxWidth: "420px",
        height: "100%",
      }}
    >
      <Stack sx={{ p: "16px" }}>
        <Typography
          variant="h2"
          sx={{
            m: "8px 0 16px",
            fontWeight: "800",
            fontSize: "20px",
            lineHeight: "1.20",
            textTransform: "capitalize",
            color: "#ffffff",
          }}
        >
          Active now
        </Typography>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <Typography
            sx={{
              mb: "4px",
              fontSize: "16px",
              lineHeight: "1.25",
              fontWeight: "600",
              color: "rgb(242, 243, 245)",
            }}
          >
            It&#39;s quiet for now...
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "1.29",
              fontWeight: "400",
              color: "#B5BAC1",
            }}
          >
            When a friend starts an activity - like playing a game or hanging
            out voice - we&#39;ll show it here!
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
