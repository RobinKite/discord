import { useSelector } from "react-redux";

export function useUser() {
  const userName = useSelector((state) => state.auth.userName);
  const name = useSelector((state) => state.auth.name);
  const avatar = useSelector((state) => state.auth.avatar);
  const roles = useSelector((state) => state.auth.roles);
  const status = useSelector((state) => state.auth.status);
  const serverName = useSelector((state) => state.server.currentServer.title);
  const userRegistrationDate = useSelector(
    (state) => state.auth.userRegistrationDate,
  );
  const serverRegistrationDate = useSelector(
    (state) => state.auth.serverRegistrationDate,
  );
  const bannerColor = useSelector((state) => state.auth.bannerColor);
  const userId = useSelector((state) => state.auth.id);

  return {
    userName,
    name,
    avatar,
    roles,
    status,
    serverName,
    userRegistrationDate,
    serverRegistrationDate,
    bannerColor,
    userId,
  };
}
