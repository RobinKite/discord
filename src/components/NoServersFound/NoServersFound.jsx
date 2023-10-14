import { Stack, Typography } from "@mui/material";
import emptyImage from "@/assets/empty_image.svg";
const NoServersFound = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "720px",
        height: "395px",
        bgcolor: "#2b2d31",
        paddingY: "80px",
        borderRadius: "8px",
      }}
    >
      <Stack sx={{ width: "314px", height: "145px" }}>
        <img src={emptyImage} alt="empty page" />
      </Stack>
      <Typography
        variant="h2"
        sx={{
          color: "#f2f3f5",
          fontSize: "24px",
          fontWeight: 600,
          margin: "32px 0 8px",
        }}
      >
        No results found
      </Typography>
      <Typography sx={{ color: "#b5bac1", fontSize: "16px" }}>
        Try serching for something else.
      </Typography>
    </Stack>
  );
};

export default NoServersFound;
