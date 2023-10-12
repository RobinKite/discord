import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectToServer = () => {
  const serverId = useSelector((state) => state.server.serverId);

  if (!serverId) {
    return <div>Loading...</div>;
  }

  return (
    <Navigate
      to={`/channels/${serverId}`}
      replace
    />
  );
};

export default RedirectToServer;
