import { Server } from "@/pages";
import { RedirectToChannel } from "./RedirectToChannel";
import { RedirectToServer } from "./RedirectToServer";
import { useParams } from "react-router-dom";

export function Redirect() {
  const { serverId, channelId } = useParams();

  if (serverId && channelId) {
    return <Server />;
  } else if (serverId) {
    return <RedirectToChannel />;
  } else {
    return <RedirectToServer />;
  }
}
