import { Route, Routes, useLocation } from "react-router-dom";
import PublicLayout from "./components/Layout/PublicLayout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Default from "./pages/Default/Default";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Layout as ServerLayout } from "@/features/channels/components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentPage } from "./redux/slices/uiSlice";
import { findPageByPathname } from "./utils";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const currentPage = findPageByPathname(location.pathname);
    dispatch(updateCurrentPage(currentPage));
    console.log(currentPage);
  }, [dispatch, location]);

  return (
    <Routes>
      <Route exact path="/" element={<PublicLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="channels/">
            <Route path="@me" element={<ServerLayout />} />
            <Route
              path=":serverId/:channelId"
              element={<p>Server channel</p>}
            />
          </Route>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
