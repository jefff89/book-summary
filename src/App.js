import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import SummaryForm from "./pages/SummaryForm";
import Favorites from "./pages/Favorites";
import { Route, Switch } from "react-router-dom";
import FavContextProvider from "./components/store/FavContextProvider";
import LoginModal from "./components/layout/LoginModal";

function App() {
  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    const login = localStorage.getItem("LOGGED_IN");
    if (login === "1") {
      setModalShow(false);
    }
  }, []);

  const loginHandler = () => {
    setModalShow(false);
    localStorage.setItem("LOGGED_IN", "1");
  };

  const logoutHandler = () => {
    setModalShow(true);
    localStorage.removeItem("LOGGED_IN");
  };
  return (
    <FavContextProvider>
      {modalShow && <LoginModal loginHandler={loginHandler} />}
      <Header onClick={logoutHandler} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/summary">
          <SummaryForm />
        </Route>

        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </FavContextProvider>
  );
}

export default App;
