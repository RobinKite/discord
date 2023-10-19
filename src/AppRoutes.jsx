import { Route, Routes, useLocation } from "react-router-dom";
import FilteredServers from "./features/channels/components/FilteredServers/FilteredServers";
import GuildDiscovery from "./components/GuildDiscovery/GuildDiscovery";
import { useEffect } from "react";
import { Default, Home, Login, Redirect } from "@/pages";
import { Layout, PublicLayout, RequireAuth } from "@/components";
import { useDispatch } from "react-redux";
import { updateCurrentPage } from "@/redux/slices/uiSlice";
import { findPageByPathname } from "@/utils";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const currentPage = findPageByPathname(location.pathname);
    dispatch(updateCurrentPage(currentPage));
    console.log("CURRENT PAGE:", currentPage);
  }, [dispatch, location]);

  return (
    <Routes>
      <Route exact path="/" element={<PublicLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="channels/">
            <Route path="@me" element={<Layout />} />
            <Route path=":serverId/:channelId" element={<Redirect />} />
            <Route path=":serverId/" element={<Redirect />} />
          </Route>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="guild-discovery" element={<GuildDiscovery />} />
        <Route path="filtered-servers" element={<FilteredServers />} />
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
