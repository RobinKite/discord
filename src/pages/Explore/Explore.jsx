import { Layout } from "@/features/layout/components";
import { UserSidebar } from "@/components";
import GuildDiscovery from "../../components/GuildDiscovery/GuildDiscovery";

export function Explore() {
  return (
    <Layout withHeader={false}>
      <main className="flex grow">
        <UserSidebar />
        <GuildDiscovery />
      </main>
    </Layout>
  );
}
