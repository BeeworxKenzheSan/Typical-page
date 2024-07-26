import React, { useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import MainHeader from "./components/main-header/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
