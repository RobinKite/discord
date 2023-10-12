import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const RedirectToChannel = () => {
  const { serverId } = useParams();
  const channelId = useSelector((state) => state.server.channelId);

  return (
    <Navigate
      to={`/channels/${serverId}/${channelId}`}
      replace
    />
  );
};

export default RedirectToChannel;
