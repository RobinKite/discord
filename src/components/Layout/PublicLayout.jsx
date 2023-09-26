// import { setUserInfo } from "@/redux/slices/authSlice";+
import { setUser } from "@/redux/slices/authSlice";
import { getTokens } from "@/utils/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  const hasTokens = Boolean(getTokens());
  const dispatch = useDispatch();

  useEffect(() => {
    // hasTokens ? dispatch(setUserInfo()) : null;
    hasTokens &&
      dispatch(
        setUser({
          id: null,
          email: null,
          avatar: null,
          name: null,
          userName: null,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicLayout;
