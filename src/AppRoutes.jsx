import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Default, Home, Login, Redirect } from "@/pages";
import { Friends, Explore, Search } from "@/pages";
import { PublicLayout, RequireAuth } from "@/components";
import { useDispatch } from "react-redux";
import { updateCurrentPage } from "@/redux/slices/uiSlice";
import { findPageByPathname } from "@/utils";

export function AppRoutes() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const currentPage = findPageByPathname(location.pathname);
    console.log(location.pathname);
    dispatch(updateCurrentPage(currentPage));
  }, [dispatch, location]);

  return (
    <Routes>
      <Route exact path="/" element={<PublicLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="" element={<Home />} />
          <Route path="channels/">
            <Route path="@me" element={<Friends />} />
            <Route path=":serverId/:channelId" element={<Redirect />} />
            <Route path=":serverId/" element={<Redirect />} />
          </Route>

          <Route path="guild-discovery" element={<Explore />} />
          <Route path="filtered-servers" element={<Search />} />
        </Route>
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
}
