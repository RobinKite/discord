import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/channels/@me", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <p>Home</p>;
};

export default Home;
