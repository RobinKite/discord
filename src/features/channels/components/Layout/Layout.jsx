import { ClientSidebar } from "@/features/channels/components";
import { Header, UserSidebar } from "@/features/channels/components";
import { Chat } from "@/features/messaging/components";
import UserList from "@/components/UserList/UserList";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

const StyledStackSX = {
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
};

export function Layout() {
  const { isUserListShown } = useSelector((state) => state.ui);

  return (
    <Stack sx={StyledStackSX}>
      <ClientSidebar />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex grow">
          <UserSidebar />
          <Chat />
          {isUserListShown && <UserList />}
        </main>
      </div>
    </Stack>
  );
}
