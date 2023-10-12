import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const RedirectToChannel = () => {
  const { serverId } = useParams();
  const channelId = useSelector((state) => state.server.channelId);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/channels/${serverId}/${channelId}`, { replace: true });
  }, [navigate, serverId, channelId]);
};

export default RedirectToChannel;
