import { Stack } from "@mui/material";

const Separator = () => {
  return (
    <Stack
      variant="span"
      sx={{
        marginY: "12px",
        boxSizing: "border-box",
        display: "block",
        height: "1px",
        bgcolor: "#949ba448",
        content: "''",
      }}
    />
  );
};

export default Separator;
