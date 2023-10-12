import { Route, Routes } from "react-router-dom";
import PublicLayout from "./components/Layout/PublicLayout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Default from "./pages/Default/Default";
import Login from "./pages/Login/Login";
// import { Layout as ServerLayout } from "@/features/channels/components";
import Redirect from "./pages/Redirect/Redirect";
import Home from "./pages/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<PublicLayout />}>
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="register"
          element={<Login />}
        />

        <Route element={<RequireAuth />}>
          <Route path="channels/">
            {/* <Route
              path="@me"
              element={<></>}
            /> */}
            <Route
              path=":serverId/:channelId"
              element={<Redirect />}
            />
            <Route
              path=":serverId/"
              element={<Redirect />}
            />
          </Route>
          <Route
            path=""
            element={<Home />}
          />
        </Route>
        <Route
          path="*"
          element={<Default />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
