import { Stack } from "@mui/material";
import { Roles } from "..";

const StyledStackSX = (theme) => ({
  overflowY: "auto",
  display: "flex",
  flexShrink: 0,
  flexDirection: "column",
  minWidth: "240px",
  gap: 5,
  bgcolor: theme.palette.darkUsersList,
  pl: "16px",
  pr: "8px",
  pt: "24px",
  pb: "24px",
});

export function UserList() {
  return (
    <Stack sx={StyledStackSX}>
      <Roles />
    </Stack>
  );
}
