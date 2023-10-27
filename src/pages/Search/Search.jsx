import { Layout, Sidebar } from "@/features/layout/components";
import { FilteredServers } from "@/features/channels/components";

export function Search() {
  return (
    <Layout withHeader={false}>
      <main className="flex grow">
        <Sidebar />
        <FilteredServers />
      </main>
    </Layout>
  );
}
