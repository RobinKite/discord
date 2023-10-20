import { Stack } from "@mui/material";
import Roles from "../Roles/Roles";

const StyledStackSX = (theme) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "240px",
  gap: 5,
  bgcolor: theme.palette.darkUsersList,
  pl: "16px",
  pr: "8px",
  pt: "24px",
});

export function UserList() {
  return (
    <Stack sx={StyledStackSX}>
      <Roles />
    </Stack>
  );
}
