import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const serverId = useSelector((state) => state.server.serverId);
  const channelId = useSelector((state) => state.server.channelId);

  if (!serverId || !channelId) {
    return <div>Loading...</div>;
  }

  return (
    <Navigate
      to={`/channels/${serverId}/${channelId}`}
      replace
    />
  );
};

export default Home;
