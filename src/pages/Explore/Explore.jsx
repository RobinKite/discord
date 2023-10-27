import { Layout, Sidebar } from "@/features/layout/components";
import GuildDiscovery from "../../components/GuildDiscovery/GuildDiscovery";

export function Explore() {
  return (
    <Layout withHeader={false}>
      <main className="flex grow">
        <Sidebar />
        <GuildDiscovery />
      </main>
    </Layout>
  );
}
