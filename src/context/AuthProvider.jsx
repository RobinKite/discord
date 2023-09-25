import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const initialValue = JSON.parse(localStorage.getItem("session")) || {};
  const [auth, setAuth] = useState(initialValue);

  const setPersistentAuth = (object) => {
    localStorage.setItem("session", JSON.stringify(object));
    setAuth(object);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth: setPersistentAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
