import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Server } from "@/pages";
import { setCurrentChannel } from "@/redux/slices/serverSlice";
import { setCurrentServer } from "@/redux/slices/serverSlice";

export function ServerRedirect() {
  const dispatch = useDispatch();
  const { serverId, channelId } = useParams();
  const servers = useSelector((state) => state.server.servers);

  const server = servers.find((server) => server.id === serverId) || null;
  const channel =
    server?.channels.find((channel) => channel.id === channelId) || null;

  useEffect(() => {
    if (server && channel) {
      dispatch(setCurrentServer(server));
      dispatch(setCurrentChannel(channel));
    }
  }, [dispatch, channel, server]);

  if (server && channel) {
    return <Server />;
  } else if (server) {
    const newChannelId = server.channels[0].id;
    return <Navigate to={`/channels/${serverId}/${newChannelId}`} replace />;
  } else {
    return <Navigate to="/channels/@me" replace />;
  }
}
