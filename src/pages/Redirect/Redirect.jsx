import { Layout } from "@/features/channels/components";
import RedirectToChannel from "./RedirectToChannel";
import RedirectToServer from "./RedirectToServer";
import { useParams } from "react-router-dom";

const Redirect = () => {
  const { serverId, channelId } = useParams();

  if (serverId && channelId) {
    return <Layout />;
  } else if (serverId) {
    return <RedirectToChannel />;
  } else {
    return <RedirectToServer />;
  }
};

export default Redirect;
