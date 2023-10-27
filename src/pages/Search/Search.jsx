import { UserSidebar } from "@/components";
import { Layout } from "@/features/layout/components";
import { FilteredServers } from "@/features/channels/components";

export function Search() {
  return (
    <Layout withHeader={false}>
      <main className="flex grow">
        <UserSidebar />
        <FilteredServers />
      </main>
    </Layout>
  );
}
