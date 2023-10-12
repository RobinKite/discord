import { setUser } from "@/redux/slices/authSlice";
import { setServers } from "@/redux/slices/serverSlice";
import { getTokens } from "@/utils/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const PublicLayout = () => {
  const hasToken = Boolean(getTokens().accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    hasToken &&
      dispatch(setUser()).then(() => {
        dispatch(setServers());
        navigate("/", { replace: true });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Outlet />;
};

export default PublicLayout;
