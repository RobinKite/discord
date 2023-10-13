import { useSelector } from "react-redux";

export function useUser() {
  const { id, name, avatar, roles, status, userName, serverName } = useSelector(
    (state) => state.auth,
  );
  const { userRegistrationDate, serverRegistrationDate, bannerColor } =
    useSelector((state) => state.auth);

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
    userId: id,
  };
}
