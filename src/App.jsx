import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import MainHeader from "./components/main-header/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState({});

  const loginHandler = (email, password) => {
    setUserName({ email: email, password: password });
    setIsLoggedIn(true);
    localStorage.setItem("isLogged", email);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLogged");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("isLogged")) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <React.Fragment>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
