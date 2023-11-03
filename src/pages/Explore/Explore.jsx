import { Layout, Sidebar } from "@/features/layout/components";
import { Page } from "@/constants";
import GuildDiscovery from "../../components/GuildDiscovery/GuildDiscovery";

export function Explore() {
  return (
    <Layout withHeader={false}>
      <Sidebar page={Page.EXPLORE} />
      <GuildDiscovery />
    </Layout>
  );
}
