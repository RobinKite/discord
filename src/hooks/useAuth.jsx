import { useSelector } from "react-redux";

const useAuth = () => {
  return {
    isLoggedIn: useSelector((state) => state.auth.isLoggedIn),
    isRefreshing: useSelector((state) => state.auth.isRefreshing),
  };
};

export default useAuth;
