import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function Home() {
  const nextPagePathname = useSelector((state) => state.ui.nextPagePathname);

  const navigateTo =
    !nextPagePathname || nextPagePathname === "/"
      ? "/channels/@me"
      : nextPagePathname;

  return <Navigate to={navigateTo} replace />;
}
