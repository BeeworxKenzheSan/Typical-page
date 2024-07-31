import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  function onLogin(email) {
    setIsAuth(true);
    localStorage.setItem("isAuth", email);
  }

  function onLogout() {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  }

  const globalState = {
    isLoggedIn: isAuth,
    onLogin: onLogin,
    onLogout: onLogout,
  };
  return (
    <AuthContext.Provider value={globalState}>{children}</AuthContext.Provider>
  );
};
