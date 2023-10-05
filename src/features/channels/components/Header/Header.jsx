import { useTheme } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { BiHash, BiSolidHelpCircle, BiSolidBell } from "react-icons/bi";
import { BsPinAngleFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@/components";
import { toggleUserList } from "@/redux/slices/uiSlice";

const StyledStackSX = (theme) => ({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  justifyContent: "space-between",
  alignItems: "center",
  bgcolor: theme.palette.darkUsersList,
  py: "0.75rem",
  px: "1rem",
});

export function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const title = useSelector((state) => state.server.currentServer.title);
  const channelName = useSelector((state) => state.server.currentChannel.name);

  return (
    <Stack
      component="header"
      sx={{
        position: "relative",
        flexDirection: "row",
        color: theme.palette.lightUsersList,
        zIndex: "10",
      }}
      boxShadow={theme.shadows[1]}
    >
      <Stack sx={[StyledStackSX, { maxWidth: "240px" }]}>
        <Typography component="h2" sx={{ fontWeight: "500" }}>
          {title}
        </Typography>
      </Stack>
      <Stack sx={[StyledStackSX, { bgcolor: "#313338" }]}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "0.25rem",
          }}
        >
          {/* <DehazeIcon
            sx={{ color: "#80848e", cursor: "pointer" }}
            onClick={() => {
              console.log("click");
            }}
          /> */}
          <BiHash color="#80848e" size={24} />
          <Typography component="h2" sx={{ fontWeight: "500" }}>
            {channelName}
          </Typography>
        </Stack>
        <div className="flex items-center gap-x-4 text-[#b5bac1]">
          <IconButton icon={<BiSolidBell size={22} />} />
          <IconButton icon={<BsPinAngleFill size={22} />} />
          <IconButton
            onClick={() => dispatch(toggleUserList())}
            icon={<FaUserGroup size={22} />}
          />
          <IconButton icon={<BiSolidHelpCircle size={24} />} />
        </div>
      </Stack>
    </Stack>
  );
}
