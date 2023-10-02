import { setUser } from "@/redux/slices/authSlice";
import { getTokens } from "@/utils/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const PublicLayout = () => {
  const hasTokens =
    Boolean(getTokens().accessToken) && Boolean(getTokens().refreshToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(hasTokens);

  useEffect(() => {
    hasTokens &&
      dispatch(
        setUser().then(() => {
          navigate("/login", { replace: true });
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
