import { Layout, Sidebar } from "@/features/layout/components";
import { FilteredServers } from "@/features/channels/components";
import { Page } from "@/constants";

export function Search() {
  return (
    <Layout withHeader={false}>
      <Sidebar page={Page.SEARCH} />
      <FilteredServers />
    </Layout>
  );
}
