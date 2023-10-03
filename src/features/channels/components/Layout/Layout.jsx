import { ClientSidebar } from "@/features/channels/components";
import { Header, UserSidebar } from "@/features/channels/components";
import { Chat } from "@/features/messaging/components";
import UserList from "@/components/UserList/UserList";
import { Stack } from "@mui/material";

const StyledStackSX = {
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
};

export function Layout() {
  return (
    <Stack sx={StyledStackSX}>
      <ClientSidebar />
      <div className="flex min-h-screen flex-col">
        <Header serverName="Server" channelName="general" />
        <main className="flex grow">
          <UserSidebar fullname="User" username="username" />
          <Chat />
          <UserList />
        </main>
      </div>
    </Stack>
  );
}
