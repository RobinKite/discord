import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Direct, Home, Login, ServerRedirect } from "@/pages";
import { Friends, Explore, Search } from "@/pages";
import { PageLoader, ProtectedLayout } from "@/components";
import { setNextPagePathname, updateCurrentPage } from "@/redux/slices/uiSlice";
import { setServers } from "@/redux/slices/serverSlice";
import { setUser } from "@/redux/slices/authSlice";
import { findPageByPathname } from "@/utils";
import { getTokens } from "@/utils/auth";

const ProtectedRoutes = () => {
  const areServersLoading = useSelector(
    (state) => state.server.areServersLoading,
  );

  return areServersLoading ? (
    <PageLoader />
  ) : (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="" element={<Home />} />
        <Route path="channels/">
          <Route path="@me" element={<Friends />} />
          <Route path="@me/:chatId" element={<Direct />} />
          <Route path=":serverId" element={<ServerRedirect />} />
          <Route path=":serverId/:channelId/*" element={<ServerRedirect />} />
        </Route>

        <Route path="guild-discovery" element={<Explore />} />
        <Route path="filtered-servers" element={<Search />} />
        <Route path="*" element={<Navigate to="/channels/@me" />} />
      </Route>
    </Routes>
  );
};

const PublicRoutes = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(setNextPagePathname(pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export function AppRoutes() {
  const dispatch = useDispatch();
  const location = useLocation();
  const hasToken = Boolean(getTokens().accessToken);

  useEffect(() => {
    if (hasToken) {
      dispatch(setUser()).then(() => {
        dispatch(setServers());
      });
    }
  }, [dispatch, hasToken]);

  useEffect(() => {
    const currentPage = findPageByPathname(location.pathname);
    dispatch(updateCurrentPage(currentPage));
  }, [dispatch, location]);

  return hasToken ? <ProtectedRoutes /> : <PublicRoutes />;
}
