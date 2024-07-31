import { useContext, useEffect, useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import MainHeader from "./components/main-header/MainHeader";
import { AuthContext } from "./store/AuthContext";

function App() {
  const { isLoggedIn, onLogin } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState({});

  const loginHandler = (email, password) => {
    setUserName({ email: email, password: password });
    onLogin(email);
  };

  useEffect(() => {
    const email = localStorage.getItem("isAuth");
    if (email) {
      onLogin(email);
    }
  }, [onLogin]);

  return (
    <>
      <MainHeader />
      <main>{isLoggedIn ? <Home /> : <Login onLogin={loginHandler} />}</main>
    </>
  );
}

export default App;
